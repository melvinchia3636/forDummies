/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import Image from "next/image";
import { JSDOM } from "jsdom";
import Header from "../components/home/Header";
import FeaturedCollections from "../components/home/Collections";
import Categories from "../components/home/Categories";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export async function getStaticProps() {
  const raw = await fetch(
    "https://www.dummies.com/"
  ).then((response) => response.text());

  const { document } = (new JSDOM(raw)).window;

  const rawData = document.querySelector("#state-object-element");
  const data = JSON.parse(rawData.innerHTML.replace(/&amp;/g, '&'));
  const { collections, categories } = data.homeState.home;

  const headerTitle = document.querySelector(
    "[data-testid='headerBlockTitle']"
  ).textContent;
  const headerDescription = document.querySelector(
    "[data-testid='headerBlockDescription']"
  ).textContent;
  const headerLink = document.querySelector(
    "[data-testid='headerBlockDescription'] ~ .actions > a"
  ).href;
  const headerImage = document
    .querySelector(".header-block .bg-img")
    .getAttribute("data-src");

  const header = {
    title: headerTitle,
    description: headerDescription,
    link: headerLink,
    image: headerImage,
  };

  return {
    props: {
      collections,
      categories,
      header,
    },
  }
}

export default function Home({ collections, categories, header }) {
  return (
    <div className="tracking-wide">
      <Navbar />
      <Header header={header} />
      <FeaturedCollections collections={collections} />
      <Categories categories={categories} />
      <Footer />
    </div>
  );
}
