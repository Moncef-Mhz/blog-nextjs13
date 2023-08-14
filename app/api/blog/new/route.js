import Article from "@/models/blog";
import { ConnectToDB } from "@/utils/db";
import cloudinary from "@/utils/Cloudinary";

export const POST = async (req) => {
  const { title, tags, text, image, slug } = await req.json();

  try {
    const result = await cloudinary.uploader.upload(image, {
      folder: "blog images",
    });
    await ConnectToDB();
    const newArtical = new Article({
      title,
      slug,
      tags,
      text,
      image: {
        public_id: result.public_id,
        url: result.secure_url,
      },
    });

    await newArtical.save();
    return new Response(JSON.stringify(newArtical), { status: 201 });
  } catch (err) {
    return new Response("Failed to create a new article", { status: 500 });
  }
};
