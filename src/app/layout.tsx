import { GeistSans } from "geist/font/sans";
import "./globals.css";
import ClientLayout from "./client-layout";

// Import metadata from the separate file
export { metadata } from './metadata';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={GeistSans.className}>
      <head>
        {/* og image */}
        <meta property="og:image" content="https://shrwnsan.github.io/pattern-craft/og-banner.png" />
        <meta name="twitter:image" content="https://shrwnsan.github.io/pattern-craft/og-banner.png" />

        {/* <meta property="og:image" content="https://patterncraft.fun/opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:image" content="https://patterncraft.fun/twitter-image.png" />
        <meta name="twitter:image:type" content="image/png" />
        <meta name="twitter:image:width" content="1200" />
        <meta name="twitter:image:height" content="630" /> */}
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Pattern Craft",
              "url": "https://shrwnsan.github.io/pattern-craft/"
            })
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Pattern Craft",
              "description": "Modern CSS background patterns and gradients generator",
              "url": "https://shrwnsan.github.io/pattern-craft/",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/InStock"
              },
              "author": {
                "@type": "Person",
                "name": "Megh Bari",
                "url": "https://github.com/megh-bari"
              },
              "publisher": {
                "@type": "Organization",
                "name": "PatternCraft",
                "url": "https://shrwnsan.github.io/pattern-craft/"
              },
              "datePublished": "2024-01-01",
              "dateModified": new Date().toISOString(),
              "inLanguage": "en-US",
              "isAccessibleForFree": true,
              "keywords": ["CSS", "background patterns", "gradients", "web design", "tailwind css"],
              "screenshot": [
                {
                  "@type": "ImageObject",
                  "contentUrl": "https://patterncraft.fun/snapshots/screenshot-7.png",
                  "description": "Pattern Craft - Modern Background Patterns & Gradients Snippets"
                },
                {
                  "@type": "ImageObject",
                  "contentUrl": "https://patterncraft.fun/snapshots/screenshot-8.png",
                  "description": "Pattern Craft - Modern Background Patterns & Gradients Snippets"
                },
                {
                  "@type": "ImageObject",
                  "contentUrl": "https://patterncraft.fun/snapshots/screenshot-9.png",
                  "description": "Pattern Craft - Modern Background Patterns & Gradients Snippets"
                },
                {
                  "@type": "ImageObject",
                  "contentUrl": "https://patterncraft.fun/snapshots/screenshot-10.png",
                  "description": "Pattern Craft - Modern Background Patterns & Gradients Snippets"
                },
                {
                  "@type": "ImageObject",
                  "contentUrl": "https://patterncraft.fun/snapshots/screenshot-11.png",
                  "description": "Pattern Craft - Modern Background Patterns & Gradients Snippets"
                },
                {
                  "@type": "ImageObject",
                  "contentUrl": "https://patterncraft.fun/snapshots/screenshot-12.png",
                  "description": "Pattern Craft - Modern Background Patterns & Gradients Snippets"
                },
                {
                  "@type": "ImageObject",
                  "contentUrl": "https://patterncraft.fun/snapshots/screenshot-13.png",
                  "description": "Pattern Craft - Modern Background Patterns & Gradients Snippets"
                }
              ],
              "softwareVersion": "2.0.0",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "ratingCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://github.com/megh-bari",
                "https://x.com/meghtrix",
                "https://shrwnsan.github.io/pattern-craft/"
              ],
              "featureList": [
                "100+ CSS and Tailwind background patterns",
                "Gradient, geometric, decorative, and effect-based styles",
                "Copy-paste ready snippets for developers"
              ],
              "browserRequirements": "Requires modern browser with CSS3 support",
              "interactionStatistic": {
                "@type": "InteractionCounter",
                "interactionType": { "@type": "http://schema.org/ViewAction" },
                "userInteractionCount": 5000
              }

            })
          }}
        />
        <link rel="manifest" href="/pattern-craft/site.webmanifest" />
      </head>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}