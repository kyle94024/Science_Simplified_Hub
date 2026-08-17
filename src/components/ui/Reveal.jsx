// Fades content up as it scrolls into view.
//
// This is a scroll-driven CSS animation (see `.reveal` in globals.css), not a
// JavaScript observer: browsers without `animation-timeline: view()` — and
// anyone who prefers reduced motion — simply get the content, visible, with no
// way for a failed script to leave the page blank.
//
// `delay` is in milliseconds for readability at the call site; it is converted
// into a small offset in the scroll range so staggered items land in sequence.
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <div
      className={`reveal ${className}`}
      style={delay ? { "--reveal-offset": `${delay / 20}%` } : undefined}
    >
      {children}
    </div>
  );
}
