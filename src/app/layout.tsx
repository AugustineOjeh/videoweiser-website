import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { gilroy, aeonik } from "@/lib/fonts";
import "../styles/globals.css";

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
      <body
        className={`${gilroy.variable} ${aeonik.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        ></ThemeProvider>
        {children}
      </body>
    </html>
  );
}
