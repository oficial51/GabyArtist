/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        morado: 'RGB(82, 53, 75)',
        negromorado: '#0e0d15',
        skin: '#eec7b7',
        fillin: '#c391c5',
        negroraro: 'RGB(10,9,30)',
        contrastecar: '#4E180C '
      },
    },
  },
  plugins: [],
}