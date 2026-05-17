"use client";
import { cn } from "@/lib/utils";
import { AlertCircleIcon } from "lucide-react";
import React, { useState } from "react";
import { TwitchEmbed, TwitchPlayer } from "react-twitch-embed";
import { useMedia } from "react-use";

const StreamPreview = () => {
  const isMobile = useMedia("(max-width: 1000px)", false);
  const is3XL = useMedia("(min-width: 2000px)", false);
  const is4XL = useMedia("(min-width: 3000px)", false);

  const [isLive, setIsLive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-sky-500",
        isMobile
          ? "rounded-2xl p-0"
          : is3XL
            ? "rounded-3xl p-2"
            : "rounded-3xl p-5",
      )}
    >
      {isLive && !isPlaying && (
        <div
          className={cn(
            "absolute top-12 bg-sky-500 px-5 py-2 rounded-lg flex gap-2 items-center justify-center",
          )}
        >
          <AlertCircleIcon size={isMobile ? 15 : 20} />
          <span className="">Click Play To Watch Stream</span>
        </div>
      )}
      <TwitchPlayer
        channel="pengwin"
        width={isMobile ? 320 : is3XL ? 1570 : is4XL ? 2094 : 1047}
        height={isMobile ? 180 : is3XL ? 894 : is4XL ? 1192 : 596}
        className={cn("", isMobile ? "p-2" : is3XL ? "p-5" : "p-1")}
        onOnline={() => {
          setIsLive(true);
        }}
        onPlaying={() => {
          setIsPlaying(true);
        }}
      />
      <div
        className={cn(
          "bg-[url('/box.png')] absolute top-0 w-full h-full bg-contain bg-no-repeat pointer-events-none",
        )}
      />
    </div>
  );
};

export default StreamPreview;
