export type ColorMode = 'light' | 'dark'

export type SemanticColor = {
	bg?: string
	text?: string
	border?: string
	shadow?: string
	placeholder?: string
	label?: string
}

export type ButtonVariant = 'primary' | 'default' | 'danger' | 'text'
export type ButtonState = 'default' | 'hover' | 'active' | 'focus' | 'disabled'

export type ButtonThemeToken = {
	[key in ButtonState]: SemanticColor
}

export type ButtonTheme = {
	[key in ButtonVariant]: ButtonThemeToken
}

export type InputState = 'default' | 'hover' | 'focus' | 'disabled' | 'error'
export type InputThemeToken = {
	[key in InputState]: SemanticColor
}

export type CheckboxState = 'default' | 'hover' | 'checked' | 'disabled'
export type CheckboxThemeToken = {
	[key in CheckboxState]: SemanticColor
}

export type RadioState = 'default' | 'hover' | 'checked' | 'disabled'
export type RadioThemeToken = {
	[key in RadioState]: SemanticColor
}

export type TypographyVariant =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'body'
	| 'caption'
	| 'label'
export type TypographyTheme = {
	[key in TypographyVariant]: SemanticColor
}

export type ModalThemeToken = {
	overlay: SemanticColor
	content: SemanticColor
	header: SemanticColor
	footer: SemanticColor
}

export type DropdownThemeToken = {
	trigger: SemanticColor
	menu: SemanticColor
	item: {
		default: SemanticColor
		hover: SemanticColor
		active: SemanticColor
		disabled: SemanticColor
	}
}

export type TextAreaState = 'default' | 'hover' | 'focus' | 'disabled' | 'error'
export type TextAreaThemeToken = {
	[key in TextAreaState]: SemanticColor
}

export type AvatarTheme = {
	background: SemanticColor
	fallback: SemanticColor
}

export type BreadCrumbTheme = {
	item: {
		default: SemanticColor
		hover: SemanticColor
		active: SemanticColor
	}
	separator: SemanticColor
}

export type Theme = {
	colorMode: ColorMode
	button: ButtonTheme
	input: InputThemeToken
	checkbox: CheckboxThemeToken
	radio: RadioThemeToken
	typography: TypographyTheme
	modal: ModalThemeToken
	dropdown: DropdownThemeToken
	textArea: TextAreaThemeToken
	avatar: AvatarTheme
	breadcrumb: BreadCrumbTheme
}
