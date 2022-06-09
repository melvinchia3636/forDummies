/* eslint-disable react/no-danger */
import React from 'react';
import Header from '../../components/book/Header';

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
    </div>
  );
}

export default index;
