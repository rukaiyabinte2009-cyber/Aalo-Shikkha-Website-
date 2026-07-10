/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#04080f',
        'glaucous': '#507dbc',
        'powder-blue': '#a1c6ea',
        'pale-sky': '#bbd1ea',
        'alabaster-grey': '#dae3e5',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
        'script': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
