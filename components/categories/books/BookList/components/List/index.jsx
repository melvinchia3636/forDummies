/* eslint-disable react/prop-types */
import React from 'react';
import BottomPagination from './components/BottomPagination';
import TopPagination from './components/TopPagination';
import List from './components/List';

function BookList({
  currentPage, setCurrentPage, bookList, loading,
}) {
  return (
    <div className="flex flex-col flex-1 items-center gap-6">
      <TopPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        bookList={bookList}
      />
      <List loading={loading} bookList={bookList} />
      <BottomPagination
        bookList={bookList}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default BookList;
