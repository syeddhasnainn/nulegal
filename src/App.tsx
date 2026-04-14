import {
  ArrowRight01Icon,
  BalanceScaleIcon,
  CpuIcon,
  LegalHammerIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";
import { AILegalWorkflowMock } from "./components/ai-legal-workflow-mock";
import { IntegrationHubDiagram } from "./components/integration-hub-diagram";
import { CeaseDesistFlowShowcase } from "./components/cease-desist-flow-showcase";
import { SiteFooter } from "./components/site-footer";
import { ClientLogoMarquee } from "./components/client-logo-marquee";
import { DURATION, EASE_OUT_EXPO, STAGGER } from "./lib/motion-config";

const PRODUCT_WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Understand your legal position",
    description: "Agents review your intake and surface risks, gaps, and next steps.",
    icon: BalanceScaleIcon,
  },
  {
    number: "02",
    title: "Bring in the right legal expert",
    description: "When needed, the right specialist steps in with the context already prepared.",
    icon: LegalHammerIcon,
  },
  {
    number: "03",
    title: "Move routine work forward automatically",
    description: "Drafting, reminders, and tracking keep moving while people focus on judgment.",
    icon: CpuIcon,
  },
] as const;

function App() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Navbar — typography matched to Draftr (Switzer, preset 1t7ht9h + link nwb6v3) */}
      <header className="bg-white px-6 antialiased lg:px-[30px]">
        <nav
          aria-label="Main"
          className="font-nav mx-auto flex max-w-[1200px] items-center justify-between gap-4 py-5"
        >
          <a href="#" className="flex shrink-0 items-center gap-2">
            <img src="/nulegal_favicon.svg" alt="" className="h-8 w-8" width={32} height={32} />
            <span className="text-base font-semibold leading-[1.4] tracking-[-0.02em] text-[#101011] min-[810px]:text-[17px] min-[1200px]:text-lg">
              nu:legal
            </span>
          </a>
          <div className="hidden items-center gap-5 text-base font-medium leading-[1.4] tracking-[-0.02em] text-[#606266] sm:flex min-[810px]:text-[17px] min-[1200px]:text-lg">
            <a
              href="#product"
              className="transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[#101011]"
            >
              Product
            </a>
            <a
              href="#product"
              className="transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[#101011]"
            >
              For businesses
            </a>
            <a
              href="#lawyers"
              className="transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[#101011]"
            >
              For lawyers
            </a>
            <a
              href="#contact"
              className="transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:text-[#101011]"
            >
              Contact
            </a>
          </div>
          <a
            href="#waitlist"
            className="shrink-0 rounded-full bg-[#101011] px-5 py-2.5 text-base font-medium leading-[1.4] tracking-[-0.02em] text-white transition-colors duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] hover:bg-[#2b2b2c] min-[810px]:px-6 min-[810px]:text-[17px] min-[810px]:py-3 min-[1200px]:text-lg"
          >
            Join The Waitlist
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section id="waitlist" className="gradient-hero relative scroll-mt-32 overflow-hidden px-6 pb-16 min-[810px]:pb-20 lg:pb-24">
        <div className="relative z-10 mx-auto max-w-4xl pt-12 text-center lg:pt-20">
          <motion.h1 
            className="text-balance text-[40px] font-semibold leading-none tracking-normal text-black min-[810px]:text-[70px] min-[810px]:tracking-[-0.04em] min-[1200px]:text-[90px]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.hero, ease: EASE_OUT_EXPO }}
          >
            <span className="block">Solving your</span>
            <span className="block">legal challenges.</span>
          </motion.h1>
          <motion.p 
            className="font-nav mx-auto mt-7 max-w-[36rem] text-pretty text-base font-medium leading-[1.6] tracking-[-0.015em] text-[#606266] min-[810px]:mt-8 min-[810px]:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.hero, delay: STAGGER.section, ease: EASE_OUT_EXPO }}
          >
            <span className="block">Get the answer you need, find the right experts,</span>
            <span className="block">get legal work done now.</span>
          </motion.p>
          <motion.div 
            className="mt-10 flex justify-center min-[810px]:mt-12"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: DURATION.hero, delay: STAGGER.section * 2, ease: EASE_OUT_EXPO }}
          >
            <a
              href="#"
              className="inline-flex items-center gap-2.5 rounded-full bg-indigo-600 px-7 py-3 text-base font-semibold text-white shadow-md shadow-indigo-200/5 transition hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Join the waitlist
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="shrink-0" aria-hidden />
            </a>
          </motion.div>
        </div>

        {/* Chat showcase — peek effect */}
        <motion.div 
          className="relative z-10 mx-auto mt-16 max-w-6xl lg:mt-20"
          initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: DURATION.hero, delay: STAGGER.section * 3, ease: EASE_OUT_EXPO }}
        >
          <div className="overflow-hidden rounded-2xl border border-indigo-200/35 bg-white/95 shadow-[0_24px_80px_-32px_rgba(79,70,229,0.2),0_0_0_1px_rgba(255,255,255,0.8)_inset] ring-1 ring-indigo-100/40">
            <CeaseDesistFlowShowcase />
          </div>
        </motion.div>

      </section>

      {/* Logo marquee: centered like the reference, with page gutters preserved */}
      <section className="bg-white py-8 min-[810px]:py-10">
        <div className="mx-auto max-w-6xl px-6">
          <ClientLogoMarquee />
        </div>
      </section>

	      {/* Product + businesses — editorial workflow layout */}
	      <section id="product" className="scroll-mt-32 bg-white px-6 py-20 lg:py-28">
	        <div className="mx-auto max-w-6xl">
	          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 xl:gap-20">
	            <div className="lg:sticky lg:top-28 lg:self-start">
	              <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7b7169]">
	                How nu:legal works
	              </p>
	              <h2 className="mt-4 max-w-xl text-balance font-sans text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-black min-[810px]:text-[1.875rem] min-[1200px]:text-[2.125rem]">
	                Future legal technology
	                <br />
	                empowering you today.
	              </h2>
		              <p className="font-nav mt-6 max-w-lg text-pretty text-[1.125rem] font-medium leading-[1.55] tracking-[-0.015em] text-[#606266] min-[810px]:text-[1.25rem] min-[810px]:leading-[1.4] min-[1200px]:mt-7">
		                Understand the issue, bring in experts, and keep the work moving.
		              </p>
	            </div>

	            <div>
		              <ol className="space-y-2">
		                {PRODUCT_WORKFLOW_STEPS.map((step) => (
		                  <li
		                    key={step.number}
		                    className="grid gap-5 py-8 min-[810px]:grid-cols-[84px_minmax(0,1fr)] min-[810px]:items-start min-[810px]:gap-6"
		                  >
		                    <div className="text-[2.75rem] font-semibold leading-none tracking-[-0.08em] text-slate-200 min-[810px]:pt-1">
		                      {step.number}
		                    </div>

	                    <div>
	                      <div className="flex items-center gap-3">
	                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white">
	                          <HugeiconsIcon icon={step.icon} size={18} strokeWidth={2} aria-hidden />
	                        </span>
	                        <h3 className="text-[1.45rem] font-semibold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-[1.7rem]">
	                          {step.title}
	                        </h3>
	                      </div>
		                      <p className="mt-4 max-w-2xl text-[0.98rem] leading-[1.75] tracking-[-0.012em] text-slate-600">
		                        {step.description}
		                      </p>
		                    </div>
		                  </li>
		                ))}
		              </ol>
		            </div>
		          </div>
	        </div>
	      </section>

      {/* Bento: testimonial, integrations, AI workflow */}
      <section id="platform" className="scroll-mt-32 bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-medium text-slate-600">Platform in practice</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-balance text-center font-bento text-3xl tracking-tight text-slate-900 md:text-4xl">
            One stack for automation, integrations, and AI you control
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
            {/* Testimonial */}
            <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-3xl bg-slate-950 p-8 md:min-h-[320px]">
              <div
                className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-600/25 blur-3xl"
                aria-hidden
              />
              <div className="relative">
                <div className="flex items-center gap-2">
                  <img src="/nulegal_favicon.svg" alt="" className="h-8 w-8" width={32} height={32} />
                  <span className="text-sm font-semibold text-white">nu:legal</span>
                </div>
                <blockquote className="mt-8 text-lg leading-relaxed text-white/95">
                  From intake to resolution, nu:legal kept our contract workflows moving without losing lawyer
                  oversight. The blend of agents and our own team finally feels like one system.
                </blockquote>
              </div>
              <div className="relative mt-8 border-t border-white/10 pt-6">
                <p className="font-medium text-white">Alexandra Meyer</p>
                <p className="text-sm text-slate-400">General Counsel, Riverstone GmbH</p>
              </div>
            </div>

            {/* Tool integration hub */}
            <div className="rounded-3xl bg-[#ebebec] p-8 md:p-10">
              <h3 className="font-bento text-3xl tracking-tight text-slate-900 md:text-[2rem]">
                Tool Integration Hub
              </h3>
	              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
	                Connect the tools your legal team already uses and let AI move the work forward.
	              </p>
              <div className="mt-8 flex justify-center px-1">
                <IntegrationHubDiagram />
              </div>
            </div>

            {/* AI workflow preview (full width) */}
            <div className="rounded-3xl bg-[#ebebec] p-8 md:col-span-2 md:p-10">
              <h3 className="font-bento text-3xl tracking-tight text-slate-900 md:text-[2rem]">
                Agents in motion
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
                From prompt to parallel research and structured analysis — a calmer, production-grade preview
                than noisy chat mocks.
              </p>
              <AILegalWorkflowMock />
            </div>
          </div>
        </div>
      </section>

      {/* For Lawyers Section */}
      <section id="lawyers" className="scroll-mt-32 bg-white px-6 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="overflow-hidden rounded-3xl bg-[#ebebec] p-6 md:p-8">
            <img
              src="/lawyers.webp"
              alt="Legal professionals collaborating"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div>
            <p className="font-nav text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7b7169]">
              For lawyers
            </p>
            <h2 className="mt-4 max-w-xl text-balance font-sans text-2xl font-bold leading-[1.2] tracking-[-0.03em] text-black min-[810px]:text-[1.875rem] min-[1200px]:text-[2.125rem]">
              The perfect legal partner for every workflow
            </h2>
            <p className="font-nav mt-6 max-w-lg text-pretty text-[1.125rem] font-medium leading-[1.55] tracking-[-0.015em] text-[#606266] min-[810px]:text-[1.25rem] min-[810px]:leading-[1.4] min-[1200px]:mt-7">
              Discover how our platform connects you with clients that match your expertise, whether you're a solo practitioner, boutique firm, or large practice.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
              {(
                [
                  "Pre-qualified client leads",
                  "Automated onboarding",
                  "AI-powered research tools",
                  "Document automation",
                  "Expertise-based matching",
                  "Focus on billable work",
                ] as const
              ).map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 font-nav text-sm font-medium leading-relaxed text-slate-400" aria-hidden>
                    →
                  </span>
                  <span className="font-nav text-sm font-medium leading-relaxed text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative scroll-mt-32 bg-white px-6 py-20 lg:py-28">
        <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-10 text-center">
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 md:text-4xl lg:text-4xl">
            Get your legal work done by AI agents that understand your business.
          </h2>
          <a
            href="#"
            className="relative z-10 inline-flex items-center gap-2.5 rounded-full bg-indigo-600 px-7 py-3 text-base font-semibold text-white shadow-md shadow-indigo-200/5 transition hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20 focus-visible:ring-2 focus-visible:ring-indigo-500/40"
          >
            Join the waitlist
            <HugeiconsIcon icon={ArrowRight01Icon} size={16} className="shrink-0" aria-hidden />
          </a>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default App;
