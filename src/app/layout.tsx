import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://patterncraft.fun"),
  title: "PatternCraft - Modern Background Patterns & Gradients",
  description:
    "Professional-grade background patterns and gradients for your websites and apps. Easily copy and paste into your next project. Crafted with modern CSS and Tailwind for seamless integration.",
  keywords: [
    // Primary keywords
    "css background patterns",
    "background patterns generator",
    "beautiful backgrounds",
    "css gradients",
    "background snippets",
    "web backgrounds",
    "gradients", "css snippets", "backgrounds", "modern ui",

    // Secondary keywords
    "tailwind css backgrounds",
    "modern css patterns",
    "ui background patterns",
    "website background generator",
    "css background snippets",
    "gradient generator",
    "pattern generator", "frontend resources",

    // Long-tail keywords
    "free css background patterns",
    "beautiful website backgrounds",
    "modern background patterns",
    "copy paste css backgrounds",
    "responsive background patterns",
    "css pattern library",
    "web design backgrounds", "front-end snippets",

    // Tool-specific keywords
    "tailwind background patterns",
    "css grid patterns",
    "geometric patterns css",
    "abstract background patterns",
    "frontend background resources",
    "developer background tools", "web design assets",

    // Trending keywords
    "background patterns 2024",
    "modern web backgrounds",
    "css background effects",
    "animated background patterns",
    "minimalist background patterns"
  ].join(", "),

  authors: [{ name: "Megh Bari", url: "https://github.com/megh-bari" }],
  creator: "Megh Bari",
  publisher: "PatternCraft",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "PatternCraft - Modern Background Patterns & Gradients",
    description:
      "Explore a collection of handcrafted background patterns and gradients for modern websites. Easy to use and customize.",
    url: "https://patterncraft.fun",
    siteName: "Pattern Craft",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "PatternCraft – Modern Background Patterns and Gradients",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PatternCraft - Modern Background Patterns & Gradients",
    description:
      "A curated set of ready-to-use background patterns and gradients. Crafted with Tailwind CSS and modern techniques.",
    images: ["/banner.png"],
    creator: "@meghtrix",
  },
  alternates: {
    canonical: "https://patterncraft.fun",
  },
   
  // Additional SEO enhancements
  category: "Web Development Tools",

   // Schema.org structured data hints
  other: {
    "application-name": "PatternCraft",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "PatternCraft",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    
    // Additional meta tags for better discovery
    "google-site-verification": "xeqxMvzZZQWV43nn06hJDnwUVVaRfYRaMrYHy",

    // Rich snippets hints
    "article:author": "Megh Bari",
    "article:publisher": "https://github.com/megh-bari",
    "og:updated_time": new Date().toISOString(),
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
