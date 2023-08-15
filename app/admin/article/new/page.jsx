"use client";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import AdminLayout from "../../page";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

function CreateArticle() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState([]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !tags || !text) {
      toast.error("Feilds are missing!");
      return;
    }

    try {
      let slug = title.replace(" ", "-");
      const response = await fetch("/api/blog/new", {
        method: "POST",
        body: JSON.stringify({
          title,
          slug,
          tags,
          text,
          image,
        }),
      });
      if (response.ok) {
        setTags("");
        setTitle("");
        setText("");
        setImage("");
        toast.success("Article has been created!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AdminLayout>
      <Link
        href="/admin/article"
        className="px-10 flex items-center gap-2 mb-4 w-full mt-4"
      >
        <MdArrowBackIosNew size={15} />
        return
      </Link>
      <div className="w-full h-full px-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 relative h-full"
        >
          <label htmlFor="title " className="text-xl px-5 mt-2">
            Add title:
          </label>
          <input
            className=" px-5 py-5 border rounded-md"
            id="title"
            type="text"
            value={title}
            placeholder="For ex: Grand theft auto"
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="tags " className="text-xl px-5 mt-2">
            Add tags:
          </label>
          <input
            className=" px-5 py-5 border rounded-md"
            type="text"
            id="tags"
            value={tags}
            placeholder="For ex: action,adventure"
            onChange={(e) => setTags(e.target.value)}
          />
          <label htmlFor="tags " className="text-xl px-5 mt-2">
            Add about the game:
          </label>
          <textarea
            className=" px-5 py-5 border rounded-md"
            type="text"
            value={text}
            placeholder="For ex: When a young street hustler..."
            onChange={(e) => setText(e.target.value)}
          />
          <label htmlFor="form4Example2" className="text-xl px-5 mt-2">
            Add thumbnail:
          </label>
          <input
            onChange={handleImage}
            type="file"
            file={image}
            id="formupload"
            name="image"
            className="form-control"
          />
          <button
            onSubmit={handleSubmit}
            className="bg-indigo-500 rounded-md text-center  outline-none px-9 py-3 -bottom-20 right-0 absolute text-white"
          >
            Submit
          </button>
        </form>

        {/* <ToastContainer /> */}
      </div>
    </AdminLayout>
  );
}

export default CreateArticle;
