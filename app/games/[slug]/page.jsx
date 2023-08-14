import DetailsPage from "@/components/DetailsPage";
import Article from "@/models/blog";
import { ConnectToDB } from "@/utils/db";
import React from "react";

async function Page({ params: { slug } }) {
  ConnectToDB();
  const article = await Article.findOne({ slug });

  return (
    <main className="px-10">
      <DetailsPage article={article} />
    </main>
  );
}

export default Page;
