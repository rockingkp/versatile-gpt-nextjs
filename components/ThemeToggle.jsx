"use client";

import React, { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.dracula);

  const toggleTheme = () => {
    const newTheme = theme === themes.dracula ? themes.winter : themes.dracula;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline ">
      {theme === "dracula" ? (
        <BsSunFill className="h-4 w-4" />
      ) : (
        <BsMoonFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
