module.exports = {
	presets: [
		'@babel/preset-env',
		'@babel/preset-react',
		'@babel/preset-typescript',
	],
	plugins: [
		[
			'@emotion',
			{
				// Включаем поддержку sourcemaps
				sourceMap: true,
				// Включаем поддержку labels
				labelFormat: '[local]',
				// Включаем поддержку css prop
				cssPropOptimization: true,
			},
		],
	],
}
