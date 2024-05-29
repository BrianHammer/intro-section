// Start tailwind with following cmd:
//
// npx tailwindcss -i ./input.css -o ./output.css --watch
//


/* #################################
### Style guide
#####################################
### Neutral

- Almost White: hsl(0, 0%, 98%)
- Medium Gray: hsl(0, 0%, 41%)
- Almost Black: hsl(0, 0%, 8%)

## Typography

### Body Copy

- Font size (paragraph): 18px

### Font

- Family: [Epilogue](https://fonts.google.com/specimen/Epilogue)
- Weights: 500, 700


*/



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    
    fontFamily: {
      "main": "Epilogue"
    },
    fontWeight: {
      "normal": "500",
      "bold": "700"
    },
    colors: {
      "white": "hsl(0, 0%, 98%)",//almost-white
      "gray": "hsl(0, 0%, 41%)",//medium-gray
      "black": "hsl(0, 0%, 8%)"//almost-black
    },
    extend: {
      screens: {
        "large": "700px"
      },
    },
  },
  plugins: [],
}

