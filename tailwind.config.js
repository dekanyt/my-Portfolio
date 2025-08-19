// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'white-50': 'var(--color-white-50)',
//         'black-50': 'var(--color-black-50)',
//         'black-100': 'var(--color-black-100)',
//         'black-200': 'var(--color-black-200)',
//         'blue-50': 'var(--color-blue-50)',
//         'blue-100': 'var(--color-blue-100)',
//       },
//       fontFamily: {
//         sans: ['var(--font-sans)', 'sans-serif'],
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'white-50': '#d9ecff',
        'black-50': '#1c1c21',
        'black-100': '#0e0e10',
        'black-200': '#282732',
        'blue-50': '#839cb5',
        'blue-100': '#2d2d38',
      },
      fontFamily: {
        // sans: ['Mona Sans', 'sans-serif'],
        sans: ['var(--font-sans)', 'sans-serif']
      },
    },
  },
  plugins: [],
}
