"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { TwitchPlayer } from "react-twitch-embed";
import { useMedia } from "react-use";

const StreamPreview = () => {
  const isMobile = useMedia("(max-width: 640px)", false);
  const is3XL = useMedia("(min-width: 2000px)", false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-sky-500",
        isMobile ? "rounded-2xl" : "rounded-3xl"
      )}
    >
      <TwitchPlayer
        channel="pengwin"
        width={isMobile ? 340 : is3XL ? 820 : 640}
        height={isMobile ? 200 : is3XL ? 465 : 360}
        className={cn("", isMobile ? "p-2" : "p-2.5")}
      />
      <div
        className={cn(
          "bg-[url('/box.png')] absolute top-0 w-full h-full bg-contain bg-no-repeat pointer-events-none",
          isMobile || is3XL ? "left-0" : "left-1"
        )}
      />
    </div>
  );
};

export default StreamPreview;
