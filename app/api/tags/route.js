import Tags from "@/models/tags";
import { ConnectToDB } from "@/utils/db";

export const GET = async () => {
  try {
    await ConnectToDB();
    const tags = await Tags.find({});

    return new Response(JSON.stringify(tags), { status: 201 });
  } catch (err) {
    return new Response("Faild to fetch all tags", { status: 500 });
  }
};
