/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			animation: {
				flicker: 'flicker 1.5s infinite alternate',
			},
			keyframes: {
				flicker: {
					'0%, 18%, 22%, 25%, 53%, 57%, 100%': {
						'text-shadow': '1px 0 10px #fc0',
					},
					'20%, 24%': { 'text-shadow': 'none' },
				},
			},
		},
	},
};
