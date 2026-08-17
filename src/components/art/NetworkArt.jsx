import { communities } from "@/data/communities";

// Hero illustration: a dense research paper becoming a clear, verified summary
// at the centre of a network of community sites.
const ORBIT = { cx: 300, cy: 250, rx: 232, ry: 186 };
const ANGLES = [-150, -90, -30, 30, 90, 150];

const nodes = ANGLES.map((deg, index) => {
  const rad = (deg * Math.PI) / 180;
  return {
    x: ORBIT.cx + ORBIT.rx * Math.cos(rad),
    y: ORBIT.cy + ORBIT.ry * Math.sin(rad),
    community: communities[index],
  };
});

export default function NetworkArt({ className = "" }) {
  return (
    <svg
      viewBox="0 0 600 500"
      className={className}
      role="img"
      aria-label="A research paper being turned into a plain-language summary at the centre of a network of rare disease community sites."
    >
      <defs>
        <linearGradient id="na-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F1F5FC" />
          <stop offset="55%" stopColor="#EEF0FE" />
          <stop offset="100%" stopColor="#EDE9FE" />
        </linearGradient>
        <linearGradient id="na-card" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FBFCFF" />
        </linearGradient>
        <filter id="na-shadow" x="-30%" y="-30%" width="160%" height="170%">
          <feDropShadow
            dx="0"
            dy="10"
            stdDeviation="14"
            floodColor="#0F1C33"
            floodOpacity="0.14"
          />
        </filter>
      </defs>

      <rect x="0" y="0" width="600" height="500" rx="30" fill="url(#na-bg)" />

      {/* orbit */}
      <ellipse
        cx={ORBIT.cx}
        cy={ORBIT.cy}
        rx={ORBIT.rx}
        ry={ORBIT.ry}
        fill="none"
        stroke="#0A2452"
        strokeOpacity="0.1"
        strokeDasharray="3 8"
        strokeLinecap="round"
      />

      {/* spokes, drawn under the summary card */}
      <g stroke="#0A2452" strokeOpacity="0.16" strokeWidth="1.5">
        {nodes.map((node) => (
          <line
            key={`spoke-${node.community.key}`}
            x1={ORBIT.cx}
            y1={ORBIT.cy}
            x2={node.x}
            y2={node.y}
          />
        ))}
      </g>

      {/* incoming research paper */}
      <g transform="translate(78 96) rotate(-9)" filter="url(#na-shadow)">
        <rect width="116" height="146" rx="10" fill="#FFFFFF" />
        <rect
          x="14"
          y="18"
          width="58"
          height="8"
          rx="4"
          fill="#0A2452"
          fillOpacity="0.55"
        />
        <g fill="#0A2452" fillOpacity="0.16">
          {Array.from({ length: 9 }).map((_, index) => (
            <rect
              key={index}
              x="14"
              y={40 + index * 11}
              width={index % 3 === 2 ? 60 : 88}
              height="5"
              rx="2.5"
            />
          ))}
        </g>
      </g>

      <path
        d="M206 178c26 10 40 24 48 40"
        fill="none"
        stroke="#5B2BC9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeDasharray="1 9"
      />
      <path
        d="M247 214l12 8-14 6"
        fill="none"
        stroke="#5B2BC9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* the plain-language summary */}
      <g filter="url(#na-shadow)">
        <rect
          x="172"
          y="166"
          width="256"
          height="168"
          rx="18"
          fill="url(#na-card)"
        />
        <rect x="196" y="194" width="118" height="10" rx="5" fill="#0A2452" />
        <g fill="#0A2452" fillOpacity="0.2">
          <rect x="196" y="222" width="208" height="8" rx="4" />
          <rect x="196" y="240" width="184" height="8" rx="4" />
          <rect x="196" y="258" width="196" height="8" rx="4" />
        </g>
        <g transform="translate(196 284)">
          <rect width="126" height="28" rx="14" fill="#DFF1EA" />
          <path
            d="M17 14.5l4.4 4.4L30 11"
            fill="none"
            stroke="#2E8F76"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="42"
            y="19"
            fontFamily="system-ui, sans-serif"
            fontSize="12"
            fontWeight="600"
            fill="#236B58"
          >
            Expert reviewed
          </text>
        </g>
      </g>

      {/* community nodes */}
      {nodes.map((node) => (
        <g key={node.community.key}>
          <circle
            cx={node.x}
            cy={node.y}
            r="21"
            fill="#FFFFFF"
            stroke={node.community.accent}
            strokeWidth="2.5"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="7.5"
            fill={node.community.accent}
          />
        </g>
      ))}
    </svg>
  );
}
