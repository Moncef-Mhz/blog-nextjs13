import Link from "next/link";
import React from "react";

function AdminLayout({ children }) {
  return (
    <div className="flex relative">
      <aside className="flex-[2]">
        <ul className="flex flex-col w-full h-full">
          <li className="hover:bg-indigo-100 duration-200 cursor-pointer w-full px-10 py-5">
            <Link href="/admin/article">Article</Link>
          </li>
          <li className="px-10 py-5 hover:bg-indigo-100 duration-200 cursor-pointer">
            <Link href="/admin/tags">Tags</Link>
          </li>
        </ul>
      </aside>
      <div className="bg-gray-100 flex-[8] p-4 rounded min-h-[300px] relative">
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;
