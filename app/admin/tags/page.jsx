"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AdminLayout from "../page";

function TagsPage() {
  const [tags, setTags] = useState([]);

  const fetchTags = async () => {
    const response = await fetch("/api/tags");
    const data = await response.json();
    setTags(data);
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <AdminLayout>
      <div className=" flex w-full items-center justify-between border-b pb-2">
        <h1 className="text-black/70">all Tags</h1>
        <Link
          href="tags/new"
          className="text-white bg-indigo-500 px-4 py-2 rounded-md  "
        >
          Add Tags
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tags.map((tag) => (
          <h1 key={tag._id}>{tag.name}</h1>
        ))}
      </div>
    </AdminLayout>
  );
}

export default TagsPage;
