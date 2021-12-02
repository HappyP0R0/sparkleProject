module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        base:{
          1:"#2F4858",
          2:"#FFA800",
          3:"#FFCB66",
        }
      },
      fontFamily:{
        mons: ["Montserrat"],
        oswald: ["Oswald"],
      },
      fontSize:{
        'h3txt':['1.5rem', {lineHeight:'2.223rem'}],
        'h2txt':['1.875rem', {lineHeight:'2.779rem'}]
      },
      width:{
        'spec':'34%',
      },
      spacing:{
        18:'4.5rem',
        22:'5.5rem'
      }
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
