import type { Metadata } from "next";
import { gilroy, aeonik } from "@/lib/fonts";
import "../styles/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/NavBar";
import { ThemeProvider } from "@/core/contexts/ThemeContext";
import Script from "next/script";

export const metadata: Metadata = {
  title: { default: "Videoweiser | Video Production Partners for Healthcare Brands", template: "%s | Videoweiser" },
  description: "Create engaging videos that simplify health concepts and inspire actions that leads to measurable growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="apollo-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function initApollo(){
              var n=Math.random().toString(36).substring(7),
              o=document.createElement("script");
              o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
              o.async=!0,o.defer=!0, 
              o.onload=function(){window.trackingFunctions.onLoad({appId:"6946e35743012e002174fa77"})},
              document.head.appendChild(o)}initApollo();
            `,
          }}
        />
      </head>
      <body
        className={`${gilroy.variable} ${aeonik.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html >
  );
}
