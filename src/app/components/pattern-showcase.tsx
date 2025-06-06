"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Check, Copy, Eye, Sparkles } from "lucide-react";
import { gridPatterns } from "../utils/patterns";
import { useState } from "react";

interface PatternShowcaseProps {
  activePattern: string | null;
  setActivePattern: (pattern: string | null) => void;
  theme: "light" | "dark";
}

export default function PatternShowcase({
  activePattern,
  setActivePattern,
  theme,
}: PatternShowcaseProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeMobileCard, setActiveMobileCard] = useState<string | null>(null);
  const isPatternDark = theme === "dark";

  const copyToClipboard = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      toast.success("Code copied to clipboard!");
      setTimeout(() => setCopiedId(null), 1000);
    } catch {
      toast.error("Failed to copy code");
    }
  };

  const previewPattern = (patternId: string) => {
    setActivePattern(patternId === activePattern ? null : patternId);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  const handleCardInteraction = (patternId: string) => {
    setActiveMobileCard(activeMobileCard === patternId ? null : patternId);
  };

  return (
    <section
      id="pattern-showcase"
      className="container pt-6 px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Header */}
      <div className="mb-8 sm:mb-10 lg:mb-12">
        <div className="text-center sm:text-left">
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 transition-colors duration-300 ${
              isPatternDark ? "text-white" : "text-gray-900 dark:text-gray-50"
            }`}
          >
            Pattern Library
          </h2>
          <p
            className={`text-sm sm:text-base transition-colors duration-300 ${
              isPatternDark ? "text-gray-300" : "text-muted-foreground"
            }`}
          >
            Tap on mobile or hover on desktop to see options
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {gridPatterns.map((pattern) => (
          <div key={pattern.id} className="group relative">
            <div
              className={`relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden bg-background shadow-sm transition-all duration-300 ${
                activePattern === pattern.id ? "ring-2 ring-primary ring-offset-2" : ""
              } ${
                activeMobileCard === pattern.id
                  ? "scale-[1.02] shadow-lg sm:scale-100"
                  : "hover:shadow-lg hover:scale-[1.02]"
              }`}
              onClick={() => handleCardInteraction(pattern.id)}
            >
              {/* Pattern style */}
              <div className="absolute inset-0" style={pattern.style} />

              {/* Badge */}
              {pattern.badge && (
                <div className="absolute top-2 sm:top-3 right-2 sm:right-3 z-10">
                  <Badge
                    variant="secondary"
                    className="gap-1 text-xs bg-background/80 backdrop-blur-sm border-border/50 px-2 py-1"
                  >
                    <Sparkles className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-violet-600" />
                    <span>{pattern.badge}</span>
                  </Badge>
                </div>
              )}

              {/* Mobile: Simple preview and copy buttons */}
              <div className="sm:hidden absolute bottom-2 left-2 right-2 z-10 flex justify-center gap-2 px-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    previewPattern(pattern.id);
                  }}
                  className="flex-1 bg-white/95 hover:bg-white text-black border-0 text-xs h-8"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  {activePattern === pattern.id ? "Hide" : "Preview"}
                </Button>
                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(pattern.code, pattern.id);
                  }}
                  className={`flex-1 border-0 text-xs h-8 ${
                    copiedId === pattern.id
                      ? "bg-gray-700 hover:bg-gray-800 text-white"
                      : "bg-gray-900/90 hover:bg-gray-900 text-white"
                  }`}
                  disabled={copiedId === pattern.id}
                >
                  {copiedId === pattern.id ? (
                    <>
                      <Check className="h-3 w-3 mr-1" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3 w-3 mr-1" />
                      Copy
                    </>
                  )}
                </Button>
              </div>

              {/* Desktop: Hover overlay */}
              <div className="hidden sm:flex absolute inset-0 cursor-pointer bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center p-4">
                <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-4 drop-shadow-lg">
                    {pattern.name}
                  </h3>
                  <div className="flex flex-col xs:flex-row gap-2 sm:gap-3 w-full xs:w-auto">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        previewPattern(pattern.id);
                      }}
                      className="shadow-xl backdrop-blur-md bg-white/95 hover:bg-white text-black border-0 transition-all duration-200 hover:scale-105 text-xs sm:text-sm px-3 py-2 h-auto w-full xs:w-auto"
                    >
                      <Eye className="h-3 w-3 mr-1" />
                      {activePattern === pattern.id ? "Hide" : "Preview"}
                    </Button>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(pattern.code, pattern.id);
                      }}
                      className={`shadow-xl backdrop-blur-md gap-1 border-0 transition-all duration-200 hover:scale-105 text-xs sm:text-sm px-3 py-2 h-auto w-full xs:w-auto ${
                        copiedId === pattern.id
                          ? "bg-gray-700 hover:bg-gray-800 text-white border border-gray-500"
                          : "bg-gray-900/90 hover:bg-gray-900 text-white"
                      }`}
                      disabled={copiedId === pattern.id}
                    >
                      {copiedId === pattern.id ? (
                        <>
                          <Check className="h-3 w-3" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3" />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
