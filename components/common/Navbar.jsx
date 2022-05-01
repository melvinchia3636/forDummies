import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie";
import loading from "../../assets/loading.json";

const ArticleExplorer = ({
  currentLevel,
  setCurrentLevel,
  breadcrumbs,
  setBreadcrumbs,
  articlesExplorerOpen
}) => {
  const articleExplorer = useRef();
  const [data, setData] = useState(null);
  const [currentData, setCurrentData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("https://cors-anywhere.thecodeblog.net/dummies-api.dummies.com/v2/categories/0/tree/articles")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const gotoSubCategories = async (id) => {
    const newData = { ...data }
    const target = [...currentLevel, id]
      .reduce((a, b) => (a.categories || a.subCategories)
        ?.filter(e => e.categoryId === b)[0], newData
      )

    if (target.hasSubCategories) {
      setIsLoading(true);
      articleExplorer.current.scrollTop = 0;

      const res = await fetch(`https://cors-anywhere.thecodeblog.net/dummies-api.dummies.com/v2/categories/${id}/tree/articles`)
        .then((res) => res.json())

      target.subCategories = res.categories
      setBreadcrumbs(res.breadcrumbs)
      setData(newData)
    }
    setCurrentLevel([...currentLevel, id])
    setIsLoading(false)
  }

  useEffect(() => {
    if (!currentLevel.length) {
      setCurrentData(data)
    } else {
      setCurrentData(currentLevel
        .reduce((a, b) => (a.categories || a.subCategories)
          ?.filter(e => e.categoryId === b)[0], data
        ))
    }
    articleExplorer.current.scrollTop = 0;
  }, [currentLevel, data])

  return <div ref={articleExplorer} className={`absolute z-[9999] bottom-0 left-0 translate-y-full transition-all shadow-md ${isLoading ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden"} ${articlesExplorerOpen ? "h-[36rem] py-20" : "h-0 py-0"} w-full bg-white px-20`}>
    {breadcrumbs.length > 0 && <div className="flex ml-4 gap-1 mb-2 font-medium">
      <button className={`font-medium ${!currentLevel.length ? "font-semibold text-yellow-400 underline" : ""}`} onClick={() => {
        setCurrentLevel([]);
        setBreadcrumbs([]);
      }}>All</button> /
      {breadcrumbs.map((e, i) => (
        <>
          <button onClick={() => {
            setCurrentLevel(currentLevel.slice(0, currentLevel.indexOf(e.categoryId) + 1))
            setBreadcrumbs(breadcrumbs.slice(0, i + 1))
          }} className={`font-medium ${e.categoryId === currentLevel[currentLevel.length - 1] ? "font-semibold text-yellow-400 underline" : ""}`}>{e.name}</button>
          /
        </>
      ))}
    </div>}
    <h2 className="text-3xl font-bold relative after:w-16 px-4 after:border-b-4 after:border-yellow-400 after:absolute after:-bottom-2 after:left-4 after:rounded-full">
      {currentData?.title.replace('Level 0 Category', "Article Categories")}
    </h2>
    <div className="mt-12 divide-y">
      {data && currentData && ((currentData.subCategories || currentData.categories)?.map(e => (
        <button onClick={() => gotoSubCategories(e.categoryId)} className="py-4 text-lg w-full flex items-center justify-between hover:bg-stone-50 px-4 hover:rounded-md" key={e.title}>
          {e.title}
          {e.hasSubCategories && <Icon icon="uil:angle-right" className="w-5 h-5" />}
        </button>
      )))}
    </div>
    {isLoading && <div className="absolute h-[36rem] w-full bg-black bg-opacity-[1%] top-0 left-0">
      <div className="bg-white rounded-lg shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Lottie options={{
          loop: true,
          autoplay: true,
          animationData: loading,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
          }
        }}
          height={80}
          width={80}
          isStopped={false}
          isPaused={false} />
      </div>
    </div>}
  </div>
}

