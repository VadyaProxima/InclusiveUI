import type { Theme } from './theme.types'
import {
	createAvatarTheme,
	createBreadCrumbTheme,
	createButtonTheme,
	createCheckboxTheme,
	createDropdownTheme,
	createInputTheme,
	createModalTheme,
	createRadioTheme,
	createTextAreaTheme,
	createTypographyTheme,
} from './theme.utils'

const breakpoints = {
	tablet: '1024px',
	mobile: '768px',
}

// Можно добавить другие глобальные токены сюда в будущем
export const theme = {
	breakpoints,
}

export const lightTheme: Theme = {
	colorMode: 'light',
	button: createButtonTheme('light'),
	input: createInputTheme('light'),
	checkbox: createCheckboxTheme('light'),
	radio: createRadioTheme('light'),
	typography: createTypographyTheme('light'),
	modal: createModalTheme('light'),
	dropdown: createDropdownTheme('light'),
	textArea: createTextAreaTheme('light'),
	avatar: createAvatarTheme('light'),
	breadcrumb: createBreadCrumbTheme('light'),
}

export const darkTheme: Theme = {
	colorMode: 'dark',
	button: createButtonTheme('dark'),
	input: createInputTheme('dark'),
	checkbox: createCheckboxTheme('dark'),
	radio: createRadioTheme('dark'),
	typography: createTypographyTheme('dark'),
	modal: createModalTheme('dark'),
	dropdown: createDropdownTheme('dark'),
	textArea: createTextAreaTheme('dark'),
	avatar: createAvatarTheme('dark'),
	breadcrumb: createBreadCrumbTheme('dark'),
}

declare module '@emotion/react' {
  export interface Theme {
    colorMode: 'light' | 'dark';
    button: ReturnType<typeof createButtonTheme>;
    input: ReturnType<typeof createInputTheme>;
    checkbox: ReturnType<typeof createCheckboxTheme>;
    radio: ReturnType<typeof createRadioTheme>;
    typography: ReturnType<typeof createTypographyTheme>;
    modal: ReturnType<typeof createModalTheme>;
    dropdown: ReturnType<typeof createDropdownTheme>;
    textArea: ReturnType<typeof createTextAreaTheme>;
    avatar: ReturnType<typeof createAvatarTheme>;
    breadcrumb: ReturnType<typeof createBreadCrumbTheme>;
  }
}
