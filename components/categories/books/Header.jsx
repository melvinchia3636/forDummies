/* eslint-disable react/prop-types */
import React from 'react';

function Header({ header: { image, title, description } }) {
  return (
    <div
      className={`flex flex-col px-20 justify-center w-full ${image.src ? 'h-[32rem] bg-black bg-blend-darken bg-opacity-50 text-neutral-50' : 'h-auto py-20 bg-stone-100'} overflow-hidden bg-cover bg-center`}
      style={{
        backgroundImage: `url('${image.src}')`,
      }}
    >
      <h1 className="w-1/2 text-5xl font-semibold leading-snug">
        {title}
        {' '}
        Books
      </h1>
      <p className="w-7/12 mt-6 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default Header;
