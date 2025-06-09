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

export const buttonWidths = {
	desktop: {
		large: '160px',
		medium: '120px',
		small: '100px',
	},
	tablet: {
		large: '140px',
		medium: '100px',
		small: '95px',
	},
	mobile: {
		large: '120px',
		medium: '85px',
		small: '90px',
	},
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

export const iconSizes = {
	desktop: {
		large: '32px',
		medium: '24px',
		small: '16px',
	},
	tablet: {
		large: '28px',
		medium: '20px',
		small: '14px',
	},
	mobile: {
		large: '24px',
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
		large: { vertical: '16px', horizontal: '20px' },
		medium: { vertical: '14px', horizontal: '12px' },
		small: { vertical: '10px', horizontal: '8px' },
		iconOnly: { vertical: '8px', horizontal: '8px' },
	},
	tablet: {
		large: { vertical: '14px', horizontal: '16px' },
		medium: { vertical: '12px', horizontal: '10px' },
		small: { vertical: '8px', horizontal: '6px' },
		iconOnly: { vertical: '8px', horizontal: '8px' },
	},
	mobile: {
		large: { vertical: '12px', horizontal: '12px' },
		medium: { vertical: '10px', horizontal: '8px' },
		small: { vertical: '6px', horizontal: '4px' },
		iconOnly: { vertical: '8px', horizontal: '8px' },
	},
}

export const buttonBorderWidth = {
	desktop: '3px',
	tablet: '2px',
	mobile: '2px',
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
