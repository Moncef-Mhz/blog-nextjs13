"use client";
import { createContext, useContext, useState } from "react";
import { useRouter } from "next/router";

const context = createContext();

export const StateContext = ({ children }) => {
  const [activeTag, setActiveTag] = useState("all");

  return (
    <context.Provider value={{ activeTag, setActiveTag }}>
      {children}
    </context.Provider>
  );
};

export const useStateContext = () => useContext(context);
