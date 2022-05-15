/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react'
import StickyBox from "react-sticky-box";
import moment from "moment";

function BookList({ title, list, id }) {
  const [filter, setFilter] = useState([]);
  const [bookList, setBookList] = useState(list.list)
  const [firstTime, setFirstTime] = useState(true)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!firstTime) {
      if (filter.length) {
        setLoading(true)
        fetch(`https://dummies-api.dummies.com/v2/categories/${id}/categoryBooks?size=10&offset=0&sortField=time&sortOrder=1`, {
          method: "POST",
          body: JSON.stringify({ "categoriesIds": filter, "articleTypes": [] }),
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(res => res.json()).then(data => {
          setLoading(false);
          setBookList(data);
        })
      } else {
        setLoading(true)
        fetch(`https://dummies-api.dummies.com/v2/categories/${id}/categoryBooks?size=10&offset=0&sortField=time&sortOrder=1`, {
          method: "POST",
          body: JSON.stringify({ "categoriesIds": [], "articleTypes": [] }),
          headers: {
            'Content-Type': 'application/json',
          }
        }).then(res => res.json()).then(data => {
          setLoading(false);
          setBookList(data)
        })
      }
    }
    setFirstTime(false);
  }, [filter, id]);

  return (
    <div className="flex flex-col items-center my-20 mx-20">
      <h2 className="font-semibold text-4xl after:w-32 after:border-b-4 after:absolute after:-bottom-2 after:rounded-full after:left-1/2 after:border-yellow-400 relative after:-translate-x-1/2">
        {title} <span className="font-normal">Books</span>
      </h2>
      <div className="w-full flex items-start gap-16 mt-20">
        <StickyBox offsetTop={120} offsetBottom={20}>
          <div className="p-2 pt-0 pb-6 mb-6 border-b-2 border-neutral-200 min-w-64">
            <h2 className="font-semibold text-2xl">Filtered Results</h2>
            <div>{bookList.total || 0} results</div>
          </div>
          {list.filterData.categoriesFilter && <div className="p-2">
            <h2 className="font-semibold text-2xl">Category Filter</h2>
            <div className="divide-y divide-neutral-200">
              {list.filterData.categoriesFilter.slice(1).map(e => (
                <div key={e.itemId} className="flex items-center justify-between gap-8 px-2 py-4">
                  <div className="flex items-center gap-3 ">
                    <input onClick={() => {
                      if (filter.includes(e.itemId)) {
                        setFilter(filter.filter(f => f !== e.itemId))
                      } else {
                        setFilter([...filter, e.itemId])
                      }
                    }} type="checkbox" className="form-checkbox border-[1.6px] rounded-[3px] border-neutral-300 text-yellow-400 focus:border-yellow-400 w-4 h-4" />
                    <label>{e.itemName}</label>
                  </div>
                  <div>{e.count}</div>
                </div>
              ))}
            </div>
          </div>}
        </StickyBox>
        <div className="divide-y-2 divide-neutral-200 flex-1 relative">
          {loading && <div className="absolute left-1/2 top-6 p-4 bg-stone-50 shadow-md !border-0 rounded-md">
            <div className="loader"></div>
          </div>}
          {bookList.items?.map(({ data }) => (
            <div key={data} className={`w-full p-8 flex gap-6 ${loading && "bg-stone-100"}`}>
              <img src={data.image.src} alt="" className="w-44 h-full objectp-contain" />
              <div>
                <span className="text-yellow-400 font-medium text-lg">
                  {data.primaryCategory.title}
                </span>
                <h3 className="font-medium text-2xl mt-1">{data.title}</h3>
                <p className="text-stone-400 font-medium mt-1">Published on {moment(data.publishedDate).format("ll")}</p>
                <p className="mt-3 description">{data.description}</p>
                <a
                  className="flex items-center gap-1 text-lg mt-6 font-medium"
                >
                  Explore books
                  <Icon
                    icon="uil:arrow-right"
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BookList