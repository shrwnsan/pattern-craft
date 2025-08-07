"use client";

import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Pattern } from "@/types/pattern";
import { FavoritesProvider } from "@/context/favourites-context";
import { initializePatterns } from "@/utils/patterns";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import PatternShowcase from "@/components/patterns/pattern-showcase";
import SupportDropdown from "@/components/home/support-dropdown";
import ReturnToPreview from "@/components/home/return-to-preview";

// Temporary theme hook until we can move it to a proper location
const useTheme = () => {
  const [theme, setTheme] = useState('light');
  
  const updateThemeFromPattern = (patternName: string, patterns: Pattern[]) => {
    // Simple theme switching based on pattern name
    const pattern = patterns.find(p => p.name === patternName);
    if (pattern) {
      setTheme(pattern.theme || 'light');
    }
  };
  
  return { theme, updateThemeFromPattern };
};

export default function Home() {
  const [activePattern, setActivePattern] = useState<string | null>(null);
  const { theme, updateThemeFromPattern } = useTheme();
  const [patterns, setPatterns] = useState<Pattern[]>([]);
  const [patternsLoaded, setPatternsLoaded] = useState(false);

  // Load patterns on component mount
  useEffect(() => {
    const loadPatterns = async () => {
      try {
        const loadedPatterns = await initializePatterns();
        setPatterns(loadedPatterns);
        setPatternsLoaded(true);
      } catch (error) {
        console.error("Failed to load patterns:", error);
        setPatternsLoaded(true); // Set to true to show error state
      }
    };
    
    loadPatterns();
  }, []);

  // Update theme based on active pattern
  useEffect(() => {
    if (activePattern && patterns.length > 0) {
      const pattern = patterns.find(p => p.name === activePattern);
      if (pattern) {
        updateThemeFromPattern(activePattern, patterns);
      }
    }
  }, [activePattern, patterns, updateThemeFromPattern]);

  // Find the active pattern object
  const activePatternObj = activePattern
    ? patterns.find((p) => p.id === activePattern)
    : null;

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <FavoritesProvider>
          <div className="min-h-screen relative">
            {/* Apply the active pattern as background */}
            {activePatternObj && (
              <div className="fixed inset-0 z-0" style={activePatternObj.style} />
            )}
            <div className="relative z-10">
              <Navbar theme={theme} />
              <SupportDropdown theme={theme} />
              <Hero
                activePattern={activePattern}
                setActivePattern={setActivePattern}
                theme={theme}
              />
              {patternsLoaded ? (
                <>
                  <PatternShowcase
                    activePattern={activePattern}
                    setActivePattern={setActivePattern}
                    theme={theme}
                    patterns={patterns}
                  />
                  <Footer theme={theme} />
                </>
              ) : (
                <div className="container pt-6 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
                  <div className="text-center py-20">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading patterns...</p>
                  </div>
                </div>
              )}
            </div>
            <ReturnToPreview theme={theme} />
            <Toaster position="top-center" />
          </div>
        </FavoritesProvider>
      </ThemeProvider>
    </>
  );
}
