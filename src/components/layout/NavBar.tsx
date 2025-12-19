"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IoMenuSharp } from "react-icons/io5";
import { CustomImage, PrimaryButton } from "../ui";
import Link from "next/link";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`
        sticky top-0 z-50 transition-colors duration-200
        ${scrolled ? "bg-[var(--background)]/80 border-b-[0.5px] backdrop-blur border-border/60" : "bg-transparent"}
      `}
    >
      <div className="max-w-8xl mx-auto px-[80px] h-[72px] flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <CustomImage
              lightModeImage="/videoweiser-logo-light.svg"
              darkModeImage="/videoweiser-logo-dark.svg"
              width={172}
              height={32}
              isGrayScale={false}
            />
          </Link>

        </div>

        {/* Right actions */}
        <div className="flex items-center space-x-[40px]">
          <PrimaryButton label="Contact us" href="#" />
          <button className="p-[8px]">
            <IoMenuSharp size={40} />
          </button>
        </div>

      </div>
    </header>
  );
}
