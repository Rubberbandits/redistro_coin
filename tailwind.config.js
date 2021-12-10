module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			spacing: {
				"128": "32rem",
				'144': '36rem',
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('daisyui'),
	],
}