import { colors } from './tokens/colors'
import { textColors } from './tokens/Typography'

// Helper для создания цветов disabled (можно вынести в utils, если нужно)
// Применяет 40% прозрачности к HEX цвету
const hexToRgba = (hex: string, alpha: number): string => {
	const r = parseInt(hex.slice(1, 3), 16)
	const g = parseInt(hex.slice(3, 5), 16)
	const b = parseInt(hex.slice(5, 7), 16)
	return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export const lightTheme = {
	name: 'light',
	colors: {
		// Основные палитры
		...colors.light,
		// Семантические цвета текста
		text: {
			Base: textColors.light.Base,
			Secondary: textColors.light.Secondary,
			Tertiary: textColors.light.Tertiary,
			Quaternary: textColors.light.Quaternary,
			LightSolid: textColors.light.LightSolid,
			Heading: textColors.light.Heading,
			Label: textColors.light.Label,
			Description: textColors.light.Description,
			Placeholder: textColors.light.Placeholder,
			Disabled: textColors.light.Disabled,
		},
		// Семантические цвета компонентов
		button: {
			primary: {
				background: colors.light.blue[600],
				text: colors.light.gray[50],
				defaultShadow: colors.light.gray[200],
				hoverBackground: colors.light.blue[600],
				hoverText: colors.light.gray[1000],
				activeBackground: colors.light.blue[700],
				activeText: colors.light.gray[50],
				focusBackground: colors.light.blue[500],
				focusText: colors.light.gray[50],
				focusShadow: colors.light.blue[200],
				disabledBackground: colors.light.gray[200],
				disabledText: colors.light.gray[900],
			},
			default: {
				background: colors.light.gray[100],
				text: colors.light.gray[900],
				hoverBackground: colors.light.gray[100],
				activeBackground: colors.light.gray[100],
				hoverBorder: colors.light.blue[500],
				activeBorder: colors.light.blue[700],
				focusBorder: colors.light.blue[500],
				focusShadow: colors.light.blue[200],
				disabledBackground: colors.light.gray[200],
				disabledText: colors.light.gray[900],
			},
			danger: {
				background: colors.light.red[600],
				text: colors.light.gray[50],
				defaultShadow: colors.light.gray[200],
				hoverBackground: colors.light.red[500],
				hoverText: colors.light.gray[1000],
				activeBackground: colors.light.red[700],
				activeText: colors.light.gray[50],
				focusBackground: colors.light.red[500],
				focusText: colors.light.gray[1000],
				focusShadow: colors.light.red[200],
				disabledBackground: colors.light.gray[200],
				disabledText: colors.light.gray[900],
			},
			text: {
				background: 'transparent',
				text: colors.light.gray[1000],
				hoverBackground: colors.light.gray[100],
				hoverText: colors.light.gray[1000],
				hoverShadow: colors.light.gray[200],
				activeBackground: colors.light.gray[300],
				activeText: colors.light.gray[1000],
				focusBackground: colors.light.gray[100],
				focusText: colors.light.gray[1000],
				focusShadow: 'rgba(0, 0, 0, 0.25)',
				disabledBackground: colors.light.gray[200],
				disabledText: colors.light.gray[900],
			},
		},
		checkbox: {
			default: {
				background: 'transparent',
				border: colors.light.gray[200],
			},
			hover: {
				border: colors.light.blue[500],
			},
			checked: {
				background: 'transparent',
				border: colors.light.blue[500],
				text: colors.light.blue[500], // for checkmark icon
			},
			disabled: {
				background: 'transparent',
				border: colors.light.gray[200],
			},
		},
		input: {
			default: {
				background: 'transparent',
				text: colors.light.gray[900],
				border: colors.light.gray[500],
				placeholder: colors.light.gray[600],
				label: colors.light.gray[700],
			},
			hover: {
				border: colors.light.gray[300],
			},
			focus: {
				border: colors.light.blue[500],
				shadow: colors.light.blue[200],
			},
			disabled: {
				background: colors.light.gray[100],
				text: colors.light.gray[400],
				border: colors.light.gray[200],
			},
			error: {
				border: colors.light.red[500],
				shadow: colors.light.red[200],
			},
			success: {
				border: colors.light.green[500],
				shadow: colors.light.green[200],
			},
			warning: {
				border: colors.light.gold[500],
				shadow: colors.light.gold[200],
			},
		},
		modal: {
			background: colors.light.neutral.white,
			closeButtonHover: colors.light.gray[100],
		},
		// ... другие семантические цвета для других компонентов
	},
	// Добавляем брейкпоинты (примерные значения)
	breakpoints: {
		desktop: '1024px',
		tablet: '768px',
		mobile: '480px',
	},
	// ... можно добавить сюда типографику, отступы и т.д., специфичные для темы
}

export const darkTheme = {
	name: 'dark',
	colors: {
		// Основные палитры
		...colors.dark,
		// Семантические цвета текста
		text: {
			Base: textColors.dark.Base,
			Secondary: textColors.dark.Secondary,
			Tertiary: textColors.dark.Tertiary,
			Quaternary: textColors.dark.Quaternary,
			LightSolid: textColors.dark.LightSolid,
			Heading: textColors.dark.Heading,
			Label: textColors.dark.Label,
			Description: textColors.dark.Description,
			Placeholder: textColors.dark.Placeholder,
			Disabled: textColors.dark.Disabled,
		},
		// Семантические цвета компонентов
		button: {
			primary: {
				background: colors.dark.blue[600],
				text: colors.dark.gray[50],
				defaultShadow: colors.dark.gray[800],
				hoverBackground: colors.dark.blue[600],
				hoverText: colors.dark.gray[1000],
				activeBackground: colors.dark.blue[700],
				activeText: colors.dark.gray[50],
				focusBackground: colors.dark.blue[500],
				focusText: colors.dark.gray[50],
				focusShadow: colors.dark.blue[200],
				disabledBackground: colors.dark.gray[200],
				disabledText: colors.dark.gray[900],
			},
			default: {
				background: colors.dark.gray[100],
				text: colors.dark.gray[900],
				hoverBackground: colors.dark.gray[100],
				activeBackground: colors.dark.gray[100],
				hoverBorder: colors.dark.blue[500],
				activeBorder: colors.dark.blue[700],
				focusBorder: colors.dark.blue[500],
				focusShadow: colors.dark.blue[200],
				disabledBackground: colors.dark.gray[200],
				disabledText: colors.dark.gray[900],
			},
			danger: {
				background: colors.dark.red[600],
				text: colors.dark.gray[50],
				defaultShadow: colors.dark.gray[800],
				hoverBackground: colors.dark.red[500],
				hoverText: colors.dark.gray[1000],
				activeBackground: colors.dark.red[700],
				activeText: colors.dark.gray[50],
				focusBackground: colors.dark.red[500],
				focusText: colors.dark.gray[1000],
				focusShadow: colors.dark.red[200],
				disabledBackground: colors.dark.gray[200],
				disabledText: colors.dark.gray[900],
			},
			text: {
				background: 'transparent',
				text: colors.dark.gray[1000],
				hoverBackground: colors.dark.gray[100],
				hoverText: colors.dark.gray[1000],
				hoverShadow: colors.dark.gray[800],
				activeBackground: colors.dark.gray[300],
				activeText: colors.dark.gray[1000],
				focusBackground: colors.dark.gray[100],
				focusText: colors.dark.gray[1000],
				focusShadow: 'rgba(255, 255, 255, 0.25)',
				disabledBackground: colors.dark.gray[200],
				disabledText: colors.dark.gray[900],
			},
		},
		checkbox: {
			default: {
				background: 'transparent',
				border: colors.dark.gray[200],
			},
			hover: {
				border: colors.dark.blue[500],
			},
			checked: {
				background: 'transparent',
				border: colors.dark.blue[500],
				text: colors.dark.blue[500], // for checkmark icon
			},
			disabled: {
				background: 'transparent',
				border: colors.dark.gray[200],
			},
		},
		input: {
			default: {
				background: colors.dark.gray[50],
				text: colors.dark.gray[900],
				border: colors.dark.gray[200],
				placeholder: colors.dark.gray[500],
				label: colors.dark.gray[700],
			},
			hover: {
				border: colors.dark.gray[300],
			},
			focus: {
				border: colors.dark.blue[500],
				shadow: colors.dark.blue[200],
			},
			disabled: {
				background: colors.dark.gray[100],
				text: colors.dark.gray[400],
				border: colors.dark.gray[200],
			},
			error: {
				border: colors.dark.red[500],
				shadow: colors.dark.red[200],
			},
			success: {
				border: colors.dark.green[500],
				shadow: colors.dark.green[200],
			},
			warning: {
				border: colors.dark.gold[500],
				shadow: colors.dark.gold[200],
			},
		},
		modal: {
			background: colors.dark.coolGray[50],
			closeButtonHover: colors.dark.coolGray[100],
		},
	},
	// Добавляем брейкпоинты (примерные значения)
	breakpoints: {
		desktop: '1024px',
		tablet: '768px',
		mobile: '480px',
	},
}

// Экспортируем тип темы для использования в компонентах
export type Theme = typeof lightTheme

// Импортируем наш тип Theme под псевдонимом, чтобы избежать конфликта имен внутри объявления модуля
import type { Theme as AppTheme } from './theme'

// Говорим emotion использовать наш тип темы
declare module '@emotion/react' {
	// Расширяем интерфейс Theme из @emotion/react нашим типом AppTheme
	// eslint-disable-next-line @typescript-eslint/no-empty-interface
	export interface Theme extends AppTheme {}
}
