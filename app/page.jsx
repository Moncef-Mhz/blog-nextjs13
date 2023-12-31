/*eslint-disable @next/next/no-img-element */

"use client";
import { useStateContext } from "@/context/store";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { activeTag } = useStateContext();
  const [Articles, setArticles] = useState([]);
  const [newArticle, setNewArticle] = useState([]);

  // FETCCHING ARTICLES
  const fetchArticles = async () => {
    const articles = await fetch("api/blog");
    const data = await articles.json();

    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  //FILTRING ARTICLES
  const filterarray = () => {
    let filter = [];

    if (activeTag == "All") {
      setNewArticle(Articles);
      return;
    } else {
      filter = Articles.filter((item) => item.tags.indexOf(activeTag) >= 0);
    }

    setNewArticle(filter);
  };

  useEffect(() => {
    filterarray();
    console.log(newArticle);
  }, [activeTag]);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-5">
        {activeTag == "All"
          ? Articles?.map(({ _id, title, tags, text, image, slug }) => (
              <div
                key={_id}
                className=" relative h-auto group duration-200 bg-slate-200"
              >
                <Link href={`games/${slug}`} className="bg-slate-200">
                  <img src={image.url} alt={title} loading="lazy" />
                  <div className="inset-0 absolute flex items-center justify-center bg-black/50  opacity-0 group-hover:opacity-100  duration-150">
                    <h1 className=" text-2xl  text-white  ">{title}</h1>
                  </div>
                </Link>
              </div>
            ))
          : newArticle?.map(({ _id, title, tags, text, image, slug }) => (
              <div
                key={_id}
                className=" relative h-auto group duration-200 bg-slate-200"
              >
                <Link href={`games/${slug}`} className="bg-slate-200">
                  <img src={image.url} alt={title} />
                  <div className="inset-0 absolute flex items-center justify-center bg-black/50  opacity-0 group-hover:opacity-100  duration-150">
                    <h1 className=" text-2xl  text-white  ">{title}</h1>
                  </div>
                </Link>
              </div>
            ))}
      </div>
    </main>
  );
}
