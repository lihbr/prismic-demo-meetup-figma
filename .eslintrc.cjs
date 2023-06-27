module.exports = {
	root: true,
	extends: ["@nuxt/eslint-config", "plugin:prettier/recommended"],
	rules: {
		"no-console": ["warn", { allow: ["info", "warn", "error"] }],
		"no-debugger": "warn",
		"no-undef": "off",
		curly: "error",
		"prefer-const": "error",
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: "*", next: "return" },
		],
		"@typescript-eslint/no-unused-vars": [
			"error",
			{
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_",
			},
		],
		"@typescript-eslint/no-var-requires": "off",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"vue/multi-word-component-names": "off",
	},
};
