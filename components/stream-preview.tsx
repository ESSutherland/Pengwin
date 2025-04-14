"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { TwitchPlayer } from "react-twitch-embed";
import { useMedia } from "react-use";

const StreamPreview = () => {
  const isMobile = useMedia("(max-width: 640px)", false);
  const is3XL = useMedia("(min-width: 2000px)", false);
  const is4XL = useMedia("(min-width: 3000px)", false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-sky-500",
        isMobile ? "rounded-2xl p-0" : "rounded-3xl p-1"
      )}
    >
      <TwitchPlayer
        channel="pengwin"
        width={isMobile ? 320 : is3XL ? 854 : is4XL ? 1020 : 640}
        height={isMobile ? 180 : is3XL ? 480 : is4XL ? 620 : 360}
        className={cn("", isMobile ? "p-2" : "p-2.5")}
      />
      <div
        className={cn(
          "bg-[url('/box.png')] absolute top-0 w-full h-full bg-contain bg-no-repeat pointer-events-none"
        )}
      />
    </div>
  );
};

export default StreamPreview;
