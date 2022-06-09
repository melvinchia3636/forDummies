/* eslint-disable react/prop-types */
import moment from 'moment';
import React from 'react';

function Header({ data }) {
  return (
    <div
      className="mt-16 flex px-56 gap-16 items-center w-full h-[32rem] bg-black bg-blend-darken bg-opacity-50 text-neutral-50 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: 'url(\'https://www.dummies.com/images/background-image-3.png\')',
      }}
    >
      <div className="relative after:absolute after:w-full after:h-full after:border-neutral-50 after:border-r after:border-b after:top-[9px] after:left-[8px]">
        <div className="w-[1px] h-[12px] rotate-[-40deg] absolute right-[-4px] top-[-1px] bg-neutral-50" />
        <div className="w-[1px] h-[12px] rotate-[-40deg] absolute right-[-4px] top-[-1px] bg-neutral-50" />
        <div className="w-[1px] h-[12px] rotate-[-40deg] absolute left-[4px] bottom-[-10px] bg-neutral-50" />
        <img src={data.image.src} alt="" className="w-80 border-neutral-50 border relative z-10" />
      </div>
      <div className="w-full">
        <h1 className="text-4xl font-semibold leading-snug">
          {data.title}
        </h1>
        <p className="text-xl font-semibold leading-snug mt-2">
          by
          {' '}
          {data.authors.map((e) => e.name).join(', ')}
        </p>
        <p className="text-lg font-semibold leading-snug mt-8">
          Published:
          {' '}
          {moment(data.publishedDate).format('MMMM Do YYYY')}
        </p>
        <button type="button" className="bg-yellow-400 text-lg text-neutral-700 rounded-md shadow-md font-semibold px-16 py-4 mt-10 w-min whitespace-nowrap ">
          Buy on Amazon
        </button>
      </div>
    </div>
  );
}

export default Header;
