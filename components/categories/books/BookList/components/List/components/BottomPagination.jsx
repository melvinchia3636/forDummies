/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import React from 'react';

function BottomPagination({ currentPage, setCurrentPage, bookList }) {
  return (
    <div className="flex items-center w-full justify-between">
      <button
        onClick={() => {
          if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
          }
        }}
        type="button"
        className="mr-4 p-2 pr-4 border flex border-neutral-200 hover:bg-neutral-50 transition-all shadow-sm rounded-md"
      >
        <Icon icon="uil:angle-left" className="w-6 h-6 mr-2" />
        Last page
      </button>
      <p>
        Results
        {' '}
        <span className="underline">
          {currentPage * 10 + 1}
          {' '}
          -
          {' '}
          {Math.min(currentPage * 10 + 10, bookList.total) || 0}
        </span>
        {' '}
        of
        {' '}
        {Math.ceil(bookList.total) || 0}
      </p>
      <button
        onClick={() => {
          if (bookList.total > (currentPage + 1) * 10) {
            setCurrentPage(currentPage + 1);
          }
        }}
        type="button"
        className="ml-4 p-2 pl-4 border flex border-neutral-200 hover:bg-neutral-50 transition-all shadow-sm rounded-md"
      >
        Next page
        <Icon icon="uil:angle-right" className="w-6 h-6 ml-2" />
      </button>
    </div>
  );
}

export default BottomPagination;
