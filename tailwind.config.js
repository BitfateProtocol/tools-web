/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#1e293b",
        input: "#1e293b",
        ring: "#cbd5e1",
        background: "#161b22",
        foreground: "#f8fafc",
        primary: {
          DEFAULT: "#B0CB0E",
          foreground: "#f8fafc",
        },
        secondary: {
          DEFAULT: "#006CF3",
          foreground: "#f8fafc",
        },
        destructive: {
          DEFAULT: "#da5b5b",
          foreground: "#f8fafc",
        },
        muted: {
          DEFAULT: "#1e293b",
          foreground: "#94a3b8",
        },
        accent: {
          DEFAULT: "#232b35",
          foreground: "#f8fafc",
        },
        popover: {
          DEFAULT: "#161b22",
          foreground: "#f8fafc",
        },
        card: {
          DEFAULT: "#1a2028",
          foreground: "#f8fafc",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
