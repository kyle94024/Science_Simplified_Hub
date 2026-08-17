/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep navy — the spine of the brand. Headings, footer, primary buttons.
        navy: {
          50: "#F1F5FC",
          100: "#E4ECFB",
          200: "#C6D5F0",
          300: "#93AEDF",
          400: "#4E77BE",
          500: "#1F4D97",
          600: "#153B7C",
          700: "#102E63",
          800: "#0C2450",
          900: "#0A1E42",
        },
        // Violet accent — icons, secondary CTA, highlight surfaces.
        violet: {
          50: "#F4F1FE",
          100: "#EDE9FE",
          200: "#DDD5FC",
          300: "#C2B2F8",
          500: "#7C55E8",
          600: "#5B2BC9",
          700: "#4A21A6",
        },
        mint: { 100: "#DFF1EA", 500: "#2E8F76" },
        amber: { 100: "#FCEFCE", 500: "#B98213" },
        ink: "#0F1C33",
        body: "#455066",
        muted: "#6B7793",
        line: "#E5E9F3",
        surface: "#FFFFFF",
        canvas: "#F7F8FC",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1.125rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 28, 51, 0.04), 0 8px 24px -12px rgba(15, 28, 51, 0.14)",
        lift: "0 2px 4px rgba(15, 28, 51, 0.05), 0 18px 40px -18px rgba(15, 28, 51, 0.28)",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
