"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { TwitchEmbed } from "react-twitch-embed";
import { useMedia } from "react-use";

const StreamPreview = () => {
  const isMobile = useMedia("(max-width: 1000px)", false);
  const is3XL = useMedia("(min-width: 2000px)", false);
  const is4XL = useMedia("(min-width: 3000px)", false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-sky-500",
        isMobile
          ? "rounded-2xl p-0"
          : is3XL
          ? "rounded-3xl p-2"
          : "rounded-3xl p-5"
      )}
    >
      <TwitchEmbed
        channel="pengwin"
        width={isMobile ? 320 : is3XL ? 1570 : is4XL ? 2094 : 1047}
        height={isMobile ? 180 : is3XL ? 894 : is4XL ? 1192 : 596}
        className={cn("", isMobile ? "p-2" : is3XL ? "p-5" : "p-1")}
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
