/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				pixel: ['"pixel"', "sans-serif"], // 像素字型，與網站一致
			},
		},
	},
	plugins: [],
};
