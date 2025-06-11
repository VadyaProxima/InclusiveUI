import { Global, ThemeProvider, css } from '@emotion/react'
import { Preview } from '@storybook/react'
import React from 'react'
import '../src/styles/global.css'
import { darkTheme, lightTheme } from '../src/theme'

const globalStyles = css`
	.input-full-width {
		width: 100% !important;
	}
`

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
					<Global styles={globalStyles} />
					<Story />
				</ThemeProvider>
			)
		},
	],
	tags: ['autodocs'],
}

export default preview
