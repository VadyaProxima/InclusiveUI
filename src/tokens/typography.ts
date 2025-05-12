import { colors } from './colors'

export const fontFamily = {
	sans: 'Open Sans, sans-serif',
	serif: 'Open Sans, sans-serif',
	mono: 'Open Sans, sans-serif',
}

export const fontSizes = {
	desktop: {
		heading1: '4rem',
		heading2: '3.5rem',
		heading3: '3rem',
		heading4: '2.5rem',
		heading5: '2rem',
		heading6: '1.5rem',
		bodyL: '1.375rem',
		bodyM: '1.25rem',
		bodyS: '1.125rem',
		paragraph: '1rem',
		label: '0.875rem',
	},
	tablet: {
		heading1: '3.5rem',
		heading2: '3rem',
		heading3: '2.5rem',
		heading4: '2.25rem',
		heading5: '1.75rem',
		heading6: '1.375rem',
		bodyL: '1.25rem',
		bodyM: '1.125rem',
		bodyS: '1rem',
		paragraph: '0.9375rem',
		label: '0.875rem',
	},
	mobile: {
		heading1: '3rem',
		heading2: '2.5rem',
		heading3: '2rem',
		heading4: '1.75rem',
		heading5: '1.5rem',
		heading6: '1.25rem',
		bodyL: '1.125rem',
		bodyM: '1rem',
		bodyS: '0.875rem',
		paragraph: '0.875rem',
		label: '0.875rem',
	},
}

export const lineHeights = {
	desktop: {
		heading1: '1.25',
		heading2: '1.29',
		heading3: '1.33',
		heading4: '1.4',
		heading5: '1.38',
		heading6: '1.5',
		bodyL: '1.45',
		bodyM: '1.5',
		bodyS: '1.56',
		paragraph: '1.5',
		label: '1.43',
	},
	tablet: {
		heading1: '1.29',
		heading2: '1.33',
		heading3: '1.4',
		heading4: '1.33',
		heading5: '1.43',
		heading6: '1.45',
		bodyL: '1.5',
		bodyM: '1.56',
		bodyS: '1.5',
		paragraph: '1.47',
		label: '1.43',
	},
	mobile: {
		heading1: '1.33',
		heading2: '1.4',
		heading3: '1.38',
		heading4: '1.43',
		heading5: '1.5',
		heading6: '1.5',
		bodyL: '1.56',
		bodyM: '1.5',
		bodyS: '1.43',
		paragraph: '1.43',
		label: '1.43',
	},
}

export const fontWeights = {
	heading1: '700',
	heading2: '700',
	heading3: '700',
	heading4: '600',
	heading5: '600',
	heading6: '400',
	body: '400',
	bodyLight: '300',
	bodyBold: '700',
	paragraph: '400',
	paragraphBold: '700',
	label: '500',
	labelBold: '700',
}

export const letterSpacing = {
	default: '0',
}

export const textColors = {
	light: {
		Base: colors.light.gray[1000],
		Secondary: colors.light.gray[900],
		Tertiary: colors.light.gray[800],
		Quaternary: colors.light.gray[700],
		LightSolid: colors.light.neutral.white,
		Heading: colors.light.gray[1000],
		Label: colors.light.gray[900],
		Description: colors.light.gray[700],
		Placeholder: colors.light.gray[600],
		Disabled: colors.light.gray[500],
	},
	dark: {
		Base: colors.dark.gray[1000],
		Secondary: colors.dark.gray[900],
		Tertiary: colors.dark.gray[800],
		Quaternary: colors.dark.gray[700],
		LightSolid: colors.dark.neutral.white,
		Heading: colors.dark.gray[1000],
		Label: colors.dark.gray[900],
		Description: colors.dark.gray[700],
		Placeholder: colors.dark.gray[600],
		Disabled: colors.dark.gray[500],
	},
}
