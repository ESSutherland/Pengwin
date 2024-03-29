"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { TwitchPlayer } from "react-twitch-embed";
import { useMedia } from "react-use";

const StreamPreview = () => {
  const isMobile = useMedia("(max-width: 640px)");

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-sky-500",
        isMobile ? "rounded-2xl" : "rounded-3xl"
      )}
    >
      <TwitchPlayer
        channel="pengwin"
        width={isMobile ? 340 : 640}
        height={isMobile ? 200 : 360}
        className={cn("", isMobile ? "p-2" : "p-2.5")}
      />
      <div
        className={cn(
          "bg-[url('/box.png')] absolute top-0 w-full h-full bg-contain bg-no-repeat pointer-events-none",
          isMobile ? "left-0" : "left-1"
        )}
      />
    </div>
  );
};

export default StreamPreview;
