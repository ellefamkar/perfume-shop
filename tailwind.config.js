module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
      extend: {
          fontFamily : {
            'serif' : ['Highclass'],
            'sans' : ['Ostrich'],
          },
          colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'lightCream': '#D8BAA4',
            'extraLightCream': '#F2E9D8',
            'lightPink': '#FCCECB',
            'darkGold': '#C3A167',
            'lightGold': '#EFB949',
            'soilish': '#E0D3C4',
            'darkBg': '#1B212D',
            'lightWhite': '#EBEBED',
          },
          screens: {
            'xs': '390px',
          },
      },
    },
    plugins: [
      require("@tailwindcss/forms")({
        strategy: 'class',
      }),
    ],
  }