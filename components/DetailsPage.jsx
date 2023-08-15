/*eslint-disable @next/next/no-img-element */

"use client";
import React from "react";

function DetailsPage({ article }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 ">
        {article.tags.map((tag) => (
          <div
            key={tag}
            className="bg-zinc-600 text-white p-2 text-sm uppercase"
          >
            {tag}
          </div>
        ))}
      </div>
      <h1 className="text-4xl font-bold w-full ">
        Download {article.title} for free
      </h1>
      <img src={article.image.url} alt={article.title} className="rounded-md" />
      <div className="">
        <h1 className="font-bold text-2xl">About the game:</h1>
        <p>{article.text}</p>
      </div>
    </div>
  );
}

export default DetailsPage;
