module.exports = {
	parser: '@javascript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: [],
	extends: ['plugin:prettier/recommended'],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'prettier/prettier': [
			'error',
			{
				semi: false,
				useTabs: true,
				tabWidth: 2,
				singleQuote: true,
				trailingComma: 'all',
				arrowParens: 'avoid',
			},
		],
	},
}
