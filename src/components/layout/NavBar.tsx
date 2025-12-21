"use client";

import { useEffect, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { CustomImage, PrimaryButton } from "../ui";
import Link from "next/link";
import MobileMenu from "../ui/Menu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'Our works', href: '/works' },
    { label: 'Case studies', href: '/#case-studies' },
    { label: 'Contact us', href: '#' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`
        sticky top-0 z-50 transition-colors duration-200
        ${scrolled ? "bg-[var(--background)]/80 border-b-[0.5px] backdrop-blur border-border/60" : "bg-transparent"}
      `}
      >
        <div className="max-w-8xl mx-auto px-[16px] md:px-[40px] lg:px-[80px] h-[72px] flex items-center justify-between">

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
          <div
            className="flex items-center space-x-[40px]">
            <PrimaryButton
              className="hidden md:flex"
              label="Contact us"
              href="#" />
            <button
              className="p-[8px]"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
            >
              <IoMenuSharp size={40} />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        menuItems={menuItems}
      />
    </>
  );
}
