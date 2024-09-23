/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        md: "1.1rem",
        "5xl": "10rem",
      },
      fontFamily: {
        "sans": ["var(--font-primary)"],
      },
      colors: {
        "primary-blue": "rgb(var(--primary-blue))",
        "secondary-blue": "rgb(var(--secondary-blue))",
        "paled-blue": "rgb(var(--paled-blue))",
        "neat-blue": "rgb(var(--neat-blue))",

        "primary-dark": "rgb(var(--primary-dark))",
        "secondary-dark": "rgb(var(--secondary-dark))",
        "paled-dark": "rgb(var(--paled-dark))",
        "paled": "rgb(107 114 128)",

        "primary-white": "rgb(var(--primary-white))",
        "snow-white": "rgb(var(--snow-white))",
        "secondary-white": "rgb(var(--secondary-white))",
        "neutral": "rgb(var(--white-neutral))",

        "red": "rgb(var(--primary-red))",
        "green": "rgb(var(--primary-green))",
        "yellow": "rgb(var(--primary-yellow))",
        "purple": "rgb(var(--primary-purple))",

        "jazzberry": "rgb(var(--jazzberry-jam))",
        "ruby": "rgb(var(--ruby))",
        "cotton-candy": "rgb(var(--cotton-candy))",
        "thistie": "rgb(var(--thistie))",
        "dark-orchid": "rgb(var(--dark-orchid))",
        "indigo": "rgb(var(--indigo))",
        "deep-purple": "rgb(var(--deep-purple))",
        "blue": "rgb(var(--blue))",
        "light-blue": "rgb(var(--light-blue))",
        "orange": "rgb(var(--primary-orange))",
        "brown": "rgb(var(--primary-brown))",

        "lightGoldenrodYellow": "rgb(var(--unused-components))",
      },
      backgroundImage: {
        "gr-header": "var(--gradient-header)",
        "gr-sider": "var(--gradient-sider)",
        "login": "url(/src/assets/images/login-bg-pattern.svg)",
        "login-side": "url(/src/assets/images/login-side-img.svg)",
        "not-found": "url(/src/assets/images/notfound.svg)",
      },
      transitionProperty: {
        "max-height": "max-height",
      },
    },
  },
  plugins: [],
};

