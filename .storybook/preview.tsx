import { ThemeProvider } from '@emotion/react'
import { Preview } from '@storybook/react'
import React from 'react'
import { darkTheme, lightTheme } from '../src/theme'

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		actions: { argTypesRegex: '^on[A-Z].*' },
	},
	globalTypes: {
		theme: {
			name: 'Theme',
			description: 'Global theme for components',
			defaultValue: 'light',
			toolbar: {
				icon: 'circlehollow',
				items: [
					{ value: 'light', icon: 'circlehollow', title: 'Light' },
					{ value: 'dark', icon: 'circle', title: 'Dark' },
				],
				showName: true,
			},
		},
	},
	decorators: [
		(Story, context) => {
			const theme = context.globals.theme === 'dark' ? darkTheme : lightTheme
			return (
				<ThemeProvider theme={theme}>
					<Story />
				</ThemeProvider>
			)
		},
	],
	tags: ['autodocs'],
}

export default preview
