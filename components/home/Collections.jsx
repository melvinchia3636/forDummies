/* eslint-disable react/prop-types */
import React from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function FeaturedCollections({ collections }) {
  return (
    <div className="flex flex-col items-center mt-16">
      <h2 className="font-semibold text-4xl after:w-32 after:border-b-4 after:absolute after:-bottom-2 after:rounded-full after:left-1/2 after:border-yellow-400 relative after:-translate-x-1/2">
        Featured Collections
      </h2>
      <div className="px-32 grid grid-cols-2 gap-12 mt-16">
        {collections.map((e) => (
          <div
            key={e}
            className="flex flex-col bg-neutral-50 shadow-md rounded-md overflow-hidden"
          >
            <Image width="1024" height="550" alt="" src={e.image.src} />
            <div className="p-6 flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-3xl font-medium">{e.title}</h3>
                <p className="text-gray-600 mt-4">{e.description}</p>
              </div>
              <div className="flex justify-end items-center">
                <button type="button" className="flex items-center gap-1 text-xl mt-6 font-medium">
                  Explore collection
                  <Icon
                    icon="uil:arrow-right"
                    className="w-6 h-6"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
