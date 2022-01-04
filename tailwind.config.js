module.exports = {
	purge: ['./src/**/*.{js,html}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			borderRadius: {
				fiftyPercentBorderRadius: '50%'
			},
			backgroundColor: {
				searchBarBlack: '#121212',
				black: '#181818',
				lightBlack: '#202020',
				white: '#ffffff',
				darkGrey: '#303030'
			},
			textColor: {
				white: '#ffffff',
				grey: '#827876',
				blue: '#248eff'
			},
			fontFamily: {
				roboto: ['Roboto, sans-serif']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
