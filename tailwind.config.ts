import type { Config } from "tailwindcss";

const config: Partial<Config> = {
	content: ["./app/**/*.{js,ts,vue}", "./slices/**/*.{js,ts,vue}"],
	theme: {
		fontFamily: {
			sans: '"Libre Franklin Variable", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			display:
				'"Carter One", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		},
		colors: {
			none: "none",
			transparent: "transparent",
			black: "rgb(0, 0, 0)",
			white: "rgb(255, 255, 255)",
			indigo: "rgb(85, 81, 255)",
			mantis: "rgb(15, 169, 88)",
			butter: "rgb(249, 215, 98)",
		},
	},
};

export default config;
