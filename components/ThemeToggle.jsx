"use client";

import React, { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const themes = {
  winter: "winter",
  night: "night",
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(themes.night);

  const toggleTheme = () => {
    const newTheme = theme === themes.night ? themes.winter : themes.night;
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button onClick={toggleTheme} className="btn btn-sm btn-outline ">
      {theme === "night" ? (
        <BsSunFill className="h-4 w-4" />
      ) : (
        <BsMoonFill className="h-4 w-4" />
      )}
    </button>
  );
};

export default ThemeToggle;
