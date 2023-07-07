/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
  "./src/components/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js",
  "./node_modules/flowbite-react/**/*.js",],
  theme: {
    extend: {
      flex:{
        "0.5":'0.5 1 1'
      },
      colors: {
        "banner-info": "#235B7B",
        "banner-error": "#B20000",
        "banner-success": "#096231",
        "btn-primary":"#004086",
        "membio": {
          "main": "#48576A",
          "header": "#29323D",
          "accent": "#EFF2F7",
          "accent-200": "#F9FAFC",
          "border": "#D3DCE6",
          "base-grey":'#E9E9E9',
          "black-shade":"rgb(39,40,34)"
        },
      },
      fontSize:{
       
          "xxs":"0.625rem"
        
      }
    },
  },
  plugins: [],
}

