import { Clock01Icon, MapsLocation01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

const SKILLS = [
  { label: 'Kündigungsschutz', pct: 95 },
  { label: 'Markenrecht Verteidigung', pct: 94 },
  { label: 'Vertragsgestaltung', pct: 92 },
] as const;

export function LawyerMatchCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-24px_rgba(15,23,42,0.15)]">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
        <img
          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
          alt=""
          className="h-full w-full object-cover object-top"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/25 to-transparent" aria-hidden />
        <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white shadow-sm">
          97% Match
        </span>
      </div>

      <div className="p-6 sm:p-7">
        <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">Dr. Evelyn Reed</h3>
        <p className="mt-1 text-sm leading-snug text-slate-500">Senior Counsel, Corporate &amp; IP Litigation</p>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <HugeiconsIcon
              icon={MapsLocation01Icon}
              size={14}
              strokeWidth={2}
              className="shrink-0 text-slate-400"
              aria-hidden
            />
            Berlin, DE
          </span>
          <span className="inline-flex items-center gap-1.5">
            <HugeiconsIcon
              icon={Clock01Icon}
              size={14}
              strokeWidth={2}
              className="shrink-0 text-slate-400"
              aria-hidden
            />
            Innerhalb 24h
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800 ring-1 ring-emerald-100">
            Dispute Resolution
          </span>
          <span className="rounded-full bg-sky-50 px-2.5 py-1 text-xs font-medium text-sky-800 ring-1 ring-sky-100">
            Startups
          </span>
        </div>

        <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Expertise signal</p>
          <ul className="space-y-3.5">
            {SKILLS.map(({ label, pct }) => (
              <li key={label}>
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-medium text-slate-700">{label}</span>
                  <span className="tabular-nums text-slate-500">{pct}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-linear-to-r from-emerald-500 to-emerald-400"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
