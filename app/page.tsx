"use client";

import Navbar from "@/components/navbar";
import StreamPreview from "@/components/stream-preview";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Snowfall } from "react-snowfall";
import { useMedia } from "react-use";

export default function Home() {
  const is3XL = useMedia("(min-width: 2000px)", false);

  return (
    <div className="font-simplestamp h-full w-full text-sky-100 bg-gradient-to-tr from-sky-400 to-sky-500 relative">
      <Snowfall snowflakeCount={is3XL ? 300 : 150} />
      <div className="bg-[url('/bottom-corner.png')] h-[400px] w-[400px] bg-contain absolute bottom-0 bg-no-repeat" />
      <div className="bg-[url('/top-corner.png')] h-[300px] w-[300px] bg-contain absolute top-0 right-0 bg-no-repeat" />
      <div className="w-full h-full max-w-[1140px] mx-auto flex flex-col items-center">
        <Navbar />

        <div className="flex flex-col items-center justify-center gap-y-3 h-full">
          <p className="text-center tracking-widest blue-shadow-lg uppercase text-[3rem] sm:hidden block">
            pengwin
          </p>
          <StreamPreview />
          <Button variant="ghost" className="group" asChild>
            <Link
              href="https://www.twitch.tv/pengwin"
              className="gap-x-3 flex justify-center items-center"
            >
              Watch me on Twitch
              <ArrowRight className="w-5 h-5 stroke-[4] blue-icon-shadow group-hover:translate-x-1 transition-all" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
