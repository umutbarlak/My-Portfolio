import React from "react";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className=" flex items-center justify-between text-white px-6 py-4 h-16 max-w-5xl mx-auto mt-12 bg-transparent">
      <span></span>
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className=" px-6 py-2 bg-pink-600 text-white rounded-lg font-semibold uppercase"
      >
        {theme === "light" ? "dark" : "light"}
      </button>
    </header>
  );
};

export default Header;
