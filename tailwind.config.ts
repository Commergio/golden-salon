import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F8F6F2",
        ivory: "#FDFBF8",
        champagne: "#F5EDE3",
        beige: "#D8CBB8",
        gold: "#C9A86A",
        "gold-light": "#E8D5B5",
        "gold-glow": "rgba(201,168,106,0.25)",
        charcoal: "#2C2824",
        espresso: "#3D3429",
        "warm-gray": "#6B6B6B",
      },
      fontFamily: {
        cairo: ["var(--font-cairo)", "sans-serif"],
        tajawal: ["var(--font-tajawal)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      boxShadow: {
        luxury: "0 8px 32px rgba(201, 168, 106, 0.1)",
        "luxury-gold": "0 8px 40px rgba(201, 168, 106, 0.22)",
        glass:
          "0 8px 32px rgba(201, 168, 106, 0.08), inset 0 1px 0 rgba(255,255,255,0.65)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, rgba(201,168,106,0.12) 0%, rgba(216,203,184,0.15) 50%, rgba(248,246,242,0) 100%)",
        "hero-overlay":
          "linear-gradient(180deg, rgba(253,251,248,0.88) 0%, rgba(248,246,242,0.72) 45%, rgba(232,213,181,0.55) 100%)",
        "hero-spotlight":
          "radial-gradient(ellipse 85% 75% at 50% 42%, rgba(253,251,248,0.95) 0%, rgba(248,246,242,0.82) 40%, rgba(232,213,181,0.35) 75%, rgba(201,168,106,0.15) 100%)",
        "hero-edge-glow":
          "linear-gradient(135deg, rgba(201,168,106,0.18) 0%, transparent 40%, transparent 60%, rgba(201,168,106,0.12) 100%)",
        "section-light":
          "linear-gradient(180deg, rgba(253,251,248,1) 0%, rgba(245,237,227,0.95) 50%, rgba(248,246,242,1) 100%)",
        "footer-light":
          "linear-gradient(180deg, rgba(245,237,227,0.98) 0%, rgba(232,213,181,0.4) 100%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(201,168,106,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(201,168,106,0.35)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
