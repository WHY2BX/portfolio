import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-surface": "#1a1c1d",
        "on-secondary-fixed-variant": "#454747",
        "on-primary-fixed-variant": "#474747",
        "secondary-fixed-dim": "#c6c6c7",
        "tertiary": "#000000",
        "on-tertiary-fixed-variant": "#46464e",
        "on-tertiary-container": "#83838c",
        "on-primary-fixed": "#1b1b1b",
        "on-surface-variant": "#4c4546",
        "surface-bright": "#f9f9fa",
        "surface": "#f9f9fa",
        "primary": "#000000",
        "secondary-fixed": "#e2e2e2",
        "on-tertiary": "#ffffff",
        "on-secondary": "#ffffff",
        "outline": "#7e7576",
        "inverse-surface": "#2f3132",
        "surface-tint": "#5e5e5e",
        "surface-container-low": "#f3f3f4",
        "primary-fixed-dim": "#c6c6c6",
        "on-secondary-container": "#616363",
        "on-error": "#ffffff",
        "tertiary-container": "#1a1b22",
        "secondary": "#5d5f5f",
        "surface-container-lowest": "#ffffff",
        "primary-fixed": "#e2e2e2",
        "on-primary-container": "#848484",
        "inverse-primary": "#c6c6c6",
        "surface-container-highest": "#e2e2e3",
        "surface-dim": "#dadadb",
        "on-tertiary-fixed": "#1a1b22",
        "inverse-on-surface": "#f0f1f2",
        "tertiary-fixed": "#e3e1ec",
        "primary-container": "#1b1b1b",
        "error": "#ba1a1a",
        "secondary-container": "#dfe0e0",
        "on-primary": "#ffffff",
        "on-error-container": "#93000a",
        "background": "#f9f9fa",
        "surface-container-high": "#e8e8e9",
        "tertiary-fixed-dim": "#c6c5cf",
        "surface-variant": "#e2e2e3",
        "outline-variant": "#cfc4c5",
        "on-secondary-fixed": "#1a1c1c",
        "error-container": "#ffdad6",
        "surface-container": "#eeeeef",
        "on-background": "#1a1c1d"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "margin-desktop": "64px",
        "unit": "4px",
        "card-padding": "32px",
        "gutter": "24px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "body-sm": ["var(--font-hanken)"],
        "headline-lg": ["var(--font-hanken)"],
        "label-caps": ["var(--font-hanken)"],
        "body-lg": ["var(--font-hanken)"],
        "title-md": ["var(--font-hanken)"],
        "headline-lg-mobile": ["var(--font-hanken)"],
        "display-lg": ["var(--font-hanken)"]
      },
      fontSize: {
        "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
        "headline-lg": ["32px", { "lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
        "label-caps": ["12px", { "lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "700" }],
        "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "title-md": ["18px", { "lineHeight": "24px", "fontWeight": "600" }],
        "headline-lg-mobile": ["24px", { "lineHeight": "32px", "fontWeight": "700" }],
        "display-lg": ["48px", { "lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "800" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
export default config;