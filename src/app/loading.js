// loading.js - Luxury Full-Page Shimmer Loading Skeleton
export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#090d16] text-white flex flex-col justify-between select-none">
      {/* Dynamic Keyframes for Shimmer Waves */}
      <style>{`
        @keyframes shimmerWave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.08); }
        }
        .shimmer-box {
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.07);
          backdrop-filter: blur(12px);
        }
        .shimmer-box::after {
          content: '';
          position: absolute;
          inset: 0;
          transform: translateX(-100%);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.08),
            rgba(0, 240, 255, 0.12),
            rgba(168, 85, 247, 0.1),
            transparent
          );
          animation: shimmerWave 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>

      {/* Ambient Background Nebulas */}
      <div
        className="pointer-events-none absolute -top-32 -left-20 h-[450px] w-[450px] rounded-full blur-[120px] opacity-30"
        style={{
          background: "radial-gradient(circle, #00f0ff 0%, #3b82f6 50%, transparent 70%)",
          animation: "pulseGlow 6s ease-in-out infinite",
        }}
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-32 h-[500px] w-[500px] rounded-full blur-[130px] opacity-25"
        style={{
          background: "radial-gradient(circle, #a855f7 0%, #ec4899 50%, transparent 70%)",
          animation: "pulseGlow 7s ease-in-out infinite",
          animationDelay: "-3s",
        }}
      />

      {/* 1. Header Shimmer Bar */}
      <header className="relative z-10 w-full px-4 sm:px-8 py-4 sm:py-5 border-b border-white/5 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Skeleton */}
          <div className="flex items-center gap-3">
            <div className="shimmer-box h-10 w-10 sm:h-12 sm:w-12 rounded-full" />
            <div className="flex flex-col gap-1.5 hidden sm:flex">
              <div className="shimmer-box h-3.5 w-28 rounded-md" />
              <div className="shimmer-box h-2.5 w-20 rounded-md" />
            </div>
          </div>

          {/* Navigation Capsules Skeleton */}
          <div className="hidden md:flex items-center gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="shimmer-box h-8 w-20 rounded-xl" />
            ))}
          </div>

          {/* Action Button & Theme Skeleton */}
          <div className="flex items-center gap-2.5">
            <div className="shimmer-box h-9 w-9 rounded-full" />
            <div className="shimmer-box h-9 w-9 rounded-full" />
            <div className="shimmer-box h-9 w-28 rounded-full hidden sm:block" />
          </div>
        </div>
      </header>

      {/* 2. Hero Section Shimmer Body */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Skeleton */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6">
            {/* Status Pill */}
            <div className="shimmer-box h-7 w-48 rounded-full" />

            {/* Headline Title Lines */}
            <div className="space-y-3">
              <div className="shimmer-box h-10 sm:h-14 w-4/5 rounded-2xl" />
              <div className="shimmer-box h-10 sm:h-14 w-full rounded-2xl" />
            </div>

            {/* Subtitle Description */}
            <div className="space-y-2 max-w-xl">
              <div className="shimmer-box h-4 w-full rounded-md" />
              <div className="shimmer-box h-4 w-5/6 rounded-md" />
              <div className="shimmer-box h-4 w-3/4 rounded-md" />
            </div>

            {/* CTA Buttons Skeleton */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <div className="shimmer-box h-11 w-full sm:w-40 rounded-xl" />
              <div className="shimmer-box h-11 w-full sm:w-44 rounded-xl" />
            </div>

            {/* Impact Metric Cards Skeleton */}
            <div className="grid grid-cols-3 gap-3 max-w-md pt-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="shimmer-box h-16 rounded-2xl p-2.5 flex flex-col justify-between">
                  <div className="shimmer-box h-4 w-10 rounded" />
                  <div className="shimmer-box h-2.5 w-14 rounded" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Hologram Avatar Skeleton */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-6">
            {/* Outer Rotating Orbit Ring Skeleton */}
            <div className="shimmer-box relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96 rounded-full flex items-center justify-center p-3">
              <div className="shimmer-box h-full w-full rounded-full flex items-center justify-center">
                {/* Center Core Monogram */}
                <div className="shimmer-box h-28 w-28 rounded-full flex items-center justify-center">
                  <span className="text-xl font-mono font-bold text-white/30 tracking-widest animate-pulse">
                    GS
                  </span>
                </div>
              </div>

              {/* Floating Orbit Pods Skeleton */}
              <div className="shimmer-box absolute -top-2 left-6 h-10 w-28 rounded-2xl" />
              <div className="shimmer-box absolute -bottom-2 right-4 h-10 w-32 rounded-2xl" />
            </div>
          </div>

        </div>
      </main>

      {/* 3. Bottom Status Bar Shimmer */}
      <footer className="relative z-10 w-full px-4 sm:px-8 py-3 border-t border-white/5 backdrop-blur-md flex items-center justify-between text-xs text-white/40">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#00f0ff] animate-ping" />
          <span className="font-mono text-[11px]">INITIALIZING PORTFOLIO...</span>
        </div>
        <div className="shimmer-box h-4 w-32 rounded-md hidden sm:block" />
      </footer>
    </div>
  );
}