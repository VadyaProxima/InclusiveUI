import { fontSizes, lineHeights } from '../Typography'

export const buttonTypography = {
	desktop: {
		fontSize: {
			small: fontSizes.desktop.label,
			medium: fontSizes.desktop.paragraph,
			large: fontSizes.desktop.bodyM,
		},
		lineHeight: {
			small: lineHeights.desktop.label,
			medium: lineHeights.desktop.paragraph,
			large: lineHeights.desktop.bodyM,
		},
	},
	tablet: {
		fontSize: {
			small: fontSizes.tablet.label,
			medium: fontSizes.tablet.paragraph,
			large: fontSizes.tablet.bodyM,
		},
		lineHeight: {
			small: lineHeights.tablet.label,
			medium: lineHeights.tablet.paragraph,
			large: lineHeights.tablet.bodyM,
		},
	},
	mobile: {
		fontSize: {
			small: fontSizes.mobile.label,
			medium: fontSizes.mobile.paragraph,
			large: fontSizes.mobile.bodyM,
		},
		lineHeight: {
			small: lineHeights.mobile.label,
			medium: lineHeights.mobile.paragraph,
			large: lineHeights.mobile.bodyM,
		},
	},
}

// Фиксированные высоты для кнопок
export const buttonHeights = {
	desktop: {
		large: '48px',
		medium: '40px',
		small: '32px',
	},
	tablet: {
		large: '44px',
		medium: '36px',
		small: '28px',
	},
	mobile: {
		large: '40px',
		medium: '32px',
		small: '24px',
	},
}

// Минимальные размеры для кнопок только с иконкой
export const buttonMinSizes = {
	iconOnly: {
		desktop: {
			large: '48px',
			medium: '40px',
			small: '32px',
		},
		tablet: {
			large: '44px',
			medium: '36px',
			small: '28px',
		},
		mobile: {
			large: '40px',
			medium: '32px',
			small: '24px',
		},
	},
}

export const buttonGap = {
	desktop: {
		large: '16px',
		medium: '8px',
		small: '4px',
	},
	tablet: {
		large: '12px',
		medium: '6px',
		small: '2px',
	},
	mobile: {
		large: '8px',
		medium: '4px',
		small: '1px',
	},
}

export const iconSizes = {
	desktop: {
		large: '24px',
		medium: '20px',
		small: '16px',
	},
	tablet: {
		large: '20px',
		medium: '18px',
		small: '14px',
	},
	mobile: {
		large: '18px',
		medium: '16px',
		small: '12px',
	},
}

type ButtonSize = 'small' | 'medium' | 'large'
type ScreenSize = 'desktop' | 'tablet' | 'mobile'

type PaddingValue = { vertical: string; horizontal: string }

type ButtonPaddingType = {
	[screen in ScreenSize]: {
		[size in ButtonSize]: PaddingValue
	} & {
		iconOnly: PaddingValue
	}
}

export const buttonPadding: ButtonPaddingType = {
	desktop: {
		large: { vertical: '0', horizontal: '24px' },
		medium: { vertical: '0', horizontal: '16px' },
		small: { vertical: '0', horizontal: '12px' },
		iconOnly: { vertical: '0', horizontal: '0' },
	},
	tablet: {
		large: { vertical: '0', horizontal: '20px' },
		medium: { vertical: '0', horizontal: '14px' },
		small: { vertical: '0', horizontal: '10px' },
		iconOnly: { vertical: '0', horizontal: '0' },
	},
	mobile: {
		large: { vertical: '0', horizontal: '16px' },
		medium: { vertical: '0', horizontal: '12px' },
		small: { vertical: '0', horizontal: '8px' },
		iconOnly: { vertical: '0', horizontal: '0' },
	},
}

export const buttonBorderWidth = {
	desktop: '2px',
	tablet: '2px',
	mobile: '1px',
}

export const buttonBorderRadius = {
	desktop: {
		large: '12px',
		medium: '8px',
		small: '4px',
	},
	tablet: {
		large: '10px',
		medium: '6px',
		small: '3px',
	},
	mobile: {
		large: '8px',
		medium: '4px',
		small: '2px',
	},
}
