/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ArticleExplorer from './components/ArticleExplorer';
import BooksExplorer from './components/BooksExplorer';

export default function Navbar() {
  const [articlesExplorerOpen, setArticlesExplorerOpen] = useState(false);
  const [articleExplorerCurrentLevel, setArticleExplorerCurrentLevel] = useState([]);
  const [articleExplorerBreadcrumbs, setArticleExplorerBreadcrumbs] = useState([]);

  const [booksExplorerOpen, setBooksExplorerOpen] = useState(false);
  const [booksExplorerCurrentLevel, setBooksExplorerCurrentLevel] = useState([]);
  const [booksExplorerBreadcrumbs, setBooksExplorerBreadcrumbs] = useState([]);

  const router = useRouter();

  useEffect(() => {
    setArticlesExplorerOpen(false);
    setBooksExplorerOpen(false);

    setTimeout(() => {
      setArticleExplorerCurrentLevel([]);
      setArticleExplorerBreadcrumbs([]);
      setBooksExplorerCurrentLevel([]);
      setBooksExplorerBreadcrumbs([]);
    }, 100);
  }, [router]);

  return (
    <nav className="bg-yellow-400 fixed top-0 left-0 h-20 z-[9999] shadow-md w-full p-5 px-7 flex items-center justify-between">
      <Link href="/" passHref>
        <Image
          width="130"
          height="36"
          alt=""
          className="cursor-pointer"
          src="https://www.dummies.com/img/logo.f7c39ad9.svg"
        />
      </Link>
      <div className="flex gap-16 font-bold">
        <button
          type="button"
          onClick={() => {
            if (!articlesExplorerOpen) {
              setBooksExplorerOpen(false);
              setTimeout(() => {
                setBooksExplorerCurrentLevel([]);
                setBooksExplorerBreadcrumbs([]);
              }, 100);
            }
            setArticlesExplorerOpen(!articlesExplorerOpen);
            setTimeout(() => {
              setArticleExplorerCurrentLevel([]);
              setArticleExplorerBreadcrumbs([]);
            }, 100);
          }}
          className="flex font-bold items-center gap-0.5"
        >
          Articles
          <Icon
            icon="uil:angle-down"
            className={`w-5 h-5 stroke-1 stroke-stone-800 transition-all ${!articlesExplorerOpen ? 'rotate-0' : 'rotate-180'}`}
          />
        </button>
        <button
          type="button"
          onClick={() => {
            if (!booksExplorerOpen) {
              setArticlesExplorerOpen(false);
              setTimeout(() => {
                setArticleExplorerCurrentLevel([]);
                setArticleExplorerBreadcrumbs([]);
              }, 100);
            }
            setBooksExplorerOpen(!booksExplorerOpen);
            setTimeout(() => {
              setBooksExplorerCurrentLevel([]);
              setBooksExplorerBreadcrumbs([]);
            }, 100);
          }}
          className="flex font-bold items-center gap-0.5"
        >
          Books
          <Icon
            icon="uil:angle-down"
            className={`w-5 h-5 stroke-1 stroke-stone-800 transition-all ${!booksExplorerOpen ? 'rotate-0' : 'rotate-180'}`}
          />
        </button>
        <a href="/" className="flex items-center gap-0.5">
          Collections
          <Icon
            icon="uil:angle-down"
            className="w-5 h-5 stroke-1 stroke-stone-800"
          />
        </a>
        <a href="/">Custom Solutions</a>
      </div>
      <button type="button">
        <Icon
          icon="uil:search"
          className="w-6 h-6 stroke-[0.6px] stroke-stone-800"
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
}
