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
				grey: '#8f8f8f',
				lightGrey: '#313131',
				darkGrey: '#303030'
			},
			textColor: {
				black: '#181818',
				lightBlack: '#202020',
				white: '#ffffff',
				grey: '#8f8f8f',
				lightGrey: '#313131',
				subText: '#827876',
				blue: '#248eff'
			},
			fontFamily: {
				roboto: ['Roboto, sans-serif']
			}
		},

		backgroundImage: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
