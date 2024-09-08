/** @type {import('tailwindcss').Config} */

const { space } = require("postcss/lib/list");

/** @type {import('output.css').Config} */
module.exports = {
  content: [
    'index.html',
    './assest/component/aboutme.html',
    './assest/component/skills.html',
    './assest/component/gamepage.html',
    './assest/component/page2.html',
    ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      sm2: { max: "767px" },
    },

    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      lightmod: "#fff",
      main: {
        100: "#6CEAD1",
        200: "#41E4C4",
        300: "#1ED6B2",
        400: "#18AB8E",
        500: "#148F77",
        600: "#148871",
        700: "#14846E",
        800: "#0E6C5A",
        900: "#0B5144",
      },
      second: {
        100: "#2D2D2D",
      },
      red: {
        red: "#A10000",
      },
      green: {
        green: "#0B8700",
      },
      gray: {
        100: "#6D6D6D",
        200: "#585858",
        300: "#4E4E4E",
        400: "#484848",
        500: "#424242",
        600: "#3A3A3A",
        700: "#2D2D2D",
        800: "#1D1D1D",
        900: "#111111",
      },
      opacity: {
        0: "0",
        20: "0.2",
        40: "0.4",
        60: "0.6",
        80: "0.8",
        100: "1",
      },

      // ...
    },
    extend: {
      fontFamily: {
        yekanBold: "Yekan-bold",
        yekan: "Yekan-light", // Adds a new `font-display` class
      },
      zIndex: {
        0: "0",
        1: "1",
      },
    },
    gap: {
      0: "0",
      0.5: "2.5px",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "30px",
      7: "40px",
      8: "45px",
      9: "50px",
      50: "500px",
      
    },
    height: {
      0: "0",
      0.1: "10px",
      0.2: "20px",
      0.25: "25px",
      0.3: "30px",
      0.36: "36px",
      0.4: "40px",
      0.45: "45px",
      0.5: "50px",
      0.6: "60px",
      0.65: "65px",
      0.7: "70px",
      1: "100px",
      2: "150px",
      2.5:"200px",
      3: "250px",
      3.5: "300px",
      4: "350px",
      5: "400px",
      6: "500px",
      7: "600px",
      8: "700px",
      full: "100%",
      "full-45": "45%",
      "full-50": "50%",
      "full-70": "70%",
      "full-80": "80%",
      "full-85": "85%",
      "full-90": "90%",
      "full-95": "95%",
    },
    width: {
      0: "0",
      0.25: "25px",
      0.36: "30px",
      0.45: "45px",
      0.5: "50px",
      0.6: "60px",
      0.7: "70px",
      0.75: "75px",
      1: "100px",
      2: "150px",
      3: "250px",
      3.5: "300px",
      4: "350px",
      5: "400px",
      6: "500px",
      7: "600px",
      8: "700px",
      full: "100%",
      "full-10": "10%",
      "full-15": "15%",
      "full-20": "20%",
      "full-25": "25%",
      "full-30": "30%",
      "full-32": "32%",
      "full-35": "35%",
      "full-40": "40%",
      "full-45": "45%",
      "full-50": "50%",
      "full-55": "55%",
      "full-60": "60%",
      "full-70": "70%",
      "full-75": "75%",
      "full-80": "80%",
      "full-85": "85%",
      "full-90": "90%",
      "full-95": "95%",
    },
    spacing: {
      0: "0",
      0.5: "2px",
      1: "5px",
      1.5: "7px",
      2: "10px",
      3: "15px",
      4: "20px",
      4.5: "40px",
      5: "50px",
      6: "60px",
      7: "70px",
      8: "80px",
      9: "90px",
      10: "100px",
      50: "500px",
    },
    borderRadius: {
      "sm-m-0": "2px",
      "sm-m-1": "5px",
      "sm-1": "10px",
      sm: "20px",
      md: "30px",
      minicircle: "150px",
    },
    fontSize: {
      "sm-1": "14px",
      16: "16px",
      sm: "20px",
      sm50: "25px",
      md: "30px",
    },
    inset: {
      "f-0": "0",
      "f-10": "-10px",
      "f-15": "-15px",
      "f-20": "-20px",
      "f-25": "-25px",
      "f-30": "-30px",
      "f-40": "-40px",
      "f-45": "-45px",
      "f-50": "-50px",
      "f-55": "-55px",
      "f-60": "-60px",
      "f-65": "-65px",
      "f-70": "-70px",
      "f-75": "-75px",
      "t-10": "10px",
      "t-15": "15px",
      "t-20": "20px",
      "t-25": "25px",
      "t-30": "30px",
      "t-50": "50px",
      "t-55": "55px",
      "t-65": "65px",
      "t-70": "70px",
      "t-75": "75px",
    },
  },

  plugins: [],
};
