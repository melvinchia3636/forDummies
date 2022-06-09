/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import React from 'react';

function CheatSheet({ data }) {
  return (
    <div className="w-full px-56 py-16 bg-yellow-400 flex flex-col items-center">
      <img alt="" src="https://www.dummies.com/img/cheat-sheet-book-details.1f722c82.svg" />
      <h3 className="font-semibold text-4xl my-6 after:w-32 after:border-b-4 after:absolute after:-bottom-2 after:rounded-full after:left-1/2 after:border-stone-800 relative after:-translate-x-1/2">{data.cheatSheet.title}</h3>
      <p className="mt-2 desc text-center description">{data.cheatSheet.description}</p>
      <button type="button" className="text-xl font-semibold flex items-center gap-2 mt-6">
        Read more
        <Icon icon="uil:arrow-right" className="w-7 h-7" />
      </button>
    </div>
  );
}

export default CheatSheet;
