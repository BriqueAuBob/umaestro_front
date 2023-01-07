import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "app.vue",
  ],

  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "7rem",
          "2xl": "8rem",
        },
      },
    },
  },
};
