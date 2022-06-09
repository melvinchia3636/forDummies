/* eslint-disable react/prop-types */
import React from 'react';
import { JSDOM } from 'jsdom';
import { useRouter } from 'next/router';
import Header from '../../../components/categories/books/Header';
import Categories from '../../../components/categories/books/Categories';
import BookList from '../../../components/categories/books/BookList';
import Breadcrumbs from '../../../components/common/Breadcrumbs';

export async function getServerSideProps({ params }) {
  const { id } = params;
  const raw = await fetch(`https://www.dummies.com/category/books/${id}`).then((res) => res.text());
  const { document } = (new JSDOM(raw)).window;
  const rawData = document.querySelector('#state-object-element');
  const data = JSON.parse(rawData.innerHTML.replace(/&amp;/g, '&'));
  const { categoryState: { relatedCategories }, listState } = data;
  const {
    data: {
      title, image, description, breadcrumbs, parentCategory, childCategories,
    },
  } = relatedCategories;
  const {
    list, page, sortField, filterData,
  } = listState;

  return {
    props: {
      header: {
        title,
        image,
        description,
        breadcrumbs,
        parentCategory,
        childCategories,
      },
      list: {
        list,
        page,
        sortField,
        filterData,
      },
    },
  };
}

export default function BookCategories({ header, list }) {
  const { query: { id } } = useRouter();

  return (
    <div>
      <Breadcrumbs breadcrumbs={header.breadcrumbs} id={id} />
      <Header header={header} />
      <Categories header={header} />
      <BookList list={list} title={header.title} id={id.split('-').pop()} />
    </div>
  );
}