const BooksExplorer = ({
  currentLevel,
  setCurrentLevel,
  breadcrumbs,
  setBreadcrumbs,
  booksExplorerOpen
}) => {
  const booksExplorer = useRef();
  const [data, setData] = useState(null);
  const [currentData, setCurrentData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("https://cors-anywhere.thecodeblog.net/dummies-api.dummies.com/v2/categories/0/tree/books")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const gotoSubCategories = async (id) => {
    const newData = { ...data }
    const target = [...currentLevel, id]
      .reduce((a, b) => (a.categories || a.subCategories)
        ?.filter(e => e.categoryId === b)[0], newData
      )

    if (target.hasSubCategories) {
      setIsLoading(true);
      booksExplorer.current.scrollTop = 0;

      const res = await fetch(`https://cors-anywhere.thecodeblog.net/dummies-api.dummies.com/v2/categories/${id}/tree/books`)
        .then((res) => res.json())

      target.subCategories = res.categories
      setBreadcrumbs(res.breadcrumbs)
      setData(newData)
      setCurrentLevel([...currentLevel, id])
    } else {
      router.push(`/categories/books/${target?.title.toLowerCase().replace(/[^A-Za-z0-9\s]/g, "").replace(/\s+/g, '-')}-${target?.categoryId}`)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if (!currentLevel.length) {
      setCurrentData(data)
    } else {
      setCurrentData(currentLevel
        .reduce((a, b) => (a.categories || a.subCategories)
          ?.filter(e => e.categoryId === b)[0], data
        ))
    }
    booksExplorer.current.scrollTop = 0;
  }, [currentLevel, data])

  return <div ref={booksExplorer} className={`absolute z-[9999] bottom-0 left-0 translate-y-full transition-all shadow-md ${isLoading ? "overflow-hidden" : "overflow-y-auto overflow-x-hidden"} ${booksExplorerOpen ? "h-[36rem] py-20" : "h-0 py-0"} w-full bg-white px-20`}>
    {breadcrumbs.length > 0 && <div className="flex ml-4 gap-1 mb-2 font-medium">
      <button className={`font-medium ${!currentLevel.length ? "font-semibold text-yellow-400 underline" : ""}`} onClick={() => {
        setCurrentLevel([]);
        setBreadcrumbs([]);
      }}>All</button> /
      {breadcrumbs.map((e, i) => (
        <>
          <button onClick={() => {
            setCurrentLevel(currentLevel.slice(0, currentLevel.indexOf(e.categoryId) + 1))
            setBreadcrumbs(breadcrumbs.slice(0, i + 1))
          }} className={`font-medium ${e.categoryId === currentLevel[currentLevel.length - 1] ? "font-semibold text-yellow-400 underline" : ""}`}>{e.name}</button>
          /
        </>
      ))}
    </div>}
    <div className="w-full flex items-center justify-between px-4">
      <h2 className="text-3xl font-bold relative after:w-16 after:border-b-4 after:border-yellow-400 after:absolute after:-bottom-2 after:left-0 after:rounded-full">
        {currentData?.title.replace('Level 0 Category', "Book Categories")}
      </h2>
      {currentLevel.length > 0 && <Link passHref href={`/categories/books/${currentData?.title.toLowerCase().replace(/[^A-Za-z0-9\s]/g, "").replace(/\s+/g, '-')}-${currentData?.categoryId}`}>
        <div className="flex items-center gap-1 text-xl mt-6 font-medium cursor-pointer">Explore all
          <Icon
            icon="uil:arrow-right"
            className="w-6 h-6"
          />
        </div>
      </Link>}
    </div>
    <div className="mt-12 divide-y">
      {data && currentData && ((currentData.subCategories || currentData.categories)?.map(e => (
        <button onClick={() => gotoSubCategories(e.categoryId)} className="py-4 text-lg w-full flex items-center justify-between hover:bg-stone-50 px-4 hover:rounded-md" key={e.title}>
          {e.title}
          {e.hasSubCategories && <Icon icon="uil:angle-right" className="w-5 h-5" />}
        </button>
      )))}
    </div>
    {
      isLoading && <div className="absolute h-[36rem] w-full bg-black bg-opacity-[1%] top-0 left-0">
        <div className="bg-white rounded-lg shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Lottie options={{
            loop: true,
            autoplay: true,
            animationData: loading,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice'
            }
          }}
            height={80}
            width={80}
            isStopped={false}
            isPaused={false} />
        </div>
      </div>
    }
  </div >
}

