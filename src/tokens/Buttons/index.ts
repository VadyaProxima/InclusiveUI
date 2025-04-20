import { colors } from '../colors'

const disabledBlue = 'rgba(51, 141, 236, 0.4)' // colors.blue[500] с 40% прозрачностью
const disabledGray = 'rgba(179, 198, 247, 0.4)' // colors.gray[100] с 40% прозрачностью
const disabledRed = 'rgba(255, 107, 107, 0.4)' // colors.red[500] с 40% прозрачностью
export const buttonBackgroundColors = {
	primary: {
		default: colors.blue[500],
		hover: colors.blue[600],
		active: colors.blue[700],
		disabled: disabledBlue,
	},
	secondary: {
		default: colors.gray[100],
		hover: colors.gray[200],
		active: colors.gray[300],
		disabled: disabledGray,
	},
	danger: {
		default: colors.red[500],
		hover: colors.red[600],
		active: colors.red[700],
		disabled: disabledRed,
	},
}

export const buttonTextColors = {
	white: colors.gray[50],
	black: colors.gray[900],
}

export const buttonTypography = {
	desktop: {
		fontSize: {
			small: '1.25rem',
			medium: '1.5rem',
			large: '1.75rem',
		},
		lineHeight: {
			small: '16px',
			medium: '24px',
			large: '28px',
		},
	},
	tablet: {
		fontSize: {
			small: '0.75rem',
			medium: '0.875rem',
			large: '1.125rem',
		},
		lineHeight: {
			small: '14px',
			medium: '20px',
			large: '26px',
		},
	},
	mobile: {
		fontSize: {
			small: '0.625rem',
			medium: '0.75rem',
			large: '1rem',
		},
		lineHeight: {
			small: '12px',
			medium: '16px',
			large: '24px',
		},
	},
}

export const buttonWidths = {
	desktop: {
		large: '160px',
		medium: '120px',
		small: '90px',
	},
	tablet: {
		large: '140px',
		medium: '100px',
		small: '80px',
	},
	mobile: {
		large: '120px',
		medium: '80px',
		small: '60px',
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
		medium: '12px',
		small: '8px',
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
		small: '12px',
	},
	mobile: {
		large: '24px',
		medium: '16px',
		small: '8px',
	},
}

export const buttonPadding = {
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
	desktop: {
		large: '6px',
		medium: '4px',
		small: '2px',
	},
	tablet: {
		large: '5px',
		medium: '3px',
		small: '1px',
	},
	mobile: {
		large: '4px',
		medium: '2px',
		small: '1px',
	},
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
