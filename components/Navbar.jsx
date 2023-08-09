"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Dropmenu from "./Dropmenu";

function Navbar() {
  const [tags, setTags] = useState([]);

  //FETCH TAGS
  const fetchTags = async () => {
    const response = await fetch("/api/tags");
    const data = await response.json();

    setTags(data);
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <nav className="w-full h-20 flex flex-row items-center justify-between relative px-10">
      <Link href="/" className="text-2xl font-bold">
        BLOG
      </Link>
      <ul className="flex gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li className="cursor-pointer">
          <Dropmenu tags={tags}>Categories</Dropmenu>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
