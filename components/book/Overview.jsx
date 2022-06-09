/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';

function Overview({ data }) {
  return (
    <div className="flex flex-col items-center my-16 px-20">
      <h2 className="font-semibold text-4xl mb-12 after:w-32 after:border-b-4 after:absolute after:-bottom-2 after:rounded-full after:left-1/2 after:border-yellow-400 relative after:-translate-x-1/2">
        Overview
      </h2>
      <div
        className="columns-2 [column-rule:1px_solid_#EEEEEE] gap-x-12 overview leading-7"
        dangerouslySetInnerHTML={
          { __html: data.description }
        }
      />
    </div>
  );
}

export default Overview;
