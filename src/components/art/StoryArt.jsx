// Line-art companion to the founder story: a family looking out at what's ahead.
//
// Geometry note: each figure's shoulder curve peaks exactly at the bottom of
// its head circle, so the two read as one silhouette rather than a circle
// floating above an arch.
export default function StoryArt({ className = "" }) {
  return (
    <svg
      viewBox="0 0 520 380"
      className={className}
      role="img"
      aria-label="Line drawing of three people sitting together, looking out over mountains at sunrise."
      fill="none"
      stroke="#153B7C"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* sun */}
      <circle cx="298" cy="104" r="44" strokeOpacity="0.7" />
      <g strokeOpacity="0.35">
        <path d="M298 40V22M298 168v18M232 104h-18M382 104h18" />
        <path d="M251 57 240 46M345 57l11-11M251 151l-11 11M345 151l11 11" />
      </g>

      {/* horizon and ranges */}
      <path d="M26 216h468" strokeOpacity="0.22" />
      <path
        d="M34 216l46-52 30 34 26-30 40 48"
        strokeOpacity="0.4"
      />
      <path
        d="M330 216l44-50 32 36 28-30 42 44"
        strokeOpacity="0.4"
      />

      {/* rolling ground behind the group */}
      <path d="M26 268c58-16 106-16 150 0" strokeOpacity="0.2" />
      <path d="M344 268c58-16 106-16 150 0" strokeOpacity="0.2" />

      {/* three figures, seen from behind */}
      <g>
        <circle cx="170" cy="262" r="22" />
        <path d="M128 340c0-31 19-56 42-56s42 25 42 56" />
      </g>
      <g>
        <circle cx="260" cy="244" r="25" />
        <path d="M212 340c0-39 21-71 48-71s48 32 48 71" />
      </g>
      <g>
        <circle cx="350" cy="262" r="22" />
        <path d="M308 340c0-31 19-56 42-56s42 25 42 56" />
      </g>

      {/* arms around each other */}
      <path
        d="M204 316c8-8 17-11 26-9M316 316c-8-8-17-11-26-9"
        strokeOpacity="0.6"
      />

      {/* ground */}
      <path d="M74 340h372" strokeOpacity="0.3" />

      {/* birds */}
      <g strokeOpacity="0.4">
        <path d="M104 92c6-7 11-7 15 0 4-7 9-7 15 0" />
        <path d="M142 64c4-5 8-5 11 0 3-5 7-5 10 0" />
      </g>
    </svg>
  );
}
