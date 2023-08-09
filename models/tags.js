import { Schema, model, models } from "mongoose";

const tagsSchema = new Schema({
  name: { type: String, required: true },
});

const Tags = models.tags || model("tags", tagsSchema);
export default Tags;
