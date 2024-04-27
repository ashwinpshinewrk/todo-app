/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors : {
      'btn-pressed-color' : '#f65274',
      'btn-hover-color' : '#ff608b',
      'btn-released-color' : '#f2f2f2',
      'input-text-color':'#645e60',
      'input-box' : '#c5c5c5',
      'white' : '#ffffff',
    },
    fontFamily: {
      'poppins' : ["Poppins",'sans-serif']
    },
    extend: {}
  },
  plugins: []
};