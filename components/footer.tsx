import React from "react";
import { CgVercel } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="hidden sm:block z-10">
      <p className="text-xs flex items-center justify-center text-sky-300">
        Pengwin &copy; 2024, All rights reserved. | Powered by{" "}
        <CgVercel className="w-5 h-5" />
        Vercel
      </p>
    </footer>
  );
};

export default Footer;
