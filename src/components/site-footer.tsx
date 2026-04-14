const exploreLinks = [
  { href: "#product", label: "Product" },
  { href: "#businesses", label: "For businesses" },
  { href: "#lawyers", label: "For lawyers" },
  { href: "#contact", label: "Contact" },
] as const;

const legalLinks = [
  { href: "#", label: "Legal Notice" },
  { href: "#", label: "Privacy Policy" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 lg:pt-20 lg:pb-14">
        <div className="grid gap-0 lg:grid-cols-3 lg:items-start">
          {/* Brand */}
          <div className="pb-10 lg:pb-0 lg:pr-10">
            <a href="#" className="inline-flex items-center gap-2.5">
              <img src="/nulegal_favicon.svg" alt="" className="h-9 w-9" width={36} height={36} />
              <span className="text-xl font-bold tracking-tight text-slate-900">nu:legal</span>
            </a>
          </div>

          {/* Explore + copyright */}
          <div className="border-t border-slate-200 py-10 lg:border-t-0 lg:border-l lg:border-slate-200 lg:px-10 lg:py-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">Explore</p>
            <ul className="mt-8 space-y-4">
              {exploreLinks.map(({ href, label }) => (
                <li key={href}>
                  <a href={href} className="text-[15px] text-slate-900 transition hover:text-slate-600">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-14 text-[11px] leading-relaxed text-slate-500 lg:mt-16">
              Copyright © {year} Nulegal GmbH. All rights reserved.
            </p>
          </div>

          {/* Legal */}
          <div className="border-t border-slate-200 pt-10 lg:border-t-0 lg:border-l lg:border-slate-200 lg:px-10 lg:pt-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-500">Legal</p>
            <ul className="mt-8 space-y-4">
              {legalLinks.map(({ href, label }) => (
                <li key={label}>
                  <a href={href} className="text-[15px] text-slate-900 transition hover:text-slate-600">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Wordmark — full-strength type fading into the page edge (Flank-style) */}
      <div
        className="pointer-events-none flex w-full justify-center overflow-hidden bg-white select-none"
        aria-hidden
      >
        <span className="mt-8 inline-block whitespace-nowrap pb-0 font-sans text-[clamp(5.5rem,28vw,22rem)] font-bold leading-none tracking-[-0.045em] text-[#E8E8E8] mask-[linear-gradient(to_bottom,#000,#0000)]">
          nu:legal
        </span>
      </div>
    </footer>
  );
}
