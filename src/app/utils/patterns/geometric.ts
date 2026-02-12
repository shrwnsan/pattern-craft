/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
// Type complexity too high - skipping type checking for this file

export const geometricPatterns = [
  {
    id: "purple-gradient-grid-right",
    name: "Purple Gradient Grid Right",
    badge: "New",
    category: "geometric",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, #f0f0f0 1px, transparent 1px),
      linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
      radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
    `,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Purple Gradient Grid Right Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      \`,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}
  />
   {/* Your Content/Components */}
</div>`,
  },
  {
    id: "purple-gradient-grid-left",
    name: "Purple Gradient Grid Left",
    badge: "New",
    category: "geometric",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, #f0f0f0 1px, transparent 1px),
      linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
      radial-gradient(circle 800px at 0% 200px, #d5c5ff, transparent)
    `,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Purple Gradient Grid Left Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 0% 200px, #d5c5ff, transparent)
      \`,
      backgroundSize: "96px 64px, 96px 64px, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dual-gradient-overlay-strong",
    badge: "New",
    category: "geometric",
    name: "Dual Gradient Overlay",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 80%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 20%, rgba(59,130,246,0.3), transparent)
      \`,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dual-gradient-overlay-strong-swapped",
    name: "Dual Gradient Overlay Swapped",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay Swapped Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 80% 80%, rgba(59,130,246,0.3), transparent)
      \`,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dual-gradient-overlay-top",
    name: "Dual Gradient Overlay (Top)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay (Top) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 0% 20%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 0%, rgba(59,130,246,0.3), transparent)
      \`,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dual-gradient-overlay-bottom",
    name: "Dual Gradient Overlay (Bottom)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
      radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
      radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
    `,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Dual Gradient Overlay (Bottom) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(229,231,235,0.8) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(229,231,235,0.8) 1px, transparent 1px),
        radial-gradient(circle 500px at 20% 100%, rgba(139,92,246,0.3), transparent),
        radial-gradient(circle 500px at 100% 80%, rgba(59,130,246,0.3), transparent)
      \`,
      backgroundSize: "48px 48px, 48px 48px, 100% 100%, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "top-fade-grid",
    name: "Top Fade Grid",
    category: "geometric",
    style: {
      background: "#f8fafc",
      backgroundImage: `
      linear-gradient(to right, #e2e8f0 1px, transparent 1px),
      linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
    `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Top Fade Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      \`,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "bottom-fade-grid",
    name: "Bottom Fade Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f8fafc",
      backgroundImage: `
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      `,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Bottom Fade Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e2e8f0 1px, transparent 1px),
        linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
      \`,
      backgroundSize: "20px 30px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 100%, #000 60%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-fade-grid-left",
    name: "Diagonal Fade Grid Left",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f9fafb",
      backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f9fafb] relative">
  {/* Diagonal Fade Grid Background - Top Left */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      \`,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-fade-grid-right",
    name: "Diagonal Fade Grid Right",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f9fafb",
      backgroundImage: `
      linear-gradient(to right, #d1d5db 1px, transparent 1px),
      linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
    `,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f9fafb] relative">
  {/* Diagonal Fade Grid Background - Top Right */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      \`,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-lines",
    name: "Diagonal Stripes",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage:
        "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Diagonal Stripes Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 2px, #f3f4f6 2px, #f3f4f6 4px)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-light",
    name: "Diagonal Grid - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#fafafa",
      backgroundImage: `
       repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#fafafa] relative text-gray-900">
    {/* Diagonal Grid with Light */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
          repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 0, 0, 0.1) 0, rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 20px)
        \`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "diagonal-light-green",
    name: "Diagonal Grid - Electric",
    category: "geometric",
    badge: "New",
    style: {
      background: "#fafafa",
      backgroundImage: `
       repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#fafafa] relative text-gray-900">
    {/* Diagonal Grid with Electric Orange */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
          repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.1) 0, rgba(255, 0, 100, 0.1) 1px, transparent 1px, transparent 20px)
        \`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "zigzag-lightning-light",
    name: "Zigzag Lightning - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
      repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
      repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
      repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Zigzag Lightning - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "circuit-board-light",
    name: "Circuit Board - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
      radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
      radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
    `,
      backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Circuit Board - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      \`,
      backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "concentric-squares-light",
    name: "Concentric Squares - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Concentric Squares - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "woven-fabric-light",
    name: "Woven Fabric - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, rgba(75, 85, 99, 0.08), rgba(75, 85, 99, 0.08) 2px, transparent 2px, transparent 6px),
      repeating-linear-gradient(90deg, rgba(107, 114, 128, 0.06), rgba(107, 114, 128, 0.06) 2px, transparent 2px, transparent 6px),
      repeating-linear-gradient(0deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px),
      repeating-linear-gradient(90deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Woven Fabric - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, rgba(75, 85, 99, 0.08), rgba(75, 85, 99, 0.08) 2px, transparent 2px, transparent 6px),
        repeating-linear-gradient(90deg, rgba(107, 114, 128, 0.06), rgba(107, 114, 128, 0.06) 2px, transparent 2px, transparent 6px),
        repeating-linear-gradient(0deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(90deg, rgba(55, 65, 81, 0.04), rgba(55, 65, 81, 0.04) 1px, transparent 1px, transparent 12px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "crosshatch-art-light",
    name: "Crosshatch Art - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Crosshatch Art - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(75, 85, 99, 0.06) 2px, rgba(75, 85, 99, 0.06) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(107, 114, 128, 0.05) 2px, rgba(107, 114, 128, 0.05) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(55, 65, 81, 0.04) 2px, rgba(55, 65, 81, 0.04) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(31, 41, 55, 0.03) 2px, rgba(31, 41, 55, 0.03) 3px, transparent 3px, transparent 8px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "white-grid-with-dots",
    name: "White Grid with Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* White Grid with Dots Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "noise-texture-darker-dots",
    name: "Noise Texture (Darker Dots)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)
    `,
      backgroundSize: "20px 20px",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Noise Texture (Darker Dots) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
      backgroundSize: "20px 20px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "circuit-board",
    name: "Circuit Board",
    category: "geometric",
    style: {
      background: "#f8fafc",
      backgroundImage: `
        linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
        linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
    },
    code: `<div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Circuit Board Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#f8fafc",
      backgroundImage: \`
        linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
        linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
      \`,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "basic-grid",
    name: "Basic Grid",
    category: "geometric",
    style: {
      backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "white-sphere-grid",
    name: "White Sphere Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "white",
      backgroundImage: `
     linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
     radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
   `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
 {/* White Sphere Grid Background */}
 <div
   className="absolute inset-0 z-0"
   style={{
     background: "white",
     backgroundImage: \`
       linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
       linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
       radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0.1) 40%, transparent 80%)
     \`,
     backgroundSize: "32px 32px, 32px 32px, 100% 100%",
   }}
 />
    {/* Your Content/Components */}
</div>`,
  },
  {
    id: "magenta-orb-grid-light",
    name: "Magenta Orb Grid Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "white",
      backgroundImage: `
   linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
   linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
   radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
 `,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
{/* Magenta Orb Grid Background */}
<div
 className="absolute inset-0 z-0"
 style={{
   background: "white",
   backgroundImage: \`
     linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
     linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
     radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
   \`,
   backgroundSize: "40px 40px, 40px 40px, 100% 100%",
 }}
/>
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-sphere-grid",
    name: "Dark Sphere Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#020617",
      backgroundImage: `
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      `,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Dark Sphere Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: \`
        linear-gradient(to right, rgba(71,85,105,0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.3) 1px, transparent 1px),
        radial-gradient(circle at 50% 50%, rgba(139,92,246,0.15) 0%, transparent 70%)
      \`,
      backgroundSize: "32px 32px, 32px 32px, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "magenta-orb-grid",
    name: "Magenta Orb Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#020617",
      backgroundImage: `
      linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
      radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
    `,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Magenta Orb Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: \`
        linear-gradient(to right, rgba(71,85,105,0.15) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(71,85,105,0.15) 1px, transparent 1px),
        radial-gradient(circle at 50% 60%, rgba(236,72,153,0.15) 0%, rgba(168,85,247,0.05) 40%, transparent 70%)
      \`,
      backgroundSize: "40px 40px, 40px 40px, 100% 100%",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-basic-grid-slate",
    name: "Dark Basic Grid",
    category: "geometric",
    style: {
      background: "#020617",
      backgroundImage: `
      linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)
    `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Dark Basic Grid Background - Slate 950 */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#020617",
      backgroundImage: \`
        linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-basic-grid-faded",
    name: "Dark Basic Grid (Faded)",
    category: "geometric",
    style: {
      background: "#0f172a",
      backgroundImage: `
      linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)
    `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f172a] relative">
  {/* Dark Basic Grid Background - Faded */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#0f172a",
      backgroundImage: \`
        linear-gradient(to right, rgba(148,163,184,0.2) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(148,163,184,0.2) 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "black-basic-grid",
    name: "Black Basic Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
      linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
    `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
  {/* Black Basic Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: \`
        linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "small-grid",
    name: "Small Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      linear-gradient(to right, #262626 1px, transparent 1px),
      linear-gradient(to bottom, #262626 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Small Grid Pattern */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #262626 1px, transparent 1px),
        linear-gradient(to bottom, #262626 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "black-grid-white-dots",
    name: "Black Grid with White Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
  {/* Black Grid with White Dots Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: \`
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-grid-white-dots",
    name: "Dark Grid with White Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f172a",
      backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    },
    code: `<div className="min-h-screen w-full bg-[#0f172a] relative">
  {/* Dark Grid with White Dots Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#0f172a",
      backgroundImage: \`
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-dotted-grid",
    name: "Dark Dotted Grid",
    category: "geometric",
    style: {
      background: "#0f172a",
      backgroundImage: `
        radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
        radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
        radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px, 40px 40px, 60px 60px",
      backgroundPosition: "0 0, 10px 10px, 30px 30px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f172a] relative">
  {/* Dark Dotted Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#0f172a",
      backgroundImage: \`
        radial-gradient(circle, rgba(139,92,246,0.6) 1px, transparent 1px),
        radial-gradient(circle, rgba(59,130,246,0.4) 1px, transparent 1px),
        radial-gradient(circle, rgba(236,72,153,0.5) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px, 40px 40px, 60px 60px",
      backgroundPosition: "0 0, 10px 10px, 30px 30px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-white-dotted-grid",
    name: "Dark White Dotted Grid",
    category: "geometric",
    style: {
      background: "#000000",
      backgroundImage: `
      radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
    `,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
  {/* Dark White Dotted Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: \`
        radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
      \`,
      backgroundSize: "30px 30px",
      backgroundPosition: "0 0",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-noise-colored-high",
    name: "Dark Noise Colored",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
      radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
    `,
      backgroundSize: "20px 20px, 30px 30px, 25px 25px",
      backgroundPosition: "0 0, 10px 10px, 15px 5px",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
  {/* Dark Noise Colored Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#000000",
      backgroundImage: \`
        radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
        radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
      \`,
      backgroundSize: "20px 20px, 30px 30px, 25px 25px",
      backgroundPosition: "0 0, 10px 10px, 15px 5px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "matrix-green",
    name: "Matrix Green",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
       repeating-linear-gradient(45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(90deg, rgba(0, 255, 65, 0.03) 0, rgba(0, 255, 65, 0.03) 1px, transparent 1px, transparent 4px)
    `,
      backgroundSize: "24px 24px, 24px 24px, 8px 8px",
    },
    code: `<div className="min-h-screen w-full bg-[#000000] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
         repeating-linear-gradient(45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 65, 0.08) 0, rgba(0, 255, 65, 0.08) 1px, transparent 1px, transparent 12px),
        repeating-linear-gradient(90deg, rgba(0, 255, 65, 0.03) 0, rgba(0, 255, 65, 0.03) 1px, transparent 1px, transparent 4px)
      \`,
        backgroundSize: '24px 24px, 24px 24px, 8px 8px',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-green-glow",
    name: "Diagonal Grid - Green Glow",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
        repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
    {/* Diagonal Grid with Green Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
          repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px),
          repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px)
        \`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "diagonal-red/blue-glow",
    name: "Diagonal Grid - Red/Blue Glow",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(-45deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 20px)
    `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
    {/* Diagonal Grid with Red/Blue Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
  repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(-45deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 20px)
        \`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "diagonal-electric erange",
    name: "Diagonal Grid - Electric Orange",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
     repeating-linear-gradient(45deg, rgba(255, 140, 0, 0.12) 0, rgba(255, 140, 0, 0.12) 1px, transparent 1px, transparent 22px),
        repeating-linear-gradient(-45deg, rgba(255, 69, 0, 0.08) 0, rgba(255, 69, 0, 0.08) 1px, transparent 1px, transparent 22px)
    `,
      backgroundSize: "44px 44px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
    {/* Diagonal Grid with Red/Blue Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
   repeating-linear-gradient(45deg, rgba(255, 140, 0, 0.12) 0, rgba(255, 140, 0, 0.12) 1px, transparent 1px, transparent 22px),
        repeating-linear-gradient(-45deg, rgba(255, 69, 0, 0.08) 0, rgba(255, 69, 0, 0.08) 1px, transparent 1px, transparent 22px)
        \`,
        backgroundSize: "44px 44px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "complex-multiplier",
    name: "Complex Multiplier",
    category: "geometric",
    badge: "New",
    style: {
      background: "#101014",
      backgroundImage: `
      repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
      repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
     repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
      repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
      radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
    `,
      backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
      backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
    },
    code: `<div className="min-h-screen w-full bg-[#101014] relative text-white">
  {/* Complex Multiplier Pattern (Enhanced) */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
        repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      \`,
      backgroundSize: "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
      backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center"
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "hexagonal-lines",
    name: "Hexagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
      repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
      repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
    `,
      backgroundSize: "44px 44px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Hexagonal Pattern with Gap */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(60deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px),
        repeating-linear-gradient(-60deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 22px),
        repeating-linear-gradient(0deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 22px)
      \`,
      backgroundSize: "44px 44px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-synthwave",
    name: "Diagonal Grid - Synthwave",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0a0a0a",
      backgroundImage: `
          repeating-linear-gradient(45deg, rgba(255, 20, 147, 0.15) 0, rgba(255, 20, 147, 0.15) 2px, transparent 2px, transparent 30px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 0, rgba(0, 255, 255, 0.1) 1px, transparent 1px, transparent 25px)
      `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#0a0a0a] relative text-white">
    {/* Diagonal Grid with Green Glow */}
    <div
      className="absolute inset-0 z-0 pointer-events-none"
      style={{
        backgroundImage: \`
           repeating-linear-gradient(45deg, rgba(255, 20, 147, 0.15) 0, rgba(255, 20, 147, 0.15) 2px, transparent 2px, transparent 30px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 255, 0.1) 0, rgba(0, 255, 255, 0.1) 1px, transparent 1px, transparent 25px)
        \`,
        backgroundSize: "40px 40px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "gradient-left-diagonal-lines",
    name: "Gradient Left Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(45deg, 
        rgba(0, 255, 128, 0.2) 0px, 
        rgba(0, 255, 128, 0) 2px, 
        transparent 2px, 
        transparent 25px
      )
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(45deg, 
          rgba(0, 255, 128, 0.2) 0px, 
          rgba(0, 255, 128, 0) 2px, 
          transparent 2px, 
          transparent 25px
        )
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "gradient-right-diagonal-lines",
    name: "Gradient Right Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(-45deg, 
        rgba(255, 0, 100, 0.2) 0px, 
        rgba(255, 0, 100, 0) 2px, 
        transparent 2px, 
        transparent 25px
      )
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(-45deg, 
          rgba(255, 0, 100, 0.2) 0px, 
          rgba(255, 0, 100, 0) 2px, 
          transparent 2px, 
          transparent 25px
        )
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "cross-diagonal-lines",
    name: "Cross Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(-45deg, rgba(0, 255, 128, 0.1) 0, rgba(0, 255, 128, 0.1) 1px, transparent 1px, transparent 20px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "multi-cross-diagonal-lines",
    name: "Multi Cross Diagonal Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
       repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.2) 0, rgba(0, 255, 128, 0.2) 1px, transparent 1px, transparent 20px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Gradient Diagonal Lines Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
         repeating-linear-gradient(-45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
        repeating-linear-gradient(45deg, rgba(0, 255, 128, 0.2) 0, rgba(0, 255, 128, 0.2) 1px, transparent 1px, transparent 20px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "variable-spacing",
    name: "Variable Spacing",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(30deg, 
        rgba(255, 100, 0, 0.1) 0, 
        rgba(255, 100, 0, 0.1) 1px, 
        transparent 1px, 
        transparent 10px,
        rgba(255, 100, 0, 0.15) 11px, 
        rgba(255, 100, 0, 0.15) 12px, 
        transparent 12px, 
        transparent 40px
      )
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Variable Spacing Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(30deg, 
          rgba(255, 100, 0, 0.1) 0, 
          rgba(255, 100, 0, 0.1) 1px, 
          transparent 1px, 
          transparent 10px,
          rgba(255, 100, 0, 0.15) 11px, 
          rgba(255, 100, 0, 0.15) 12px, 
          transparent 12px, 
          transparent 40px
        )
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "circuit-board-vibes",
    name: "Circuit Board Vibes",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, 
        rgba(0, 255, 0, 0.12) 0, rgba(0, 255, 0, 0.12) 1px, 
        transparent 1px, transparent 40px
      ),
      repeating-linear-gradient(90deg, 
        rgba(0, 255, 0, 0.08) 0, rgba(0, 255, 0, 0.08) 1px, 
        transparent 1px, transparent 80px
      ),
      repeating-linear-gradient(45deg, 
        rgba(255, 100, 0, 0.10) 0, rgba(255, 100, 0, 0.10) 1px, 
        transparent 1px, transparent 160px
      )
    `,
      backgroundSize: "80px 80px, 160px 160px, 320px 320px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Circuit Board Vibes Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, 
          rgba(0, 255, 0, 0.12) 0, rgba(0, 255, 0, 0.12) 1px, 
          transparent 1px, transparent 40px
        ),
        repeating-linear-gradient(90deg, 
          rgba(0, 255, 0, 0.08) 0, rgba(0, 255, 0, 0.08) 1px, 
          transparent 1px, transparent 80px
        ),
        repeating-linear-gradient(45deg, 
          rgba(255, 100, 0, 0.10) 0, rgba(255, 100, 0, 0.10) 1px, 
          transparent 1px, transparent 160px
        )
      \`,
      backgroundSize: "80px 80px, 160px 160px, 320px 320px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "zigzag-lightning-dark",
    name: "Zigzag Lightning - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(34, 197, 94, 0.12) 20px, rgba(34, 197, 94, 0.12) 21px),
      repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(16, 185, 129, 0.10) 30px, rgba(16, 185, 129, 0.10) 31px),
      repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(59, 130, 246, 0.08) 40px, rgba(59, 130, 246, 0.08) 41px),
      repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(147, 51, 234, 0.06) 35px, rgba(147, 51, 234, 0.06) 36px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Zigzag Lightning - Dark Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(34, 197, 94, 0.12) 20px, rgba(34, 197, 94, 0.12) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(16, 185, 129, 0.10) 30px, rgba(16, 185, 129, 0.10) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(59, 130, 246, 0.08) 40px, rgba(59, 130, 246, 0.08) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(147, 51, 234, 0.06) 35px, rgba(147, 51, 234, 0.06) 36px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "circuit-board-dark",
    name: "Circuit Board - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(34, 197, 94, 0.15) 19px, rgba(34, 197, 94, 0.15) 20px, transparent 20px, transparent 39px, rgba(34, 197, 94, 0.15) 39px, rgba(34, 197, 94, 0.15) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(34, 197, 94, 0.15) 19px, rgba(34, 197, 94, 0.15) 20px, transparent 20px, transparent 39px, rgba(34, 197, 94, 0.15) 39px, rgba(34, 197, 94, 0.15) 40px),
      radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.18) 2px, transparent 2px),
      radial-gradient(circle at 40px 40px, rgba(16, 185, 129, 0.18) 2px, transparent 2px)
    `,
      backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Circuit Board - Dark Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(34, 197, 94, 0.15) 19px, rgba(34, 197, 94, 0.15) 20px, transparent 20px, transparent 39px, rgba(34, 197, 94, 0.15) 39px, rgba(34, 197, 94, 0.15) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(34, 197, 94, 0.15) 19px, rgba(34, 197, 94, 0.15) 20px, transparent 20px, transparent 39px, rgba(34, 197, 94, 0.15) 39px, rgba(34, 197, 94, 0.15) 40px),
        radial-gradient(circle at 20px 20px, rgba(16, 185, 129, 0.18) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(16, 185, 129, 0.18) 2px, transparent 2px)
      \`,
      backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "concentric-squares-dark",
    name: "Concentric Squares - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(99, 102, 241, 0.15) 5px, rgba(99, 102, 241, 0.15) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(99, 102, 241, 0.15) 5px, rgba(99, 102, 241, 0.15) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(139, 92, 246, 0.12) 10px, rgba(139, 92, 246, 0.12) 11px, transparent 11px, transparent 30px),
      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(139, 92, 246, 0.12) 10px, rgba(139, 92, 246, 0.12) 11px, transparent 11px, transparent 30px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Concentric Squares - Dark Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(99, 102, 241, 0.15) 5px, rgba(99, 102, 241, 0.15) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(99, 102, 241, 0.15) 5px, rgba(99, 102, 241, 0.15) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(139, 92, 246, 0.12) 10px, rgba(139, 92, 246, 0.12) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(139, 92, 246, 0.12) 10px, rgba(139, 92, 246, 0.12) 11px, transparent 11px, transparent 30px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "crosshatch-art-dark",
    name: "Crosshatch Art - Dark",
    category: "geometric",
    badge: "New",
    style: {
      background: "#0f0f0f",
      backgroundImage: `
      repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(16, 185, 129, 0.18) 2px, rgba(16, 185, 129, 0.18) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(245, 101, 101, 0.10) 2px, rgba(245, 101, 101, 0.10) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(234, 179, 8, 0.08) 2px, rgba(234, 179, 8, 0.08) 3px, transparent 3px, transparent 8px),
      repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(249, 115, 22, 0.06) 2px, rgba(249, 115, 22, 0.06) 3px, transparent 3px, transparent 8px)
    `,
    },
    code: `<div className="min-h-screen w-full bg-[#0f0f0f] relative text-white">
  {/* Crosshatch Art - Dark Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(22.5deg, transparent, transparent 2px, rgba(16, 185, 129, 0.18) 2px, rgba(16, 185, 129, 0.18) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(67.5deg, transparent, transparent 2px, rgba(245, 101, 101, 0.10) 2px, rgba(245, 101, 101, 0.10) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(112.5deg, transparent, transparent 2px, rgba(234, 179, 8, 0.08) 2px, rgba(234, 179, 8, 0.08) 3px, transparent 3px, transparent 8px),
        repeating-linear-gradient(157.5deg, transparent, transparent 2px, rgba(249, 115, 22, 0.06) 2px, rgba(249, 115, 22, 0.06) 3px, transparent 3px, transparent 8px)
      \`,
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-circuit-board",
    name: "Dark Circuit Board",
    category: "geometric",
    badge: "New",
    style: {
      backgroundColor: "#171717",
      backgroundImage: `
      linear-gradient(90deg, #171717 1px, transparent 1px),
      linear-gradient(180deg, #171717 1px, transparent 1px),
      linear-gradient(90deg, #262626 1px, transparent 1px),
      linear-gradient(180deg, #262626 1px, transparent 1px)
    `,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
    },
    code: `<div className="min-h-screen w-full relative bg-[#171717]">
  {/* Dark Circuit Board Background */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        linear-gradient(90deg, #171717 1px, transparent 1px),
        linear-gradient(180deg, #171717 1px, transparent 1px),
        linear-gradient(90deg, #262626 1px, transparent 1px),
        linear-gradient(180deg, #262626 1px, transparent 1px)
      \`,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "striped-dark",
    name: "Striped Dark",
    category: "geometric",
    badge: "New",
    style: {
      background:
        "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
    },
    code: `
<div className="min-h-screen w-full bg-black relative">
  {/* Striped Dark */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background:
        "repeating-linear-gradient(45deg, #000 0px, #111 2px, #000 4px, #222 6px)",
    }}
  />
  
  <div
    className="absolute inset-0 z-10 pointer-events-none"
    style={{
      background: "rgba(255, 255, 255, 0.02)",
      backdropFilter: "blur(45px) grayscale(20%)",
      WebkitBackdropFilter: "blur(45px) grayscale(20%)",
    }}
  />

  {/* Your Content/Components */}
</div>
`,
  },
  {
    id: "diagonal-striped-grid",
    name: "Diagonal Striped Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
        linear-gradient(90deg, rgba(16,185,129,0.25) 1px, transparent 0),
        linear-gradient(180deg, rgba(16,185,129,0.25) 1px, transparent 0),
        repeating-linear-gradient(45deg, rgba(16,185,129,0.2) 0 2px, transparent 2px 6px)
      `,
      backgroundSize: "24px 24px, 24px 24px, 24px 24px",
    },
    code: `<div className="min-h-screen w-full bg-white relative grid-animated-container">
  {/* Diagonal Striped Grid Spotlight Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(90deg, rgba(16,185,129,0.25) 1px, transparent 0),
        linear-gradient(180deg, rgba(16,185,129,0.25) 1px, transparent 0),
        repeating-linear-gradient(45deg, rgba(16,185,129,0.2) 0 2px, transparent 2px 6px)
      \`,
      backgroundSize: "24px 24px, 24px 24px, 24px 24px",
      WebkitMask: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0, transparent 30%)",
      mask: "radial-gradient(circle at var(--x, 50%) var(--y, 50%), black 0, transparent 30%)",
      animation: "spotlight 8s ease-in-out infinite",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dark-dot-matrix",
    name: "Dark Dot Matrix",
    category: "geometric",
    badge: "New",
    style: {
      backgroundColor: "#0a0a0a",
      backgroundImage: `
     radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
     radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
   `,
      backgroundSize: "10px 10px",
      imageRendering: "pixelated",
    },
    code: `<div className="min-h-screen w-full relative">
 {/* Dark Dot Matrix */}
 <div
   className="absolute inset-0 z-0"
   style={{
     backgroundColor: '#0a0a0a',
     backgroundImage: \`
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     \`,
     backgroundSize: '10px 10px',
     imageRendering: 'pixelated',
   }}
 />
 {/* Your Content Here */}
</div>`,
  },
  {
    id: "dark-grid-lines",
    name: "Dark Grid Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
     linear-gradient(to right, #262626 1px, transparent 1px),
     linear-gradient(to bottom, #262626 1px, transparent 1px)
   `,
      backgroundSize: "20px 20px",
    },
    code: `<div className="min-h-screen w-full bg-black relative overflow-hidden">
 {/* Dark Grid Lines Background */}
 <div
   className="absolute inset-0 z-0"
   style={{
     backgroundImage: \`
       linear-gradient(to right, #262626 1px, transparent 1px),
       linear-gradient(to bottom, #262626 1px, transparent 1px)
     \`,
     backgroundSize: "20px 20px", // Adjust grid size as needed
   }}
 />
 {/* Your Content Here */}
</div>`,
  },
  {
    id: "pixel-grid-pattern",
    name: "Pixel Grid Pattern",
    category: "geometric",
    badge: "New",
    style: {
      backgroundColor: "#000000",
      backgroundImage: `
     linear-gradient(#333333 1px, transparent 1px),
     linear-gradient(90deg, #333333 1px, transparent 1px)
   `,
      backgroundSize: "8px 8px",
      imageRendering: "pixelated",
    },
    code: `<div className="min-h-screen w-full relative">
 {/* Pixel Grid Pattern */}
 <div
   className="absolute inset-0 z-0"
   style={{
     backgroundColor: '#000000',
     backgroundImage: \`
       linear-gradient(#333333 1px, transparent 1px),
       linear-gradient(90deg, #333333 1px, transparent 1px)
     \`,
     backgroundSize: '8px 8px',
     imageRendering: 'pixelated',
   }}
 />
 {/* Your Content Here */}
</div>`,
  },
  {
    id: "neon-vertical-lines",
    name: "Neon Vertical Lines",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
       repeating-linear-gradient(
                          90deg,
                          transparent 0px,
                          transparent 79px,
                          rgba(255, 255, 255, 0.05) 80px,
                          rgba(255, 255, 255, 0.05) 81px
                        )
    `,
      backgroundSize: "100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-black relative overflow-hidden">
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      background: \`
        linear-gradient(
          90deg, 
          transparent 0%,
          transparent 30%,
          rgba(138, 43, 226, 0.4) 50%,
          transparent 70%,
          transparent 100%
        ),
        linear-gradient(
          to bottom,
          #1a1a2e 0%,
          #2d1b69 50%,
          #0f0f23 100%
        )
      \`,
      backgroundImage: \`
        repeating-linear-gradient(
          90deg,
          transparent 0px,
          transparent 79px,
          rgba(255, 255, 255, 0.05) 80px,
          rgba(255, 255, 255, 0.05) 81px
        )
      \`,
    }}
  />
  {/* Your Content Here */}
</div>`,
  },
  {
    id: "dashed-bottom-fade-grid",
    name: "Dashed Bottom Fade Grid",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage: `
             linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
          `,
      WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
          `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Dashed Bottom Fade Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: \`
         repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
      \`,
      WebkitMaskImage: \`
  repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)
      \`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dashed-top-left-fade-grid",
    name: "Dashed Top Left Fade Grid",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage: `
             linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
          `,
      WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
          `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Dashed Top Left Fade Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: \`
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
      \`,
      WebkitMaskImage: \`
  repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)
      \`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dashed-top-right-fade-grid",
    name: "Dashed Top Right Fade Grid",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage: `
             linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
          `,
      WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
          `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Dashed Top Right Fade Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: \`
          repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      \`,
      WebkitMaskImage: \`
    repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)
      \`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dashed-bottom-right-fade-grid",
    name: "Dashed Bottom Right Fade Grid",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage: `
             linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)
          `,
      WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)
          `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Dashed Bottom Right Fade Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: \`
             repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)
      \`,
      WebkitMaskImage: \`
       repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)
      \`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dashed-bottom-left-fade-grid",
    name: "Dashed Bottom Left Fade Grid",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage: `
             linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
           radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
          `,
      WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
           radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
          `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Dashed Bottom Left Fade Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: \`
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
           radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
      \`,
      WebkitMaskImage: \`
                   repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
           radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)
      \`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dashed-center-fade-grid",
    name: "Dashed Center Fade Grid",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage: `
             linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
      WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
          `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Dashed Center Fade Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: \`
       repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      \`,
      WebkitMaskImage: \`
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
          radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)
      \`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "left-masked-basic-grid",
    name: "Left Masked Basic Grid",
    category: "geometric",
    style: {
      backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 50%, transparent 100%)",
      maskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 50%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Left Masked Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 50%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 50%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "right-masked-basic-grid",
    name: "Right Masked Basic Grid",
    category: "geometric",
    style: {
      backgroundImage: `
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Right Masked Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e5e7eb 1px, transparent 1px),
        linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
      \`,
      backgroundSize: "40px 40px",
     WebkitMaskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "left-masked-diagonal-cross-grid",
    name: "Left Masked Diagonal Cross Grid",
    category: "geometric",
    style: {
      background: "white",
      backgroundImage: `
      linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
    `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 50%, transparent 100%)",
      maskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 50%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Left Masked Diagonal Cross Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      \`,
      backgroundSize: "40px 40px",
        WebkitMaskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 50%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 50%, transparent 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "right-masked-diagonal-cross-grid",
    name: "Right Masked Diagonal Cross Grid",
    category: "geometric",
    style: {
      background: "white",
      backgroundImage: `
      linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
    `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 50%, transparent 100%)",
      maskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 50%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Right Masked Diagonal Cross Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      \`,
      backgroundSize: "40px 40px",
        WebkitMaskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 50%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 50%, transparent 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "left-masked-dashed-grid-light",
    name: "Left Masked Dashed Grid Light",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
       linear-gradient(to left, black 0%, black 50%, transparent 50%, transparent 100%),
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
      `,
      WebkitMaskImage: `
    linear-gradient(to left, black 0%, black 50%, transparent 50%, transparent 100%),
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Left Masked Dashed Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: \`
        linear-gradient(to left, black 0%, black 50%, transparent 50%, transparent 100%),
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
      \`,
      WebkitMaskImage: \`
       linear-gradient(to left, black 0%, black 50%, transparent 50%, transparent 100%),
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
      \`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "right-masked-dashed-grid-light",
    name: "Right Masked Dashed Grid Light",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
      linear-gradient(to right, black 0%, black 50%, transparent 50%, transparent 100%),
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
      `,
      WebkitMaskImage: `
   linear-gradient(to right, black 0%, black 50%, transparent 50%, transparent 100%),
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Right Masked Dashed Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: \`
        linear-gradient(to right, black 0%, black 50%, transparent 50%, transparent 100%),
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
      \`,
      WebkitMaskImage: \`
      linear-gradient(to right, black 0%, black 50%, transparent 50%, transparent 100%),
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            )
      \`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "left-masked-concentric-squares-light",
    name: "Left Masked Concentric Squares - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
    `,
      WebkitMaskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Left Masked Concentric Squares - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      \`,
         WebkitMaskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "right-masked-concentric-squares-light",
    name: "Right Masked Concentric Squares - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
    `,
      WebkitMaskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Right Masked Concentric Squares - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),
        repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),
        repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)
      \`,
       WebkitMaskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "left-masked-circuit-board-light",
    name: "Left Masked Circuit Board - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
      radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
      radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
    `,
      backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
      WebkitMaskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Left Masked Circuit Board - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      \`,
      backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
         WebkitMaskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "right-masked-circuit-board-light",
    name: "Right Masked Circuit Board - Light",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
      repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
      radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
      radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
    `,
      backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
      WebkitMaskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative text-gray-800">
  {/* Right Masked Circuit Board - Light Pattern */}
  <div
    className="absolute inset-0 z-0 pointer-events-none"
    style={{
      backgroundImage: \`
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      \`,
      backgroundSize: '40px 40px, 40px 40px, 40px 40px, 40px 40px',
          WebkitMaskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "left-masked-circuit-board",
    name: "Left Masked Circuit Board",
    category: "geometric",
    style: {
      background: "#f8fafc",
      backgroundImage: `
        linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
        linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
      WebkitMaskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Left Masked Circuit Board Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#f8fafc",
      backgroundImage: \`
        linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
        linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
      \`,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
       WebkitMaskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "right-masked-circuit-board",
    name: "Right Masked Circuit Board",
    category: "geometric",
    style: {
      background: "#f8fafc",
      backgroundImage: `
        linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
        linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
      WebkitMaskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f8fafc] relative">
  {/* Right Masked Circuit Board Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#f8fafc",
      backgroundImage: \`
        linear-gradient(90deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(180deg, #e2e8f0 1px, transparent 1px),
        linear-gradient(90deg, #cbd5e1 1px, transparent 1px),
        linear-gradient(180deg, #cbd5e1 1px, transparent 1px)
      \`,
      backgroundSize: "50px 50px, 50px 50px, 10px 10px, 10px 10px",
     WebkitMaskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "left-masked-white-grid-with-dots",
    name: "Left Masked White Grid with Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
      WebkitMaskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Left Masked White Grid with Dots Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
         WebkitMaskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "right-masked-white-grid-with-dots",
    name: "Right Masked White Grid with Dots",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
      radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
    `,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
      WebkitMaskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Right Masked White Grid with Dots Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(51,65,85,0.4) 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px, 20px 20px, 20px 20px",
      backgroundPosition: "0 0, 0 0, 0 0",
         WebkitMaskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "left-masked-noise-texture-darker-dots",
    name: "Left Masked Noise Texture (Darker Dots)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)
    `,
      backgroundSize: "20px 20px",
      WebkitMaskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Left Masked Noise Texture (Darker Dots) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
      backgroundSize: "20px 20px",
       WebkitMaskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to left, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "right-masked-noise-texture-darker-dots",
    name: "Right Masked Noise Texture (Darker Dots)",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
      radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)
    `,
      backgroundSize: "20px 20px",
      WebkitMaskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
      maskImage:
        "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/* Right Masked Noise Texture (Darker Dots) Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
      backgroundSize: "20px 20px",
         WebkitMaskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, #000 0%, #000 50%, transparent 20%, transparent 100%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "paper-texture",
    name: "Paper Texture",
    category: "geometric",
    badge: "New",
    style: {
      background: "#faf9f6",
      backgroundImage: `
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
      `,
      backgroundSize: "8px 8px, 32px 32px, 32px 32px",
    },
    code: `<div className="min-h-screen w-full bg-[#faf9f6] relative">
  {/* Paper Texture */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        radial-gradient(circle at 1px 1px, rgba(0,0,0,0.08) 1px, transparent 0),
        repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px),
        repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.02) 2px, rgba(0,0,0,0.02) 4px)
      \`,
      backgroundSize: "8px 8px, 32px 32px, 32px 32px",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "vercel-grid-subtle",
    name: "Vercel Grid Subtle",
    category: "geometric",
    badge: "New",
    style: {
      background: "#000000",
      backgroundImage: `
      linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
    `,
      backgroundSize: "60px 60px",
    },
    code: `<div className="min-h-screen w-full bg-black relative">
    {/* Vercel Grid */}
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: \`
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
        \`,
        backgroundSize: "60px 60px",
      }}
    />
    {/* Your Content/Components */}
  </div>`,
  },
  {
    id: "dashed-grid-light",
    name: "Dashed Grid Light",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage: `
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
      WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Dashed Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: \`
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      \`,
      WebkitMaskImage: \`
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      \`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "dashed-top-fade-grid",
    name: "Dashed Top Fade Grid",
    category: "geometric",
    badge: "New",
    style: {
      backgroundImage: `
             linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
          `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
      WebkitMaskImage: `
            repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
          `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    },
    code: `<div className="min-h-screen w-full relative">
  {/* Dashed Top Fade Grid */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #e7e5e4 1px, transparent 1px),
        linear-gradient(to bottom, #e7e5e4 1px, transparent 1px)
      \`,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: \`
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      \`,
      WebkitMaskImage: \`
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      \`,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-cross-Bottom-left-fade-grid",
    name: "Diagonal Cross Bottom Left Fade Grid",
    category: "geometric",
    style: {
      background: "white",
      backgroundImage: `
      linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
    `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/*  Diagonal Cross Bottom Left Fade Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      \`,
      backgroundSize: "40px 40px",
         WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-cross-center-fade-grid",
    name: "Diagonal Cross Center Fade Grid",
    category: "geometric",
    style: {
      background: "white",
      backgroundImage: `
      linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
    `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
      maskImage:
        "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/*  Diagonal Cross Center Fade Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      \`,
      backgroundSize: "40px 40px",
         WebkitMaskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-cross-Bottom-right-fade-grid",
    name: "Diagonal Cross Bottom Right Fade Grid",
    category: "geometric",
    style: {
      background: "white",
      backgroundImage: `
      linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
    `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/*  Diagonal Cross Bottom Right Fade Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      \`,
      backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-cross-grid",
    name: "Diagonal Cross Grid",
    category: "geometric",
    style: {
      background: "white",
      backgroundImage: `
      linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
    `,
      backgroundSize: "40px 40px",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/*  Diagonal Cross Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      \`,
      backgroundSize: "40px 40px",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-cross-grid-top",
    name: "Diagonal Cross Grid Top",
    category: "geometric",
    style: {
      background: "white",
      backgroundImage: `
      linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
    `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
      maskImage:
        "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/*  Diagonal Cross Grid Top Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      \`,
      backgroundSize: "40px 40px",
       WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-cross-grid-bottom",
    name: "Diagonal Cross Grid Bottom",
    category: "geometric",
    style: {
      background: "white",
      backgroundImage: `
      linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
    `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/*  Diagonal Cross Grid Bottom Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      \`,
      backgroundSize: "40px 40px",
       WebkitMaskImage:
            "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 100% 80% at 50% 100%, #000 50%, transparent 90%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-cross-top-right-fade-grid",
    name: "Diagonal Cross Top Right Fade Grid",
    category: "geometric",
    style: {
      background: "white",
      backgroundImage: `
      linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
    `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/*  Diagonal Cross Top Right Fade Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      \`,
      backgroundSize: "40px 40px",
         WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 0% 0%, #000 50%, transparent 90%)"
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-cross-top-left-fade-grid",
    name: "Diagonal Cross Top Left Fade Grid",
    category: "geometric",
    style: {
      background: "white",
      backgroundImage: `
      linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
      linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
    `,
      backgroundSize: "40px 40px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-white relative">
  {/*  Diagonal Cross Top Left Fade Grid Background */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: \`
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      \`,
      backgroundSize: "40px 40px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
    }}
  />
  {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-fade-bottom-grid-Left",
    name: "Diagonal Fade Bottom Grid Left",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f9fafb",
      backgroundImage: `
      linear-gradient(to right, #d1d5db 1px, transparent 1px),
      linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
    `,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f9fafb] relative">
  {/* Diagonal Fade Bottom Grid Left Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      \`,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 0% 100%, #000 50%, transparent 90%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-fade-bottom-grid-right",
    name: "Diagonal Fade Bottom Grid Right",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f9fafb",
      backgroundImage: `
      linear-gradient(to right, #d1d5db 1px, transparent 1px),
      linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
    `,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
      maskImage:
        "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f9fafb] relative">
  {/* Diagonal Fade Bottom Grid Right Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      \`,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
         "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
      maskImage:
         "radial-gradient(ellipse 80% 80% at 100% 100%, #000 50%, transparent 90%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "diagonal-fade-center-grid",
    name: "Diagonal Fade Center Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#f9fafb",
      backgroundImage: `
      linear-gradient(to right, #d1d5db 1px, transparent 1px),
      linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
    `,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
        "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
      maskImage:
        "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
    },
    code: `<div className="min-h-screen w-full bg-[#f9fafb] relative">
  {/* Diagonal Fade Center Grid Background */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: \`
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      \`,
      backgroundSize: "32px 32px",
      WebkitMaskImage:
         "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
      maskImage:
         "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 70%)",
    }}
  />
     {/* Your Content/Components */}
</div>`,
  },
  {
    id: "grid-dual-purple-glow",
    name: "Grid Dual Purple Glow",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
     linear-gradient(to right, #f0f0f0 1px, transparent 1px),
     linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
     radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
     radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)
   `,
      backgroundSize: `
     96px 64px,    
     96px 64px,    
     100% 100%,    
     100% 100%  
   `,
    },
    code: `<div className="min-h-screen w-full bg-white relative overflow-hidden">
 {/* Grid + Left & Right Gradient Glow */}
 <div
   className="absolute inset-0 z-0"
   style={{
     backgroundImage: \`
       linear-gradient(to right, #f0f0f0 1px, transparent 1px),
       linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
       radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
       radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)
     \`,
     backgroundSize: \`
       96px 64px,    
       96px 64px,    
       100% 100%,    
       100% 100%  
     \`,
   }}
 />
 {/* Your Content Here */}
</div>`,
  },
  {
    id: "grid-quad-purple-glow",
    name: "Grid Quad Purple Glow",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
     linear-gradient(to right, #f0f0f0 1px, transparent 1px),
     linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
     radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),     /* Left */
     radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent),  /* Right */
     radial-gradient(circle 600px at 50% 0px, #d5c5ff, transparent),     /* Top */
     radial-gradient(circle 600px at 50% 100%, #d5c5ff, transparent)     /* Bottom */
   `,
      backgroundSize: `
     96px 64px,    
     96px 64px,    
     100% 100%,    
     100% 100%,
     100% 100%,
     100% 100%
   `,
    },
    code: `<div className="min-h-screen w-full bg-white relative overflow-hidden">
 {/* Grid + Glow on All Sides */}
 <div
   className="absolute inset-0 z-0 pointer-events-none"
   style={{
     backgroundImage: \`
       linear-gradient(to right, #f0f0f0 1px, transparent 1px),
       linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
       radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),     /* Left */
       radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent),  /* Right */
       radial-gradient(circle 600px at 50% 0px, #d5c5ff, transparent),     /* Top */
       radial-gradient(circle 600px at 50% 100%, #d5c5ff, transparent)     /* Bottom */
     \`,
     backgroundSize: \`
       96px 64px,    
       96px 64px,    
       100% 100%,    
       100% 100%,
       100% 100%,
       100% 100%
     \`,
   }}
 />
 {/* Your Content Here */}
</div>`,
  },
  {
    id: "purple-corner-grid",
    name: "Purple Corner Grid",
    category: "geometric",
    badge: "New",
    style: {
      background: "#ffffff",
      backgroundImage: `
     linear-gradient(to right, #f0f0f0 1px, transparent 1px),
     linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
     radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
     radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)
   `,
      backgroundSize: "20px 20px, 20px 20px, 100% 100%, 100% 100%",
    },
    code: `<div className="min-h-screen w-full bg-white relative overflow-hidden">
 {/* Purple Corner Grid Background */}
 <div
   className="absolute inset-0 z-0"
   style={{
     backgroundImage: \`
       linear-gradient(to right, #f0f0f0 1px, transparent 1px),
       linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
       radial-gradient(circle 600px at 0% 200px, #d5c5ff, transparent),
       radial-gradient(circle 600px at 100% 200px, #d5c5ff, transparent)
     \`,
      backgroundSize: "20px 20px, 20px 20px, 100% 100%, 100% 100%",
   }}
 />
 {/* Your Content Here */}
</div>`,
  },
];
