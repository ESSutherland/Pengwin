import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaDiscord, FaTiktok, FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="flex w-full gap-x-4 px-10 py-3 relative items-center justify-between">
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
        <p className="text-center tracking-widest blue-shadow-lg uppercase text-[3rem] hidden sm:block">
          pengwin
        </p>
      </div>

      <div className="flex items-center h-full gap-x-3">
        <Button variant="social" size="icon">
          <Link href="https://twitter.com/PengwinTTV" target="_blank">
            <FaXTwitter className="w-8 h-8" />
          </Link>
        </Button>

        <Button variant="social" size="icon">
          <Link href="https://www.discord.gg/pengwin" target="_blank">
            <FaDiscord className="w-8 h-8" />
          </Link>
        </Button>

        <Button variant="social" size="icon">
          <Link href="https://www.tiktok.com/@pengwinttv" target="_blank">
            <FaTiktok className="w-7 h-7" />
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
