import {
  BalanceScaleIcon,
  BookOpen01Icon,
  CheckmarkCircle02Icon,
  File02Icon,
  LegalHammerIcon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { motion, useReducedMotion } from "motion/react";
import { DURATION, EASE_OUT_EXPO, STAGGER } from "../lib/motion-config";

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
    </svg>
  );
}

function BrainIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 4.5a2.5 2.5 0 0 0-4.96-.46 2.5 2.5 0 0 0-1.98 3 2.5 2.5 0 0 0-1.32 4.24 3 3 0 0 0 .34 5.58 2.5 2.5 0 0 0 2.96 3.08A2.5 2.5 0 0 0 12 19.5a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 12 4.5" />
      <path d="M15.7 11.4a.5.5 0 0 0-1 0l-.2 2.4a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5l-.2-2.4a.5.5 0 0 0-1 0" />
      <path d="M12 19.5v-15" />
    </svg>
  );
}

const parallelTasks = [
  {
    icon: BalanceScaleIcon,
    label: "Case Research",
    bgColor: "bg-sky-600",
  },
  {
    icon: BookOpen01Icon,
    label: "Statute Lookup",
    bgColor: "bg-slate-700",
  },
  {
    icon: LegalHammerIcon,
    label: "Precedent Analysis",
    bgColor: "bg-amber-500",
  },
  {
    icon: File02Icon,
    label: "Draft Template",
    bgColor: "bg-rose-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER.slow,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE_OUT_EXPO,
    },
  },
};

const taskCardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE_OUT_EXPO,
    },
  },
};

export function AILegalWorkflowMock() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto mt-10 max-w-2xl px-4 pb-4">
      {/* Dotted background pattern */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-2xl"
        style={{
          backgroundImage: `radial-gradient(circle, #c9c9c9 1.2px, transparent 1.2px)`,
          backgroundSize: "18px 18px",
          opacity: 0.7,
        }}
        aria-hidden
      />

      <motion.div 
        className="relative flex flex-col items-center"
        initial={reduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Top prompt card */}
        <motion.div 
          className="inline-flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white px-5 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          variants={itemVariants}
        >
          <motion.span 
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-pink-100"
            animate={reduceMotion ? {} : { 
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: EASE_OUT_EXPO,
            }}
          >
            <SparkleIcon className="text-pink-500" />
          </motion.span>
          <span className="text-[15px] font-medium text-slate-800">
            Draft cease &amp; desist response
          </span>
        </motion.div>

        {/* Connector down to orchestrator */}
        <motion.div 
          className="h-6 w-0 border-l-2 border-dashed border-slate-400"
          variants={itemVariants}
        />

        {/* AI Orchestrator card */}
        <motion.div 
          className="w-full max-w-sm overflow-hidden rounded-2xl bg-linear-to-br from-violet-600 via-indigo-600 to-blue-600 p-4 shadow-lg shadow-indigo-500/20"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3">
            <motion.div 
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm"
              animate={reduceMotion ? {} : { 
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <BrainIcon className="text-white" />
            </motion.div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                AI Orchestrator
              </p>
              <p className="text-sm font-medium text-white">
                Executing parallel tasks...
              </p>
            </div>
          </div>
        </motion.div>

        {/* Connector from orchestrator - branching */}
        <motion.div 
          className="h-4 w-0 border-l-2 border-dashed border-slate-400"
          variants={itemVariants}
        />
        <motion.div 
          className="w-[90%] border-t-2 border-dashed border-slate-400"
          variants={itemVariants}
        />
        <motion.div 
          className="flex w-[90%] justify-between px-2"
          variants={itemVariants}
        >
          <div className="h-6 w-0 border-l-2 border-dashed border-slate-400" />
          <div className="h-6 w-0 border-l-2 border-dashed border-slate-400" />
          <div className="h-6 w-0 border-l-2 border-dashed border-slate-400" />
          <div className="h-6 w-0 border-l-2 border-dashed border-slate-400" />
        </motion.div>

        {/* Parallel task cards */}
        <motion.div 
          className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: STAGGER.fast,
              },
            },
          }}
        >
          {parallelTasks.map((task, index) => (
            <motion.div
              key={task.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-200/80 bg-white px-3 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              variants={taskCardVariants}
              whileHover={reduceMotion ? {} : { 
                y: -2, 
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                transition: { duration: DURATION.fast, ease: EASE_OUT_EXPO }
              }}
            >
              <motion.span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${task.bgColor} text-white`}
                animate={reduceMotion ? {} : {
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              >
                <HugeiconsIcon icon={task.icon} size={16} strokeWidth={2} aria-hidden />
              </motion.span>
              <span className="text-center text-xs font-medium text-slate-700">
                {task.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Connector from tasks to output */}
        <motion.div 
          className="flex w-[90%] justify-between px-2"
          variants={itemVariants}
        >
          <div className="h-6 w-0 border-l-2 border-dashed border-slate-400" />
          <div className="h-6 w-0 border-l-2 border-dashed border-slate-400" />
          <div className="h-6 w-0 border-l-2 border-dashed border-slate-400" />
          <div className="h-6 w-0 border-l-2 border-dashed border-slate-400" />
        </motion.div>
        <motion.div 
          className="w-[90%] border-t-2 border-dashed border-slate-400"
          variants={itemVariants}
        />
        <motion.div 
          className="h-4 w-0 border-l-2 border-dashed border-slate-400"
          variants={itemVariants}
        />

        {/* Output/Analysis result card */}
        <motion.div 
          className="flex w-full max-w-sm items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
          variants={itemVariants}
          whileHover={reduceMotion ? {} : { 
            scale: 1.01,
            transition: { duration: DURATION.fast, ease: EASE_OUT_EXPO }
          }}
        >
          <motion.span 
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white"
            animate={reduceMotion ? {} : {
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              ease: EASE_OUT_EXPO,
            }}
          >
            <HugeiconsIcon icon={CheckmarkCircle02Icon} size={16} strokeWidth={2} aria-hidden />
          </motion.span>
          <div>
            <p className="text-sm font-semibold text-emerald-800">Analysis Complete</p>
            <p className="text-xs text-emerald-600">Ready for review</p>
          </div>
          <span className="ml-auto rounded-md bg-emerald-600 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Done
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
