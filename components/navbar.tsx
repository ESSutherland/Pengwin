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
  FaGift,
} from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { TbBrandKickFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <nav
      className={cn(
        "fixed items-center left-1/2 -translate-x-1/2 flex z-[100] transition-all justify-between",
        "w-full max-w-[1140px] gap-x-4 px-10 py-3 ",
      )}
    >
      <div className="flex gap-x-4 items-center">
        <Link href="/">
          <Image
            src="/logo2.png"
            width={90}
            height={90}
            alt="Logo"
            quality={100}
            className="hover:scale-105 transition-all"
          />
        </Link>

        <p
          className={cn(
            "text-center tracking-widest blue-shadow-lg uppercase md:text-[3rem] hidden sm:block text-3xl",
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
          <Link href="https://kick.com/pengwin" target="_blank">
            <TbBrandKickFilled className="h-5 w-5" />
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

        <Button variant="social" size="icon">
          <Link href="https://throne.com/pengwinn" target="_blank">
            <FaGift className="h-5 w-5" />
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
