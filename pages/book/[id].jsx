import { Icon } from '@iconify/react';
import React from 'react';
import AboutAuthors from '../../components/book/AboutAuthors';
import CheatSheet from '../../components/book/CheatSheet';
import Header from '../../components/book/Header';
import Overview from '../../components/book/Overview';

export async function getServerSideProps({ params }) {
  const { id } = params;
  const data = await fetch(`https://dummies-api.dummies.com/v2/books/${id}`).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}

function index({ data: { data } }) {
  return (
    <div className="flex-1 flex flex-col">
      <Header data={data} />
      <Overview data={data} />
      <CheatSheet data={data} />
      <AboutAuthors data={data} />
      <div className="w-full px-20 py-16 bg-yellow-400 flex flex-col items-center">
        <h3 className="font-semibold text-4xl mb-16 after:w-32 after:border-b-4 after:absolute after:-bottom-2 after:rounded-full after:left-1/2 after:border-stone-800 relative after:-translate-x-1/2">Related Books</h3>
        <div className="flex gap-8 w-full">
          {data.relatedBooks.map((e) => (
            <div className="border border-stone-800 w-full relative after:w-full after:h-full after:bg-stone-800 after:absolute after:top-0 after:left-0 after:transition-all transition-all hover:after:top-2 hover:after:left-2 hover:-translate-x-2 hover:-translate-y-2 after:duration-500 duration-500">
              <div className="flex flex-col items-center gap-6 relative z-40 bg-white p-8">
                <img alt="" src={e.image.src} className="h-48" />
                <p className="font-medium text-yellow-400">{e.primaryCategory.title}</p>
                <h4 className="text-xl font-semibold text-center -mt-5">{e.name}</h4>
                <div className="h-full flex items-end">
                  <a
                    href={`/book/${e.bookId}/`}
                    className="flex items-center gap-1 text-lg font-medium"
                  >
                    Explore books
                    <Icon
                      icon="uil:arrow-right"
                      className="w-5 h-5"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default index;
