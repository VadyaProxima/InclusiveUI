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

//конфиг Для тем (js
// import React from 'react';
// import { ThemeProvider } from '@emotion/react';
// import theme from '../src/styles/theme';

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <Story />
//     </ThemeProvider>
//   ),
// ];
