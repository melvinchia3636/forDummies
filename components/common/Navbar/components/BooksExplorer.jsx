/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

export default function BooksExplorer({
  currentLevel, setCurrentLevel, breadcrumbs, setBreadcrumbs, booksExplorerOpen,
}) {
  const booksExplorer = useRef();
  const [data, setData] = useState(null);
  const [currentData, setCurrentData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('https://cors-anywhere.thecodeblog.net/dummies-api.dummies.com/v2/categories/0/tree/books')
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  const gotoSubCategories = async (id) => {
    const newData = { ...data };
    const target = [...currentLevel, id]
      .reduce((a, b) => (a.categories || a.subCategories)
        ?.filter((e) => e.categoryId === b)[0], newData);

    if (target.hasSubCategories) {
      setIsLoading(true);
      booksExplorer.current.scrollTop = 0;

      const res = await fetch(`https://cors-anywhere.thecodeblog.net/dummies-api.dummies.com/v2/categories/${id}/tree/books`)
        .then((r) => r.json());

      target.subCategories = res.categories;
      setBreadcrumbs(res.breadcrumbs);
      setData(newData);
      setCurrentLevel([...currentLevel, id]);
    } else {
      router.push(`/categories/books/${target?.title.toLowerCase().replace(/[^A-Za-z0-9\s]/g, '').replace(/\s+/g, '-')}-${target?.categoryId}`);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!currentLevel.length) {
      setCurrentData(data);
    } else {
      setCurrentData(currentLevel
        .reduce((a, b) => (a.categories || a.subCategories)
          ?.filter((e) => e.categoryId === b)[0], data));
    }
    booksExplorer.current.scrollTop = 0;
  }, [currentLevel, data]);

  return (
    <div ref={booksExplorer} className={`absolute z-[9999] bottom-0 left-0 translate-y-full transition-all shadow-md ${isLoading ? 'overflow-hidden' : 'overflow-y-auto overflow-x-hidden'} ${booksExplorerOpen ? 'h-[36rem] py-20' : 'h-0 py-0'} w-full bg-neutral-50 px-20`}>
      {breadcrumbs.length > 0 && (
        <div className="flex items-center ml-4 gap-1 mb-2 font-medium">
          <button
            type="button"
            className={`font-medium ${!currentLevel.length ? 'font-semibold text-yellow-400' : 'underline'}`}
            onClick={() => {
              setCurrentLevel([]);
              setBreadcrumbs([]);
            }}
          >
            All
          </button>
          <Icon icon="uil:angle-right" />
          {breadcrumbs.map((e, i) => (
            <>
              <button
                type="button"
                onClick={() => {
                  setCurrentLevel(currentLevel.slice(0, currentLevel.indexOf(e.categoryId) + 1));
                  setBreadcrumbs(breadcrumbs.slice(0, i + 1));
                }}
                className={`font-medium ${e.categoryId === currentLevel[currentLevel.length - 1] ? 'font-semibold text-yellow-400' : 'underline'}`}
              >
                {e.name}
              </button>
              <Icon icon="uil:angle-right" />
            </>
          ))}
        </div>
      )}
      <div className="w-full flex items-center justify-between px-4">
        <h2 className="text-3xl font-bold relative after:w-16 after:border-b-4 after:border-yellow-400 after:absolute after:-bottom-2 after:left-0 after:rounded-full">
          {currentData?.title.replace('Level 0 Category', 'Book Categories')}
        </h2>
        {currentLevel.length > 0 && (
          <Link passHref href={`/categories/books/${currentData?.title.toLowerCase().replace(/[^A-Za-z0-9\s]/g, '').replace(/\s+/g, '-')}-${currentData?.categoryId}`}>
            <div className="flex items-center gap-1 text-xl mt-6 font-medium cursor-pointer">
              Explore all
              <Icon
                icon="uil:arrow-right"
                className="w-6 h-6"
              />
            </div>
          </Link>
        )}
      </div>
      <div className="mt-12 divide-y">
        {data && currentData && ((currentData.subCategories || currentData.categories)?.map((e) => (
          <button type="button" onClick={() => gotoSubCategories(e.categoryId)} className="py-4 text-lg w-full flex items-center justify-between hover:bg-stone-50 px-4 hover:rounded-md" key={e.title}>
            {e.title}
            {e.hasSubCategories && <Icon icon="uil:angle-right" className="w-5 h-5" />}
          </button>
        )))}
      </div>
      {isLoading && (
        <div className="absolute h-[36rem] w-full bg-black bg-opacity-[1%] top-0 left-0">
          <div className="absolute left-1/2 top-6 p-4 bg-stone-50 shadow-md !border-0 rounded-md">
            <div className="loader" />
          </div>
        </div>
      )}
    </div>
  );
}
