"use client";

import { useEffect, useState } from "react";
import AdminLayout from "../page";
import CardList from "@/components/CardList";
import Link from "next/link";

function AdminArticle() {
  const [articles, setAtricles] = useState([]);

  const fetchArtical = async () => {
    const response = await fetch("/api/blog");
    const data = await response.json();

    setAtricles(data);
  };

  useEffect(() => {
    fetchArtical();
  }, []);

  // console.log(articles);
  return (
    <AdminLayout>
      <div className=" flex w-full items-center justify-between border-b pb-2">
        <h1 className="text-black/70">all Articles</h1>
        <Link
          href="article/new"
          className="text-white bg-indigo-500 px-4 py-2 rounded-md  "
        >
          Add Article
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles?.map((article) => (
          <CardList key={article._id} data={article} />
        ))}
      </div>
    </AdminLayout>
  );
}

export default AdminArticle;
