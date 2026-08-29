import type { Metadata } from "next";
import "./globals.css";
import Snow from "@/components/snow";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Pengwin",
  description:
    "Pengwin is a twitch streamer who plays games and does other stuff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <div className="w-full h-full text-sky-100 bg-gradient-to-tr from-sky-400 to-sky-500 bg-cover bg-no-repeat relative z-10 font-simplestamp">
          <Snow />

          <div className="bg-[url('/bottom-corner.png')] h-[289px] w-[263px] lg:h-[433.5px] lg:w-[394.5px] bg-contain bg-center fixed bottom-0 bg-no-repeat z-[2] pointer-events-none" />
          <div className="bg-[url('/top-corner.png')] h-[148px] w-[178px] lg:h-[222px] lg:w-[267px] bg-contain bg-center fixed top-0 right-0 bg-no-repeat z-[2] pointer-events-none" />

          <Navbar />
          <div className="h-full w-full m-auto flex flex-col items-center justify-center">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
