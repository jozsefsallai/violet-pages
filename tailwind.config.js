module.exports = {
  mode: 'jit',

  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    fontFamily: {
      serif: 'butlerlight, "Palatino Linotype", "Book Antiqua", Palatino, serif',
      'serif-alt': 'butlerultralight, "Palatino Linotype", "Book Antiqua", Palatino, serif',
    },

    colors: {
      'black-faint': '#1b1d1c',
      'white-faint': '#ebecf2',
      'white-leading': '#b5b7b7',
      'white-trailing': '#babcbc',

      transparent: 'transparent'
    },
  }
};
