/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "accordion-collapse": "accordion-collapse 0.2s ease-out",
        "accordion-expand": "accordion-expand 0.2s ease-out",
        "collapsible-collapse": "accordion-collapse 0.2s ease-out",
        "collapsible-expand": "accordion-expand 0.2s ease-out",
        "dialog-in": "dialog-in 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        "dialog-out": "dialog-out 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        "fade-in": "fade-in 150ms ease-in-out",
        "fade-out": "fade-out 150ms ease-in-out",
        "slide-in-from-bottom": "slide-in-from-bottom 100ms ease-out",
        "slide-in-from-left": "slide-in-from-left 100ms ease-out",
        "slide-in-from-right": "slide-in-from-right 100ms ease-out",
        "slide-in-from-top": "slide-in-from-top 100ms ease-out",
      },
      keyframes: {
        "accordion-collapse": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "accordion-expand": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "collapsible-collapse": {
          from: { height: "var(--radix-collapsible-content-height)" },
          to: { height: "0" },
        },
        "collapsible-expand": {
          from: { height: "0" },
          to: { height: "var(--radix-collapsible-content-height)" },
        },
        "dialog-in": {
          from: {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(0.95)",
          },
          to: {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        "dialog-out": {
          from: {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
          to: {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(0.95)",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        "fade-out": {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
        "slide-in-from-bottom": {
          from: { opacity: "0", transform: "translateY(6px) scale(0.975)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-from-left": {
          from: { opacity: "0", transform: "translateX(-6px) scale(0.975)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-from-right": {
          from: { opacity: "0", transform: "translateX(6px) scale(0.975)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-from-top": {
          from: { opacity: "0", transform: "translateY(-6px) scale(0.975)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
