import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrwnsan.github.io/pattern-craft/"),
  title: "Pattern Craft - Modern Background Patterns & Gradients Snippets",
  description:
    "Create stunning websites with our curated collection of 100+ modern CSS background patterns and gradients for your websites and apps. Easily copy and paste into your next project. Crafted with modern CSS and Tailwind for seamless integration.",
  keywords: [
    // Primary keywords (focus on user intent)
    "css background patterns",
    "background patterns generator",
    "css gradients generator",
    // ... (rest of the keywords array)
    "modern web design",
    "responsive design"
  ].join(", "),

  authors: [{ name: "Megh Bari", url: "https://github.com/megh-bari" }],
  creator: "Megh Bari",
  publisher: "Pattern Craft",

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
    icon: "/pattern-craft/favicon.svg",
  },
  manifest: "/pattern-craft/site.webmanifest",
  openGraph: {
    title: "Pattern Craft - Modern Background Patterns & Gradients Snippets",
    description:
      "Explore a 100+ collection of handcrafted background patterns and gradients. Perfect for modern websites. Easy to use and customize.",
    url: "https://shrwnsan.github.io/pattern-craft/",
    siteName: "Pattern Craft",
    type: "website",
    images: [
      {
        url: "/pattern-craft/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Pattern Craft – Modern Background Patterns and Gradients Snippets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pattern Craft - Modern Background Patterns & Gradients Snippets",
    description:
      "100+ curated CSS background patterns and gradients. Tailwind CSS ready, responsive, and free to use. Perfect for modern web design.",
    images: ["/pattern-craft/og-banner.png"],
    creator: "@meghtrix",
    site: "@meghtrix",
  },
  alternates: {
    canonical: "https://shrwnsan.github.io/pattern-craft/",
  },
  classification: "Web Development, CSS Tools, Design Resources",
  category: [
    "Web Development Tools",
    "Frontend Development",
    "CSS Tools",
    "UI Design Resources",
    "Background Patterns",
    "Gradients Generator",
    "Tailwind CSS Resources",
    "Web Design Assets",
    "Open Source Tools",
    "Developer Productivity",
    "Creative Coding",
    "Design Inspiration",
    "Code Snippets",
    "Modern Web Design",
    "Responsive Design"
  ].join(", "),
  applicationName: "PatternCraft",
  other: {
    "application-name": "PatternCraft",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "PatternCraft",
    "msapplication-TileColor": "#000000",
    "theme-color": "#000000",
    "google-site-verification": "xeqxMvzZZQWV43nn06hJDnwUVVaRfYRaMrYHy",
    "article:author": "Megh Bari",
    "article:publisher": "https://github.com/megh-bari",
    "article:section": "Web Development",
    "article:tag": "CSS, Background Patterns, Gradients, Web Design",
    "og:updated_time": new Date().toISOString(),
    "og:locale": "en_US",
    "og:type": "website",
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "copyright": "© 2025 Megh Bari. All rights reserved.",
  },
};
