/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import React from 'react';

function TopPagination({ currentPage, setCurrentPage, bookList }) {
  return (
    <div className="flex items-center justify-between w-full gap-6">
      <div className="flex items-center p-2 px-3 border border-neutral-200 shadow-sm rounded-md">
        <Icon icon="octicon:filter-16" className="mr-2" />
        <div className="font-semibold mr-1">Sort by:</div>
        <select className=" py-2 bg-transparent">
          <option value="time">Newest to Oldest</option>
          <option value="title ">Title - A to Z</option>
        </select>
      </div>
      <div className="flex items-center">
        <button
          type="button"
          onClick={
            () => {
              if (currentPage > 0) {
                setCurrentPage(currentPage - 1);
              }
            }
          }
          className="mr-4 p-2 border border-neutral-200 hover:bg-neutral-50 transition-all shadow-sm rounded-md"
        >
          <Icon icon="uil:angle-left" className="w-6 h-6" />
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
          type="button"
          onClick={
            () => {
              if (bookList.total > (currentPage + 1) * 10) {
                setCurrentPage(currentPage + 1);
              }
            }
          }
          className="ml-4 p-2 border border-neutral-200 hover:bg-neutral-50 transition-all shadow-sm rounded-md"
        >
          <Icon icon="uil:angle-right" className="w-6 h-6" />
        </button>
      </div>
    </div>

  );
}

export default TopPagination;
