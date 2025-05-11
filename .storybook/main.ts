import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	// Путь к файлам с историями
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

	addons: [
		// Добавляет навигацию между историями
		'@storybook/addon-links', // Набор полезных инструментов
		'@storybook/addon-essentials', // Анализ доступности компонентов
		'@storybook/addon-a11y',
		'@chromatic-com/storybook',
	],

	framework: {
		name: '@storybook/react-vite',
		options: {},
	},

	typescript: {
		// Включаем проверку типов
		check: true,
		// Используем react-docgen-typescript для лучшей поддержки TypeScript
		reactDocgen: 'react-docgen-typescript',
		reactDocgenTypescriptOptions: {
			// Должно решить проблему с импортами типов
			shouldExtractLiteralValuesFromEnum: true,
			// Правильная обработка пропсов
			propFilter: prop => {
				if (prop.parent) {
					return !prop.parent.fileName.includes('node_modules')
				}
				return true
			},
		},
	},

	docs: {
		autodocs: true,
	},
}

export default config
