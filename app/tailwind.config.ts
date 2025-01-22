import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "fade-in": "fadeIn 2s ease-in forwards",
        "slide-up": "slideUp 1s ease-out forwards",
        floating: "floating 3s ease-in-out infinite",
        "gradient-move": "gradientMove 6s ease infinite",
        "rocket-launch": "rocketLaunch 1.5s ease-in forwards",
        shake: "shake 0.5s ease-in-out infinite",
        stars: "moveStars 200s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        rocketLaunch: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(-200%)", opacity: 0 },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-5px)" },
          "50%": { transform: "translateX(5px)" },
          "75%": { transform: "translateX(-5px)" },
        },
        moveStars: {
          "0%": {
            backgroundPosition: "0 0, 0 0",
          },
          "100%": {
            backgroundPosition: "10000px 10000px, 20000px 20000px",
          },
        },
      },
      backgroundSize: {
        "gradient-size": "200% 200%",
      },
    },
  },
  plugins: [],
} satisfies Config;
