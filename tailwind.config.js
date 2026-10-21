/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: { extend: {
    colors: {
      void: '#070617',
      lagoon: '#59f3df',
      tiki: '#ffce72',
      orchid: '#b88aff'
    },
    fontFamily: {
      display: ['Space Grotesk', 'sans-serif'],
      body: ['Inter', 'sans-serif']
    }
  }},
  plugins: []
}
