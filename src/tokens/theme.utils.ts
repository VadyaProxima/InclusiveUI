import { colors } from './colors'
import type {
	AvatarTheme,
	BreadCrumbTheme,
	ButtonTheme,
	CheckboxThemeToken,
	ColorMode,
	DropdownThemeToken,
	InputThemeToken,
	ModalThemeToken,
	RadioThemeToken,
	SemanticColor,
	TextAreaThemeToken,
	TypographyTheme,
} from './theme.types'

const createSemanticColor = (
	bg?: string,
	text?: string,
	border?: string,
	shadow?: string,
	placeholder?: string,
	label?: string
): SemanticColor => ({
	...(bg && { bg }),
	...(text && { text }),
	...(border && { border }),
	...(shadow && { shadow }),
	...(placeholder && { placeholder }),
	...(label && { label }),
})

export const createButtonTheme = (colorMode: ColorMode): ButtonTheme => {
	const palette = colors[colorMode]

	return {
		primary: {
			default: createSemanticColor(
				palette.blue[600],
				palette.gray[50],
				undefined,
				palette.gray[colorMode === 'light' ? 200 : 800]
			),
			hover: createSemanticColor(palette.blue[600], palette.gray[1000]),
			active: createSemanticColor(palette.blue[700], palette.gray[50]),
			focus: createSemanticColor(
				palette.blue[500],
				palette.gray[50],
				undefined,
				palette.blue[200]
			),
			disabled: createSemanticColor(palette.gray[200], palette.gray[900]),
		},
		default: {
			default: createSemanticColor(palette.gray[100], palette.gray[900]),
			hover: createSemanticColor(
				palette.gray[100],
				palette.gray[900],
				palette.blue[500]
			),
			active: createSemanticColor(
				palette.gray[100],
				palette.gray[900],
				palette.blue[700]
			),
			focus: createSemanticColor(
				palette.gray[100],
				palette.gray[900],
				palette.blue[500],
				palette.blue[200]
			),
			disabled: createSemanticColor(palette.gray[200], palette.gray[900]),
		},
		danger: {
			default: createSemanticColor(
				palette.red[600],
				palette.gray[50],
				undefined,
				palette.gray[colorMode === 'light' ? 200 : 800]
			),
			hover: createSemanticColor(palette.red[500], palette.gray[1000]),
			active: createSemanticColor(palette.red[700], palette.gray[50]),
			focus: createSemanticColor(
				palette.red[500],
				palette.gray[1000],
				undefined,
				palette.red[200]
			),
			disabled: createSemanticColor(palette.gray[200], palette.gray[900]),
		},
		text: {
			default: createSemanticColor('transparent', palette.gray[1000]),
			hover: createSemanticColor(
				palette.gray[100],
				palette.gray[1000],
				undefined,
				palette.gray[colorMode === 'light' ? 200 : 800]
			),
			active: createSemanticColor(palette.gray[300], palette.gray[1000]),
			focus: createSemanticColor(
				palette.gray[100],
				palette.gray[1000],
				undefined,
				colorMode === 'light'
					? 'rgba(0, 0, 0, 0.25)'
					: 'rgba(255, 255, 255, 0.25)'
			),
			disabled: createSemanticColor(palette.gray[200], palette.gray[900]),
		},
	}
}

export const createInputTheme = (colorMode: ColorMode): InputThemeToken => {
	const palette = colors[colorMode]

	return {
		default: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.gray[200],
			undefined,
			palette.gray[500]
		),
		hover: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.gray[300]
		),
		focus: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.blue[500],
			palette.blue[200]
		),
		disabled: createSemanticColor(
			palette.gray[100],
			palette.gray[400],
			palette.gray[200]
		),
		error: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.red[500],
			palette.red[200]
		),
	}
}

