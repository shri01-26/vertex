/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        brand: {
          light: "#44BBFF",
          DEFAULT: "#038FDF",
          dark: "#1A6EB9",
          soft: "#EAF7FF",
          pale: "#F5FAFF",
        },

        glass: {
          white: "rgba(255, 255, 255, 0.55)",
          blue: "rgba(68, 187, 255, 0.14)",
          border: "rgba(255, 255, 255, 0.65)",
        },

        dark: {
          DEFAULT: "#0F172A",
          lighter: "#1E293B",
          muted: "#64748B",
        },
      },

      fontFamily: {
        sans: ["Inter", "Roboto", "sans-serif"],
      },

      boxShadow: {
        glass: "0 24px 70px rgba(3, 143, 223, 0.14)",
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)",
        glow: "0 0 40px rgba(68, 187, 255, 0.28)",
      },

      borderRadius: {
        glass: "28px",
        soft: "22px",
      },

      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #44BBFF 0%, #038FDF 55%, #1A6EB9 100%)",
        "glass-gradient": "linear-gradient(135deg, rgba(255,255,255,0.66), rgba(232,246,255,0.36))",
        "page-gradient": "linear-gradient(135deg, #F8FBFF 0%, #EEF8FF 48%, #FFFFFF 100%)",
      },
    },
  },

  plugins: [],
};