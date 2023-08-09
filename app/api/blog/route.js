import Article from "@/models/blog";
import { ConnectToDB } from "@/utils/db";

export const GET = async (req) => {
  try {
    await ConnectToDB();

    const articles = await Article.find({});
    return new Response(JSON.stringify(articles), { status: 200 });
  } catch (err) {
    return new Response("Faild to fetch all articals", { status: 500 });
  }
};
