module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Gilda Display',
      secondary: 'Barlow',
      tertiary: 'Barlow Condensed',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1140px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: {
          DEFAULT: '#a37d4c',
          hover: '#967142',
        },
        gold: {
          500: '#FFD700', // Custom gold color
        },
      },
      backgroundImage: {
        room: "url('/src/assets/img/room.jpg')",
      },
      backgroundImage: {
        'business-bg': "url('/path/to/your/background-image.jpg')",
      },
    },
  },
  plugins: [],
};
