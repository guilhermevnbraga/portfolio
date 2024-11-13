import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        'default': '2px 2px 4px rgba(0, 0, 0, 0.5)',
        'md': '3px 3px 6px rgba(0, 0, 0, 0.5)',
        'lg': '4px 4px 8px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  variants: {
    extend: {
      textShadow: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [
    function (api: PluginAPI) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0px 3px 12px rgba(143, 97, 45, 1)',
        },
      }

      api.addUtilities(newUtilities, { respectPrefix: false, respectImportant: false })
    }
  ],
};

export default config;
