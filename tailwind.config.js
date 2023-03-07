module.exports = {
  theme: {
    extend: {
			colors: {
				'myBlue': {
					200:'#e5e5e5',
          500:'#003566',
					900:'#001d3d'
				}
			},
			fontFamily: {
				'Inter': ['Inter', 'sans-serif'],
			},
      spacing: {
        '80': '20rem',
        '108': '27rem',
        '160': '40rem',
      },
      inset: {
        '-16': '-4rem',
      },
      fontSize: {
        xxs: '0.625rem'
      },
      boxShadow: {
        'outline-green': '0 0 0 3px rgba(5,202,160, 0.8)',
      },

    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    backgroundColor: ['responsive', 'hover', 'focus', 'even', 'odd'],
  },
  plugins: []
}
