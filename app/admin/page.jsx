import Link from "next/link";
import React from "react";

function AdminLayout({ children }) {
  return (
    <div className="flex relative">
      <aside className="flex-[2]">
        <ul className="flex flex-col w-full h-full">
          <Link
            href="/admin/article"
            className="hover:bg-indigo-100 duration-200 cursor-pointer w-full px-10 py-5"
          >
            Article
          </Link>
          <Link
            href="/admin/tags"
            className="px-10 py-5 hover:bg-indigo-100 duration-200 cursor-pointer"
          >
            Tags
          </Link>
        </ul>
      </aside>
      <div className="bg-gray-100 flex-[8] p-4 rounded min-h-[300px] relative">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
