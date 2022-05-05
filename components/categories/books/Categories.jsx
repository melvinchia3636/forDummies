/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

function Categories({ header: { childCategories } }) {
  return (
    childCategories.length ? <div className="flex flex-col items-center mt-16 mx-20">
      <h2 className="font-semibold text-4xl after:w-32 after:border-b-4 after:absolute after:-bottom-2 after:rounded-full after:left-1/2 after:border-yellow-400 relative after:-translate-x-1/2">
        Explore Categories
      </h2>
      <div className="w-full mt-16 grid grid-cols-4 gap-4">
        {childCategories.map((e) => (
          <>
            <Link href={`./${e.slug}-${e.categoryId}`} passHref>
              <div
                className="flex flex-col cursor-pointer items-center justify-center px-6 w-full h-32 rounded-md shadow-md relative overflow-hidden after:bg-yellow-400 after:w-full after:h-full after:top-full hover:after:top-0 after:left-0 after:transition-all after:duration-300 after:absolute after:mix-blend-screen group"
                style={{
                  backgroundImage: `url('https://dummies.com/${e.image.src}')`,
                }}
              >
                <h3 className="text-white group-hover:text-stone-800 transition-all duration-300 text-lg font-semibold leading-snug text-center relative z-10">
                  {e.title}
                </h3>
              </div>
            </Link>
          </>
        ))}
      </div>
    </div> : ""
  )
}

export default Categories