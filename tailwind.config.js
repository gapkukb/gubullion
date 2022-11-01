const spacing = {
	xs: "8px",
	sm: "16px",
	md: "24px",
	lg: "32px",
	xl: "40px",
};
for (let i = 0; i < 60; i++) {
	spacing[i] = i + "px";
}
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/pages/**/*.{vue,tsx,ts,jsx,js}", "./src/components/**/*.{vue,tsx,ts,jsx,js}"],
	theme: {
		container: {
			center: true,
		},
		spacing,
		fontSize: ({ theme }) => theme("spacing"),
		extend: {
			colors: {
				"white-10": "rgba(255,255,255,0.1)",
				"white-20": "rgba(255,255,255,0.2)",
				"white-30": "rgba(255,255,255,0.3)",
				"white-40": "rgba(255,255,255,0.4)",
				"white-50": "rgba(255,255,255,0.5)",
				"white-60": "rgba(255,255,255,0.6)",
				"white-70": "rgba(255,255,255,0.7)",
				"white-80": "rgba(255,255,255,0.8)",
				"white-90": "rgba(255,255,255,0.9)",
				"black-10": "rgba(0,0,0,0.1)",
				"black-20": "rgba(0,0,0,0.2)",
				"black-30": "rgba(0,0,0,0.3)",
				"black-40": "rgba(0,0,0,0.4)",
				"black-50": "rgba(0,0,0,0.5)",
				"black-60": "rgba(0,0,0,0.6)",
				"black-70": "rgba(0,0,0,0.7)",
				"black-80": "rgba(0,0,0,0.8)",
				"black-90": "rgba(0,0,0,0.9)",
			},
		},
	},
	variants: {
		container: [],
	},
	plugins: [],
};
