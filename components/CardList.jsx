"use client";
import React from "react";

function CardList({ data }) {
  return <div className="w-full cursor-pointer">{data.text}</div>;
}

export default CardList;
