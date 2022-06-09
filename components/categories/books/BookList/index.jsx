/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import List from './components/List';
import Sidebar from './components/Sidebar';

function BookList({ title, list, id }) {
  const [filter, setFilter] = useState([]);
  const [bookList, setBookList] = useState(list.list);
  const [firstTime, setFirstTime] = useState(true);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setCurrentPage(0);
    if (!firstTime) {
      if (filter.length) {
        setLoading(true);
        fetch(`https://dummies-api.dummies.com/v2/categories/${id}/categoryBooks?size=10&offset=${currentPage * 10}&sortField=time&sortOrder=1`, {
          method: 'POST',
          body: JSON.stringify({ categoriesIds: filter, articleTypes: [] }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((res) => res.json()).then((data) => {
          setLoading(false);
          setBookList(data);
        });
      } else {
        setLoading(true);
        fetch(`https://dummies-api.dummies.com/v2/categories/${id}/categoryBooks?size=10&offset=${currentPage * 10}&sortField=time&sortOrder=1`, {
          method: 'POST',
          body: JSON.stringify({ categoriesIds: [], articleTypes: [] }),
          headers: {
            'Content-Type': 'application/json',
          },
        }).then((res) => res.json()).then((data) => {
          setLoading(false);
          setBookList(data);
        });
      }
    }
    setFirstTime(false);
  }, [filter, id]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummies-api.dummies.com/v2/categories/${id}/categoryBooks?size=10&offset=${currentPage * 10}&sortField=time&sortOrder=1`, {
      method: 'POST',
      body: JSON.stringify({ categoriesIds: filter, articleTypes: [] }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json()).then((data) => {
      setLoading(false);
      setBookList(data);
    });
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center my-20 mx-20">
      <h2 className="font-semibold text-4xl after:w-32 after:border-b-4 after:absolute after:-bottom-2 after:rounded-full after:left-1/2 after:border-yellow-400 relative after:-translate-x-1/2">
        {title}
        {' '}
        <span className="font-normal">Books</span>
      </h2>
      <div className="w-full flex items-start gap-16 mt-20">
        <Sidebar bookList={bookList} list={list} filter={filter} setFilter={setFilter} />
        <List
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          bookList={bookList}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default BookList;
