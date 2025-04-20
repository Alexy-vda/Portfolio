import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import * as motion from "motion/react-client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexy Van Den Abele",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative w-full`}
      >
        <Header />
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="absolute -top-10 left-1/2 -translate-x-1/2 -z-10 w-2xl min-h-80 bg-radial-[at_50%_00%] from-blue-700 to-black to-80% opacity-70"
        ></motion.span>
        <main>{children}</main>
        {/* Frosted multi-layer blur at bottom */}
        <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-0">
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            backdropFilter: 'blur(0.5px)', WebkitBackdropFilter: 'blur(0.5px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,0) 37.5%)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2,
            backdropFilter: 'blur(0.5625px)', WebkitBackdropFilter: 'blur(0.5625px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,0) 50%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 12.5%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,0) 50%)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 3,
            backdropFilter: 'blur(1.125px)', WebkitBackdropFilter: 'blur(1.125px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 62.5%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 25%, rgba(0,0,0,1) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 62.5%)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 4,
            backdropFilter: 'blur(2.25px)', WebkitBackdropFilter: 'blur(2.25px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,0) 75%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 37.5%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,0) 75%)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 5,
            backdropFilter: 'blur(4.5px)', WebkitBackdropFilter: 'blur(4.5px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 87.5%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 87.5%)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 6,
            backdropFilter: 'blur(9px)', WebkitBackdropFilter: 'blur(9px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 62.5%, rgba(0,0,0,1) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,0) 100%)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 7,
            backdropFilter: 'blur(18px)', WebkitBackdropFilter: 'blur(18px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,1) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 75%, rgba(0,0,0,1) 87.5%, rgba(0,0,0,1) 100%)'
          }} />
          <div style={{
            position: 'absolute', inset: 0, zIndex: 8,
            backdropFilter: 'blur(36px)', WebkitBackdropFilter: 'blur(36px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0) 87.5%, rgba(0,0,0,1) 100%)'
          }} />
        </div>
      </body>
    </html>
  );
}
