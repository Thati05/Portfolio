import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Seithati's Portfolio - Software Developer, 3D Modeler & Designer",
  description: "Explore Seithati's portfolio featuring cutting-edge web development with Next.js, immersive 3D modeling, and UX/UI design. Discover projects in front-end development, React, Next.js, and custom 3D web applications that blend creativity with technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <link className=" size-5" rel="icon" href="/heart.svg" type="image/x-icon" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FCFCFC]`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
