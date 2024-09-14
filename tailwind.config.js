/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./ui/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        feu: {
          500: '#ee8130',
        },
        eau: {
          500: '#6390f0',
        },
        electrik: {
          500: '#f7d02c',
        },
        plante: {
          500: '#7ac74c',
        },
        glace: {
          500: '#96d9d6',
        },
        combat: {
          500: '#c22e28',
        },
        poison: {
          500: '#a33ea1',
        },
        sol: {
          500: '#e2bf65',
        },
        vol: {
          500: '#a98ff3',
        },
        psy: {
          500: '#f95587',
        },
        insecte: {
          500: '#a6b91a',
        },
        roche: {
          500: '#b6a136',
        },
        spectre: {
          500: '#735797',
        },
        dragon: {
          500: '#6f35fc',
        },
        tenebre: {
          500: '#705746',
        },
        acier: {
          500: '#b7b7ce',
        },
        fée: {
          500: '#d685ad',
        }
      },
    },
  },
  plugins: [],
}
