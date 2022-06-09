/* eslint-disable eqeqeq */
/* eslint-disable react/prop-types */
import { Icon } from '@iconify/react';
import Link from 'next/link';
import React from 'react';

function Breadcrumbs({ breadcrumbs, id }) {
  return (
    breadcrumbs.length > 0 && (
      <div className="flex items-center gap-2 p-6 px-20 font-medium mt-20">
        <Link href="/">
          <div
            className="font-medium cursor-pointer"
          >
            Home
          </div>
        </Link>
        <Icon icon="uil:angle-right" />
        {breadcrumbs.map((e) => (
          <>
            <Link href={`/categories/books/${e.slug}-${e.categoryId}`}>
              <div
                className={`font-medium cursor-pointer ${e.categoryId == id.split('-').pop() ? 'font-semibold text-yellow-400' : 'underline'}`}
              >
                {e.name}
              </div>
            </Link>
            <Icon icon="uil:angle-right" />
          </>
        ))}
      </div>
    )
  );
}

export default Breadcrumbs;
