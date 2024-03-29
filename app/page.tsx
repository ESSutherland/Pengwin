"use client";

import Navbar from "@/components/navbar";
import StreamPreview from "@/components/stream-preview";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Snowfall } from "react-snowfall";

export default function Home() {
  return (
    <div className="font-simplestamp h-full w-full text-sky-100 bg-gradient-to-tr from-sky-400 to-sky-500">
      <Snowfall />
      <div className="w-full h-full max-w-[1140px] mx-auto flex flex-col items-center">
        <Navbar />

        <div className="flex flex-col items-center justify-center gap-y-3 h-full">
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
