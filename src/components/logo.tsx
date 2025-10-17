import React from "react";

export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="4" width="4" height="16" rx="2" className="fill-primary" />
        <rect
          x="10"
          y="10"
          width="4"
          height="10"
          rx="2"
          className="fill-primary/70"
        />
        <rect
          x="16"
          y="14"
          width="4"
          height="6"
          rx="2"
          className="fill-primary/40"
        />
      </svg>
      <span className="font-bold">HeatscoringPro</span>
    </div>
  );
};