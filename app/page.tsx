"use client";

import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Snow from "@/components/snow";
import StreamPreview from "@/components/stream-preview";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { useScroll } from "react-use";

export default function Home() {
  const scrollRef = useRef(null);
  const { y } = useScroll(scrollRef);

  return (
    <div className=" w-full h-full flex flex-cole" ref={scrollRef}>
      <Snow />

      <div className="bg-[url('/bottom-corner.png')] h-[433.5px] w-[394.5px] bg-contain bg-center fixed bottom-0 bg-no-repeat z-[2] pointer-events-none" />
      <div className="bg-[url('/top-corner.png')] h-[222px] w-[267px] bg-contain bg-center fixed top-0 right-0 bg-no-repeat z-[2] pointer-events-none" />

      <Navbar isAtTop={y === 0} />
      <p className="text-center tracking-widest blue-shadow-lg uppercase text-[3rem] sm:hidden block pt-28 sm:pt-0">
        pengwin
      </p>

      <div className="w-full h-full max-w-[1140px] mx-auto flex flex-col items-center justify-center">
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
        <Footer />
      </div>
    </div>
  );
}
