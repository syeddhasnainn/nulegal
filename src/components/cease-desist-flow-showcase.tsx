import { useState, useEffect, type ReactNode } from "react";
import {
  LicenseDraftIcon,
  Search01Icon,
  TaskDone01Icon,
  ViewIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";
import { DURATION, EASE_OUT_EXPO, STAGGER } from "../lib/motion-config";

const searchTerms = ["deadline", "demand", "trademark", "removal", "infringement", "response"];

const webSources = [
  { name: "USPTO", logo: "/brands/uspto.svg" },
  { name: "Reuters Legal", logo: "/brands/reuters.svg" },
  { name: "Law360", logo: "/brands/law360.png" },
  { name: "CourtListener", logo: "/brands/courtlistener.png" },
];

function BulletIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 6 6"
      className={`h-1.5 w-1.5 ${className}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <circle cx="3" cy="3" r="3" />
    </svg>
  );
}

function PdfIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M7 2h7l6 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z"
        fill="#DC2626"
      />
      <path d="M14 2v6h6" fill="#FCA5A5" />
      <path
        d="M9.5 13.5v4m0-4c0-.828.448-1.5 1-1.5s1 .672 1 1.5-.448 1.5-1 1.5-1-.672-1-1.5zm3.5 2.5v-4h1c.552 0 1 .448 1 1v1c0 .552-.448 1-1 1h-1m4 1v-4h1.5"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CeaseDesistFlowShowcase() {
  const [visibleStep, setVisibleStep] = useState(-1);
  const [showSummary, setShowSummary] = useState(false);
  const reduceMotion = useReducedMotion();

  const totalSteps = 5;

  useEffect(() => {
    if (reduceMotion) {
      setVisibleStep(totalSteps);
      setShowSummary(true);
      return;
    }

    const timers: ReturnType<typeof setTimeout>[] = [];
    const stepDelay = 550;

    for (let i = 0; i <= totalSteps; i++) {
      timers.push(
        setTimeout(() => {
          setVisibleStep(i);
        }, 800 + i * stepDelay)
      );
    }

    timers.push(
      setTimeout(() => {
        setShowSummary(true);
      }, 800 + (totalSteps + 1) * stepDelay)
    );

    return () => timers.forEach(clearTimeout);
  }, [reduceMotion]);

  const stepVisible = (index: number) => visibleStep >= index;

  return (
    <div className="overflow-hidden rounded-2xl bg-white">
      {/* User message */}
      <div className="px-5 py-5 sm:px-6">
        <div className="flex justify-end">
          <motion.div 
            className="max-w-[min(100%,22rem)] rounded-2xl bg-slate-100 px-4 py-2.5 text-[13.5px] leading-snug text-slate-800 sm:text-sm"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATION.normal, ease: EASE_OUT_EXPO }}
          >
            I received a cease and desist letter
          </motion.div>
        </div>
      </div>

      {/* Agent initial response */}
      <div className="px-5 pb-5 sm:px-6">
        <motion.div 
          className="flex gap-3"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.normal, delay: 0.3, ease: EASE_OUT_EXPO }}
        >
          <img
            src="/nulegal_favicon.svg"
            alt=""
            className="h-6 w-6 shrink-0 mt-0.5"
            width={24}
            height={24}
          />
          <p className="text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
            I'll help you analyze this cease and desist letter. Let me review the document and gather
            relevant information to understand the deadlines, demands, and your options.
          </p>
        </motion.div>
      </div>

      {/* Steps - all rendered, opacity controlled */}
      <div className="px-5 pb-4 sm:px-6">
        <StepRow title="Assessing query" visible={stepVisible(0)}>
          <p className="text-[13px] leading-[1.65] text-slate-500 sm:text-[13.5px]">
            Interpreting the user message as a cease &amp; desist intake. Planning extraction for
            deadlines, demands, jurisdiction cues, and recommended next actions before touching the
            file.
          </p>
        </StepRow>

        <StepRow title="Reviewing attached file" visible={stepVisible(1)}>
          <div className="flex w-full items-center gap-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
            <PdfIcon className="h-6 w-6 shrink-0" />
            <span className="min-w-0 flex-1 truncate text-[13px] text-slate-700 sm:text-[13.5px]">
              Cease &amp; Desist — 2025-04.pdf
            </span>
            <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-medium text-slate-500">
              PDF
            </span>
          </div>
        </StepRow>

        <StepRow title="Checking for terms in attached file" visible={stepVisible(2)}>
          <div className="flex flex-wrap gap-1.5">
            {searchTerms.map((term, i) => (
              <motion.span
                key={term}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[12px] text-slate-600"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={stepVisible(2) ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: DURATION.fast, delay: i * STAGGER.fast, ease: EASE_OUT_EXPO }}
              >
                <HugeiconsIcon
                  icon={Search01Icon}
                  size={12}
                  strokeWidth={2}
                  className="shrink-0 text-slate-400"
                  aria-hidden
                />
                {term}
              </motion.span>
            ))}
          </div>
        </StepRow>

        <StepRow title="Searching the web for relevant information" visible={stepVisible(3)}>
          <div className="flex flex-wrap gap-1.5">
            {webSources.map((s, i) => (
              <motion.span
                key={s.name}
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2 py-1 text-[12px] text-slate-600"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={stepVisible(3) ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: DURATION.fast, delay: i * STAGGER.normal, ease: EASE_OUT_EXPO }}
              >
                <img
                  src={s.logo}
                  alt=""
                  className="h-3.5 w-auto shrink-0 object-contain"
                  loading="lazy"
                  decoding="async"
                />
                {s.name}
              </motion.span>
            ))}
          </div>
        </StepRow>

        <StepRow title="Evaluating evidence strength" visible={stepVisible(4)} isLast>
          <p className="text-[13px] leading-[1.65] text-slate-500 sm:text-[13.5px]">
            Cross-checking extracted claims against the letter language and surfaced sources.
            Weighting confidence for deadlines, asserted rights, and required remedial steps.
          </p>
        </StepRow>
      </div>

      {/* Analysis summary card - always rendered, opacity controlled */}
      <motion.div
        className="px-5 py-5 sm:px-6"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: showSummary ? 1 : 0 }}
        transition={{ duration: DURATION.slow, ease: EASE_OUT_EXPO }}
      >
        <div className="overflow-hidden rounded-xl border border-slate-200/60 bg-white">
          {/* Header */}
          <div className="flex items-center gap-2.5 px-5 pt-5 pb-2">
            <HugeiconsIcon
              icon={TaskDone01Icon}
              size={16}
              strokeWidth={2}
              className="shrink-0 text-indigo-600"
              aria-hidden
            />
            <p className="text-[14px] font-semibold text-slate-900">Analysis summary: Cease &amp; desist</p>
          </div>
          {/* Body */}
          <div className="px-5 pb-5">
            <ul className="space-y-2 text-[13px] leading-relaxed text-slate-600 sm:text-[13.5px]">
              {[
                "Deadline: April 30, 2025",
                "Demand: Removal of specific website content",
                "Claim basis: Alleged trademark infringement",
              ].map((item, i) => (
                <motion.li 
                  key={item}
                  className="flex gap-2"
                  initial={reduceMotion ? false : { opacity: 0 }}
                  animate={{ opacity: showSummary ? 1 : 0 }}
                  transition={{ duration: DURATION.fast, delay: showSummary ? 0.1 + i * STAGGER.normal : 0, ease: EASE_OUT_EXPO }}
                >
                  <span className="text-slate-400">—</span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            <button
              type="button"
              className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-indigo-600 transition hover:text-indigo-700"
            >
              <HugeiconsIcon icon={ViewIcon} size={16} strokeWidth={2} className="shrink-0" aria-hidden />
              View details
            </button>
          </div>
          {/* Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50/50 px-5 py-3.5">
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-indigo-700"
            >
              <HugeiconsIcon icon={LicenseDraftIcon} size={16} className="shrink-0" aria-hidden />
              Draft response
            </button>
            <button
              type="button"
              className="text-[13px] font-medium text-indigo-600 transition hover:text-indigo-700"
            >
              Add todo
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function StepRow({
  title,
  children,
  visible = true,
  isLast = false,
}: {
  title: string;
  children: ReactNode;
  visible?: boolean;
  isLast?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div 
      className="relative flex gap-3 pb-6 last:pb-0"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: DURATION.normal, ease: EASE_OUT_EXPO }}
    >
      {/* Vertical connecting line */}
      {!isLast && (
        <motion.div
          className="absolute left-[7px] top-[18px] w-px bg-slate-200"
          style={{ height: "calc(100% - 12px)", transformOrigin: "top" }}
          aria-hidden
          initial={reduceMotion ? false : { scaleY: 0 }}
          animate={{ scaleY: visible ? 1 : 0 }}
          transition={{ duration: DURATION.fast, delay: visible ? 0.15 : 0, ease: EASE_OUT_EXPO }}
        />
      )}
      {/* Bullet */}
      <motion.div 
        className="relative z-10 flex w-4 shrink-0 items-start justify-center pt-[7px]"
        initial={reduceMotion ? false : { scale: 0 }}
        animate={{ scale: visible ? 1 : 0 }}
        transition={{ duration: DURATION.fast, ease: EASE_OUT_EXPO }}
      >
        <BulletIcon className="text-slate-400" />
      </motion.div>
      {/* Content */}
      <div className="min-w-0 flex-1">
        <h4 className="text-[13.5px] font-semibold leading-snug text-slate-800 sm:text-sm">{title}</h4>
        <div className="mt-2">{children}</div>
      </div>
    </motion.div>
  );
}
