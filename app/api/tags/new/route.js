import Tags from "@/models/tags";
import { ConnectToDB } from "@/utils/db";

export const POST = async (req) => {
  const { name } = await req.json();
  try {
    await ConnectToDB();
    const newTag = new Tags({ name });

    await newTag.save();
    return new Response(JSON.stringify(newTag), { status: 201 });
  } catch (err) {
    return new Response("Faild to create a new tag", { status: 500 });
  }
};
