/* eslint-disable react/prop-types */
import React from 'react';

export default function Header({ header }) {
  return (
    <div
      className="mt-20 flex flex-col px-20 justify-center w-full h-[32rem] overflow-hidden bg-cover bg-center bg-black bg-blend-darken bg-opacity-50"
      style={{
        backgroundImage: `url('${header.image}')`,
      }}
    >
      <h1 className="text-neutral-50 w-1/2 text-5xl font-semibold leading-snug">
        {header.title}
      </h1>
      <p className="text-neutral-50 w-7/12 mt-6 leading-relaxed">
        {header.description}
      </p>
      <button type="button" className="bg-yellow-400 rounded-md shadow-md font-semibold px-16 py-4 mt-10 w-min whitespace-nowrap">
        Read More
      </button>
    </div>
  );
}
