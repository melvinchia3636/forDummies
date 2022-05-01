/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import React from "react";

export default function Categories({ categories }) {
  return (
    <div className="flex flex-col items-center mt-16">
      <h2 className="font-semibold text-4xl after:w-32 after:border-b-4 after:absolute after:-bottom-2 after:rounded-full after:left-1/2 after:border-yellow-400 relative after:-translate-x-1/2">
        Explore Categories
      </h2>
      <div className="w-full mt-16">
        {categories.map((e) => (
          <>
            <div
              className="h-[30rem] flex flex-col justify-center px-20 w-full bg-cover bg-blend-darken bg-black bg-opacity-50"
              style={{
                backgroundImage: `url('${e.image.src}')`,
              }}
            >
              <h3 className="text-white w-1/2 text-5xl font-semibold leading-snug">
                {e.title}
              </h3>
              <p className="text-white w-7/12 mt-6 leading-relaxed">
                {e.description}
              </p>
              <div className="flex gap-4">
                <button className="bg-yellow-400 rounded-md shadow-md text-stone-900 font-semibold px-16 py-4 mt-10 w-min whitespace-nowrap">
                  View books
                </button>
                <button className="bg-yellow-400 rounded-md shadow-md text-stone-900 font-semibold px-16 py-4 mt-10 w-min whitespace-nowrap">
                  View articles
                </button>
              </div>
            </div>
            <div className="flex px-20 pt-16 pb-6 gap-6">
              {e.relatedBooks.map((e) => (
                <div
                  key={e}
                  className="p-6 shadow-md rounded-md w-full gap-6 flex items-center"
                >
                  <img alt="" src={e.image.src} className="w-32" />
                  <div className="flex flex-col justify-between">
                    <span className="text-yellow-400 font-medium">
                      {e.category.title}
                    </span>
                    <h4 className="text-2xl font-medium mt-1">{e.title}</h4>
                    <button className="flex items-center gap-1 text-lg mt-6 font-medium">
                      Explore book
                      <Icon
                        icon="uil:arrow-right"
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex px-20 pb-16 gap-6">
              {e.relatedArticles.map((e) => (
                <div
                  key={e}
                  className="p-6 shadow-md rounded-md w-full gap-6 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-yellow-400 font-medium">
                      {e.category.title}
                    </span>
                    <h4 className="text-2xl font-medium mt-1">{e.title}</h4>
                  </div>
                  <a
                    href={e._links.self}
                    className="flex items-center gap-1 text-lg mt-6 font-medium"
                  >
                    Explore article
                    <Icon
                      icon="uil:arrow-right"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};