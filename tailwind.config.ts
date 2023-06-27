import type { Config } from "tailwindcss";

const config: Partial<Config> = {
	content: ["./app/**/*.{js,ts,vue}", "./slices/**/*.{js,ts,vue}"],
	theme: {
		fontFamily: {
			sans: '"Libre Franklin Variable", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			display:
				'"Press Start 2P", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
		},
	},
};

export default config;
