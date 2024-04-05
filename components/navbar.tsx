import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaTwitch,
  FaXTwitter,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";

type NavbarProps = {
  isAtTop: boolean;
};

const Navbar = ({ isAtTop }: NavbarProps) => {
  return (
    <nav
      className={cn(
        "fixed items-center left-1/2 -translate-x-1/2 flex z-10 transition-all justify-between",
        isAtTop
          ? "w-full max-w-[1140px] gap-x-4 px-10 py-3 "
          : "w-full max-w-[700px] mt-4 gap-x-3 bg-sky-600 py-2 px-6 sm:px-10 rounded-full drop-shadow-[0px_8px_0px_var(--shadow-color)]"
      )}
    >
      <div className="flex gap-x-4 items-center">
        <Link href="/">
          <Image
            src="/logo2.png"
            width={isAtTop ? 90 : 50}
            height={isAtTop ? 90 : 50}
            alt="Logo"
            quality={100}
            className="hover:scale-105 transition-all"
          />
        </Link>

        <p
          className={cn(
            "text-center tracking-widest blue-shadow-lg uppercase text-3xl md:text-[3rem] hidden sm:block",
            !isAtTop && "text-3xl"
          )}
        >
          pengwin
        </p>
      </div>

      <div className="flex items-center h-full gap-x-3">
        <Button variant="social" size="icon">
          <Link href="https://twitch.tv/pengwin" target="_blank">
            <FaTwitch className="h-5 w-5" />
          </Link>
        </Button>

        <Button variant="social" size="icon">
          <Link href="https://twitter.com/PengwinTTV" target="_blank">
            <FaXTwitter className="h-5 w-5" />
          </Link>
        </Button>

        <Button variant="social" size="icon">
          <Link href="https://www.discord.gg/pengwin" target="_blank">
            <FaDiscord className="h-5 w-5" />
          </Link>
        </Button>

        <Button variant="social" size="icon">
          <Link href="https://www.tiktok.com/@pengwinttv" target="_blank">
            <FaTiktok className="h-5 w-5" />
          </Link>
        </Button>

        <Button variant="social" size="icon">
          <Link href="https://www.instagram.com/pengwinttv/" target="_blank">
            <FaInstagram className="h-5 w-5 stroke-[10]" />
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
