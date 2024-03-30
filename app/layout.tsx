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
      <body className="">{children}</body>
    </html>
  );
}
