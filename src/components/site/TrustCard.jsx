import { ShieldCheck } from "lucide-react";

import { site } from "@/data/site";

// The expert-review trust claim, kept identical wherever it appears. Copy
// lives in src/data/site.js so the home and about pages can never drift.
export default function TrustCard({ className = "" }) {
  return (
    <div
      className={`flex max-w-xl items-start gap-4 rounded-2xl border border-line bg-white/90 p-5 shadow-card ${className}`}
    >
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
        <ShieldCheck className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <div>
        <p className="font-display font-semibold leading-snug text-navy-800">
          {site.trust.lead}
        </p>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {site.trust.support}
        </p>
      </div>
    </div>
  );
}