export default function Navbar() {
  const [articlesExplorerOpen, setArticlesExplorerOpen] = useState(false);
  const [articleExplorerCurrentLevel, setArticleExplorerCurrentLevel] = useState([]);
  const [articleExplorerBreadcrumbs, setArticleExplorerBreadcrumbs] = useState([]);

  const [booksExplorerOpen, setBooksExplorerOpen] = useState(false);
  const [booksExplorerCurrentLevel, setBooksExplorerCurrentLevel] = useState([]);
  const [booksExplorerBreadcrumbs, setBooksExplorerBreadcrumbs] = useState([]);

  return (
    <nav className="bg-yellow-400 fixed top-0 left-0 text-stone-900 z-[9999] shadow-md w-full p-5 px-7 flex items-center justify-between">
      <Image
        width="128"
        height="32"
        alt=""
        src="https://www.dummies.com/img/logo.f7c39ad9.svg"
      />
      <div className="flex gap-16 font-bold">
        <button onClick={() => {
          if (!articlesExplorerOpen) {
            setBooksExplorerOpen(false);
            setTimeout(() => {
              setBooksExplorerCurrentLevel([]);
              setBooksExplorerBreadcrumbs([]);
            }, 100)
          }
          setArticlesExplorerOpen(!articlesExplorerOpen);
          setTimeout(() => {
            setArticleExplorerCurrentLevel([]);
            setArticleExplorerBreadcrumbs([]);
          }, 100)
        }} className="flex font-bold items-center gap-0.5">
          Articles
          <Icon
            icon="uil:angle-down"
            className={`w-5 h-5 stroke-1 stroke-stone-900 transition-all ${!articlesExplorerOpen ? "rotate-0" : "rotate-180"}`}
          />
        </button>
        <button onClick={() => {
          if (!booksExplorerOpen) {
            setArticlesExplorerOpen(false);
            setTimeout(() => {
              setArticleExplorerCurrentLevel([]);
              setArticleExplorerBreadcrumbs([]);
            }, 100)
          }
          setBooksExplorerOpen(!booksExplorerOpen);
          setTimeout(() => {
            setBooksExplorerCurrentLevel([]);
            setBooksExplorerBreadcrumbs([]);
          }, 100)
        }} className="flex font-bold items-center gap-0.5">
          Books
          <Icon
            icon="uil:angle-down"
            className={`w-5 h-5 stroke-1 stroke-stone-900 transition-all ${!booksExplorerOpen ? "rotate-0" : "rotate-180"}`}
          />
        </button>
        <a className="flex items-center gap-0.5">
          Collections
          <Icon
            icon="uil:angle-down"
            className="w-5 h-5 stroke-1 stroke-stone-900"
          />
        </a>
        <a>Custom Solutions</a>
      </div>
      <button>
        <Icon
          icon="uil:search"
          className="w-6 h-6 stroke-[0.6px] stroke-stone-900"
        />
      </button>
      <ArticleExplorer
        currentLevel={articleExplorerCurrentLevel}
        setCurrentLevel={setArticleExplorerCurrentLevel}
        breadcrumbs={articleExplorerBreadcrumbs}
        setBreadcrumbs={setArticleExplorerBreadcrumbs}
        articlesExplorerOpen={articlesExplorerOpen}
      />
      <BooksExplorer
        currentLevel={booksExplorerCurrentLevel}
        setCurrentLevel={setBooksExplorerCurrentLevel}
        breadcrumbs={booksExplorerBreadcrumbs}
        setBreadcrumbs={setBooksExplorerBreadcrumbs}
        booksExplorerOpen={booksExplorerOpen}
      />
    </nav>
  );
};