import type { Metadata } from "next";
import "./globals.css";

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
      <body className="text-sky-100 bg-gradient-to-tr from-sky-400 to-sky-500 bg-cover bg-no-repeat relative font-simplestamp">
        {children}
      </body>
    </html>
  );
}
