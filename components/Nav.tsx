"use client";

import { useLayoutEffect } from "react";
import HumeLogo from "./logos/Hume";
import { Button } from "./ui/button";
import { SiGithubsponsors } from '@icons-pack/react-simple-icons';
import { SignedIn, UserButton } from "@clerk/nextjs";

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
        <Button
          onClick={() => {
            window.open(
              "https://github.com/sponsors/DevSrijit",
              "_blank",
              "noopener noreferrer"
            );
          }}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
           <SiGithubsponsors />
          </span>
          <span>Sponsor This</span>
        </Button>
        <SignedIn>
          <UserButton showName/>
        </SignedIn>
      </div>
    </div>
  );
};
