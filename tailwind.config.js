module.exports = {
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],

  purge: [
    "./views/*.vue", 
    "./components/*.vue"
  ],


  theme: {
    extend: {
			colors: {
				'myBlue': {
					200:'#d1deee',
					900:'#21243D'
				}
			},
			fontFamily: {
				'Inter': ['Inter', 'sans-serif'],
			}
  	},
  	plugins: [],
	}
}