export const createCheckboxTheme = (
	colorMode: ColorMode
): CheckboxThemeToken => {
	const palette = colors[colorMode]

	return {
		default: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.gray[200]
		),
		hover: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.blue[500]
		),
		checked: createSemanticColor(palette.blue[500], palette.gray[50]),
		disabled: createSemanticColor(
			palette.gray[100],
			palette.gray[400],
			palette.gray[200]
		),
	}
}

export const createRadioTheme = (colorMode: ColorMode): RadioThemeToken => {
	const palette = colors[colorMode]

	return {
		default: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.gray[200]
		),
		hover: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.blue[500]
		),
		checked: createSemanticColor(palette.blue[500], palette.gray[50]),
		disabled: createSemanticColor(
			palette.gray[100],
			palette.gray[400],
			palette.gray[200]
		),
	}
}

export const createTypographyTheme = (
	colorMode: ColorMode
): TypographyTheme => {
	const palette = colors[colorMode]

	return {
		h1: createSemanticColor(undefined, palette.gray[900]),
		h2: createSemanticColor(undefined, palette.gray[900]),
		h3: createSemanticColor(undefined, palette.gray[900]),
		h4: createSemanticColor(undefined, palette.gray[900]),
		h5: createSemanticColor(undefined, palette.gray[800]),
		h6: createSemanticColor(undefined, palette.gray[800]),
		body: createSemanticColor(undefined, palette.gray[700]),
		caption: createSemanticColor(undefined, palette.gray[600]),
		label: createSemanticColor(undefined, palette.gray[700]),
	}
}

export const createModalTheme = (colorMode: ColorMode): ModalThemeToken => {
	const palette = colors[colorMode]

	return {
		overlay: createSemanticColor('rgba(0, 0, 0, 0.5)'),
		content: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.gray[200],
			'0 4px 6px -1px rgba(0, 0, 0, 0.1)'
		),
		header: createSemanticColor(undefined, palette.gray[900]),
		footer: createSemanticColor(palette.gray[50]),
	}
}

export const createDropdownTheme = (
	colorMode: ColorMode
): DropdownThemeToken => {
	const palette = colors[colorMode]

	return {
		trigger: createSemanticColor(palette.gray[50], palette.gray[900]),
		menu: createSemanticColor(
			palette.gray[50],
			undefined,
			palette.gray[200],
			'0 4px 6px -1px rgba(0, 0, 0, 0.1)'
		),
		item: {
			default: createSemanticColor('transparent', palette.gray[900]),
			hover: createSemanticColor(palette.gray[100], palette.gray[900]),
			active: createSemanticColor(palette.blue[500], palette.gray[50]),
			disabled: createSemanticColor('transparent', palette.gray[400]),
		},
	}
}

export const createTextAreaTheme = (
	colorMode: ColorMode
): TextAreaThemeToken => {
	const palette = colors[colorMode]

	return {
		default: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.gray[200],
			undefined,
			palette.gray[500]
		),
		hover: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.gray[300]
		),
		focus: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.blue[500],
			palette.blue[200]
		),
		disabled: createSemanticColor(
			palette.gray[100],
			palette.gray[400],
			palette.gray[200]
		),
		error: createSemanticColor(
			palette.gray[50],
			palette.gray[900],
			palette.red[500],
			palette.red[200]
		),
	}
}

export const createAvatarTheme = (colorMode: ColorMode): AvatarTheme => {
	const palette = colors[colorMode]

	return {
		background: createSemanticColor(palette.gray[200]),
		fallback: createSemanticColor(palette.gray[300], palette.gray[600]),
	}
}

export const createBreadCrumbTheme = (
	colorMode: ColorMode
): BreadCrumbTheme => {
	const palette = colors[colorMode]

	return {
		item: {
			default: createSemanticColor(undefined, palette.gray[600]),
			hover: createSemanticColor(undefined, palette.blue[500]),
			active: createSemanticColor(undefined, palette.gray[900]),
		},
		separator: createSemanticColor(undefined, palette.gray[400]),
	}
}
