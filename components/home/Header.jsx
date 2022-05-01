import React from "react";

export default function Header({ header }) {
  return (
    <div
      className="mt-16 flex flex-col px-20 justify-center w-full h-[28rem] overflow-hidden bg-cover bg-center bg-black bg-blend-darken bg-opacity-50"
      style={{
        backgroundImage: `url('${header.image}')`,
      }}
    >
      <h1 className="text-white w-1/2 text-5xl font-semibold leading-snug">
        {header.title}
      </h1>
      <p className="text-white w-7/12 mt-6 leading-relaxed">
        {header.description}
      </p>
      <button className="bg-yellow-400 rounded-md shadow-md text-stone-900 font-semibold px-16 py-4 mt-10 w-min whitespace-nowrap">
        Read More
      </button>
    </div>
  );
};