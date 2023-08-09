"use client";

import { useState } from "react";
import AdminLayout from "../../page";

function CreateTags() {
  const [tag, setTag] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/tags/new", {
        method: "POST",
        body: JSON.stringify({
          name: tag,
        }),
      });
      if (response.ok) {
        setTag("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AdminLayout>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={tag}
          placeholder="Add Tag"
          onChange={(e) => setTag(e.target.value)}
        />
        <button onSubmit={submitHandler}>Add tag</button>
      </form>
    </AdminLayout>
  );
}

export default CreateTags;
