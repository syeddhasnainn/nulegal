/** Infinite horizontal marquee — Draftr-style client logos (from [Draftr template](https://draftr-wbs.framer.website/) hero strip). */

const MARQUEE_LOGOS = [
  "/brands/draftr-marquee/d4hg31biMljU4aH2RDnh6wWqDfM.svg",
  "/brands/draftr-marquee/YYV5QoPK9M9NhyUxptVvm0o7WFM.svg",
  "/brands/draftr-marquee/LBtvbbMscujp7wOLmEoI7hneo.svg",
  "/brands/draftr-marquee/bbXsJC7bsFfQZR7qsy0AXJDR2c.svg",
  "/brands/draftr-marquee/IUvmt1THxXd3PXbz5CaMuhEuI6Q.svg",
  "/brands/draftr-marquee/Jxv0OqRRv25KUWBoDu2ZlmiSAE.svg",
  "/brands/draftr-marquee/8Cv9xasPycS59rovKfmcfBFsiZo.svg",
  "/brands/draftr-marquee/7aIzRlMAo7aKEM8u0k2IGflPk0.svg",
] as const;

function LogoTrack() {
  return (
    <>
      {MARQUEE_LOGOS.map((src) => (
        <div
          key={src}
          className="flex h-10 shrink-0 items-center justify-center px-7 min-[810px]:h-11 min-[810px]:px-9 min-[1200px]:px-11"
        >
          <img
            src={src}
            alt=""
            className="h-7 w-auto max-w-[140px] object-contain opacity-90 min-[810px]:h-8 min-[1200px]:max-w-[160px]"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}
    </>
  );
}

export function ClientLogoMarquee() {
  return (
    <div
      className="marquee-container relative w-full"
      role="region"
      aria-label="Trusted by teams"
    >
      <p className="sr-only">Trusted by teams at leading companies</p>

      {/* Left fade */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-white to-transparent min-[810px]:w-16"
        aria-hidden
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-white to-transparent min-[810px]:w-16"
        aria-hidden
      />

      {/* Track — two copies so translateX(-50%) loops seamlessly */}
      <div className="marquee-track flex animate-marquee will-change-transform">
        <LogoTrack />
        <LogoTrack />
      </div>
    </div>
  );
}
