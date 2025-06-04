import { borderRadius } from '../spacing'

// Размеры для самого аватара
export const avatarWidth = {
	desktop: '40px',
	tablet: '32px',
	mobile: '26px',
}

export const avatarHeight = {
	desktop: '40px',
	tablet: '32px',
	mobile: '26px',
}

// Размеры для бейджа (красный круг с уведомлением)
export const badgeWidth = {
	desktop: '30px',
	tablet: '22px',
	mobile: '18px',
}

export const badgeHeight = {
	desktop: '30px',
	tablet: '22px',
	mobile: '18px',
}

// Размеры для иконок
export const iconSize = {
	desktop: '20px',
	tablet: '18px',
	mobile: '12px',
}

// Размер для точки (маленький индикатор)
export const dotSize = {
	desktop: '14px',
	tablet: '12px',
	mobile: '10px',
}

// Отступы
export const avatarPaddingHorizontal = {
	desktop: '8px',
	tablet: '8px',
	mobile: '8px',
}

export const avatarPaddingVertical = {
	desktop: '8px',
	tablet: '8px',
	mobile: '8px',
}

// Граница - используем радиусы из spacing.ts
export const avatarBorder = {
	// Стандартная граница (Tiny)
	tiny: {
		desktop: borderRadius.desktop.tiny,
		tablet: borderRadius.tablet.tiny,
		mobile: borderRadius.mobile.tiny,
	},
	// Круглая граница (Full)
	full: {
		desktop: borderRadius.desktop.full,
		tablet: borderRadius.tablet.full,
		mobile: borderRadius.mobile.full,
	},
}
