/*eslint-disable @next/next/no-img-element */

"use client";
import React from "react";

function DetailsPage({ article }) {
  return (
    <div className="">
      <img src={article.image.url} alt="dsa" className="rounded-md" />
      <h1>{article.title}</h1>
    </div>
  );
}

export default DetailsPage;
