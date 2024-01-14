import React from "react";
import { GiGiftOfKnowledge } from "react-icons/gi";
import ThemeToggle from "./ThemeToggle";

const SidebarHeader = () => {
  return (
    <div className="flex items-center mb-4 gap-4 px-4">
      <GiGiftOfKnowledge className="w-10 h-10 textarea-secondary" />
      <h2 className="text-xl font-extrabold text-primary mr-auto">
        VersatileGPT
      </h2>
      <ThemeToggle />
    </div>
  );
};

export default SidebarHeader;
