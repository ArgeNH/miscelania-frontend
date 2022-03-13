module.exports = {
   content: [
      "./src/**/*.{js,jsx,ts,tsx}"
   ],
   theme: {
      extend: {
         fontFamily: {
            'poppins': ['Poppins', 'sans-serif']
         },
      },
   },
   plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/typography')
   ],
   darkMode: 'className'
}
