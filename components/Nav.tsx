"use client";

import { useLayoutEffect } from "react";
import HumeLogo from "./logos/Hume";

export const Nav = () => {
  useLayoutEffect(() => {
    const el = document.documentElement;
    el.classList.add("dark");
  }, []);

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div>
        <HumeLogo className={"h-5 w-auto"} />
      </div>
      <div className={"ml-auto flex items-center gap-1"}>
        {/*buttons*/}
      </div>
    </div>
  );
};
