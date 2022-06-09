/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
import { Icon } from '@iconify/react';
import moment from 'moment';
import React from 'react';

function List({ loading, bookList }) {
  return (
    <div className="divide-y-2 divide-neutral-200 flex-1 relative">
      {loading && (
      <div className="absolute left-1/2 top-6 p-4 bg-stone-50 shadow-md !border-0 rounded-md">
        <div className="loader" />
      </div>
      )}
      {bookList.items?.map(({ bookId, data }) => (
        <div key={data} className={`w-full p-8 flex gap-6 ${loading && 'bg-stone-100'}`}>
          <img src={data.image.src} alt="" className="w-44 h-full objectp-contain" />
          <div className="-mt-1">
            <span className="text-yellow-400 font-medium text-lg">
              {data.primaryCategory.title}
            </span>
            <h3 className="font-medium text-2xl mt-1">{data.title}</h3>
            <p className="text-stone-400 font-medium mt-1">
              Published on
              {' '}
              {moment(data.publishedDate).format('ll')}
            </p>
            <div
              className="mt-3 h-[4.4rem] overflow-hidden"
              dangerouslySetInnerHTML={
                  { __html: data.description }
                }
            />
            <a
              href={`/book/${bookId}/`}
              className="flex items-center gap-1 text-lg mt-6 font-medium"
            >
              Explore books
              <Icon
                icon="uil:arrow-right"
                className="w-5 h-5"
              />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
