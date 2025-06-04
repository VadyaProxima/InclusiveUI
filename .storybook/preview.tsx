import { ThemeProvider } from '@emotion/react'
import { Preview } from '@storybook/react'
import { lightTheme } from '../src/theme'

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
	decorators: [
		Story => (
			<ThemeProvider theme={lightTheme}>
				<Story />
			</ThemeProvider>
		),
	],
	tags: ['autodocs'],
}

export default preview
