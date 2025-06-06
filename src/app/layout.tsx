import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://patterncraft.vercel.app"),
  title: "PatternCraft - Modern Background Patterns & Gradients",
  description:
    "Professional-grade background patterns and gradients for your websites and apps. Easily copy and paste into your next project. Crafted with modern CSS and Tailwind for seamless integration.",
  keywords:
    "background patterns, background snippets, gradients, Tailwind CSS, modern CSS, web design, UI background, CSS snippets, frontend resources, front-end snippets",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PatternCraft - Modern Background Patterns & Gradients",
    description:
      "Explore a collection of handcrafted background patterns and gradients for modern websites. Easy to use and customize.",
    url: "https://patterncraft.vercel.app", 
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "PatternCraft Open Graph Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PatternCraft - Modern Background Patterns & Gradients",
    description:
      "A curated set of ready-to-use background patterns and gradients. Crafted with Tailwind CSS and modern techniques.",
    images: ["/banner.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.className} bg-background text-foreground antialiased min-h-screen flex items-center justify-center`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}