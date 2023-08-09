/*eslint-disable @next/next/no-img-element */

"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [Articles, setArticles] = useState([]);

  // FETCCHING ARTICLES
  const fetchArticles = async () => {
    const articles = await fetch("api/blog");
    const data = await articles.json();

    setArticles(data);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 px-10">
        {Articles?.map(({ _id, title, tags, text, image }) => (
          <div
            key={_id}
            className=" relative h-auto group duration-200 bg-slate-200"
          >
            <Link href={`games/${_id}`} className="bg-slate-200">
              <img src={image.url} alt={image.public_id} />
              <div className="inset-0 absolute w-full h-full   bg-black/50  opacity-0 group-hover:opacity-100 ">
                <h1 className=" w-full text-center text-2xl text-white h-full translate-y-[45%]">
                  {title}
                </h1>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
