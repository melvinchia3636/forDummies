/* eslint-disable react/prop-types */
import React from 'react';
import ReactStickyBox from 'react-sticky-box';

function Sidebar({
  bookList, list, filter, setFilter,
}) {
  return (
    <ReactStickyBox offsetTop={120} offsetBottom={20}>
      <div className="p-2 pt-0 pb-6 mb-6 border-b-2 border-neutral-200 min-w-64">
        <h2 className="font-semibold text-2xl">Filtered Results</h2>
        <div>
          {bookList.total || 0}
          {' '}
          results
        </div>
      </div>
      {list.filterData.categoriesFilter && (
      <div className="p-2">
        <h2 className="font-semibold text-2xl">Category Filter</h2>
        <div className="divide-y divide-neutral-200">
          {list.filterData.categoriesFilter.slice(1).map((e) => (
            <div key={e.itemId} className="flex items-center justify-between gap-8 px-2 py-4">
              <div className="flex items-center gap-3 ">
                <input
                  onClick={() => {
                    if (filter.includes(e.itemId)) {
                      setFilter(filter.filter((f) => f !== e.itemId));
                    } else {
                      setFilter([...filter, e.itemId]);
                    }
                  }}
                  type="checkbox"
                  className="form-checkbox border-[1.6px] rounded-[3px] border-neutral-300 text-yellow-400 focus:border-yellow-400 w-4 h-4"
                />
                <p>{e.itemName}</p>
              </div>
              <div>{e.count}</div>
            </div>
          ))}
        </div>
      </div>
      )}
    </ReactStickyBox>
  );
}

export default Sidebar;
