import Link from "next/link";
import { TextComponent } from "../ui";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoTiktok, IoLogoVimeo, IoLogoYoutube } from "react-icons/io5";

export function Footer() {
  return (
    <footer className="flex bg-[var(--background)] py-[24px] items-center justify-center mx-auto px-4 sm:px-6">
      <div
        // 1. Flex-col for mobile/tablet, Flex-row for Desktop (lg)
        // 2. Added gap-8 to separate items when stacked
        // 3. Items-center ensures horizontal centering in column mode
        className="max-w-7xl w-full flex flex-col lg:flex-row px-6 py-8 lg:px-[32px] lg:py-[48px] justify-between items-center gap-8 lg:gap-0 border-border rounded-[32px] border-[1px] bg-[var(--background)]"
      >

        {/* Copyright Section */}
        {/* order-last pushes this to the bottom on mobile, order-first keeps it left on desktop */}
        <div className="order-last lg:order-first text-center">
          <TextComponent.Label.Small text="©2025 Videoweiser Limited" />
        </div>

        {/* Links Section */}
        <div className="flex space-x-6 md:space-x-[32px]">
          <Link
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:b8be2e6e-3db7-4587-9514-58dd3e7e2d6c"
            target="_blank"
            className="hover:text-[var(--accent)]"
          >
            <TextComponent.Label.Small text="Privacy Policy" />
          </Link>
          <Link
            href="https://acrobat.adobe.com/id/urn:aaid:sc:EU:e66a2a82-3bc7-43a5-8344-2fe93fe2ceac"
            className="hover:text-[var(--accent)]"
            target="_blank"
          >
            <TextComponent.Label.Small text="Terms of Service" />
          </Link>
        </div>

        {/* Social Icons Section */}
        <div className="flex space-x-4 md:space-x-[24px]">
          <Link href="#" className="hover:text-[var(--accent)]">
            <IoLogoVimeo size={28} />
          </Link>
          <Link href="#" className="hover:text-[var(--accent)]">
            <IoLogoYoutube size={28} />
          </Link>
          <Link href="#" className="hover:text-[var(--accent)]">
            <IoLogoTiktok size={28} />
          </Link>
          <Link href="#" className="hover:text-[var(--accent)]">
            <IoLogoInstagram size={28} />
          </Link>
          <Link href="#" className="hover:text-[var(--accent)]">
            <IoLogoLinkedin size={28} />
          </Link>
        </div>
      </div>
    </footer>
  );
}