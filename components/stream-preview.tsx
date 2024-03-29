"use client";
import React from "react";
import { TwitchPlayer } from "react-twitch-embed";

const StreamPreview = () => {
  return (
    <div className="relative overflow-visible">
      <TwitchPlayer
        channel="pengwin"
        width={640}
        height={360}
        className="p-2.5"
      />
      <div className="bg-[url('/box.png')] absolute top-0 left-1 w-full h-full bg-contain bg-no-repeat pointer-events-none" />
    </div>
  );
};

export default StreamPreview;
