import { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    tags: { type: [String], required: true, default: "All" },
    text: { type: String, required: true },
    image: {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Article = models.Article || model("Article", ArticleSchema);
export default Article;
