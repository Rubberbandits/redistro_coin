module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			zIndex: {
				'1000': '1000',
			},
			spacing: {
				"128": "32rem",
				'144': '36rem',
			},
			backgroundImage: {
				'hero': "url('/expand.jpg')",
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
	daisyui: {
		themes: [
			"halloween"
		]
	}
}
