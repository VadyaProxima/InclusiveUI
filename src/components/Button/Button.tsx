import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Theme } from '../../theme'
import {
	buttonBorderRadius,
	buttonBorderWidth,
	buttonGap,
	buttonHeights,
	buttonPadding,
	buttonTypography,
	buttonWidths,
	iconSizes,
} from '../../tokens/Buttons'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	onClick?: () => void
	variant?: 'primary' | 'default' | 'danger' | 'text'
	size?: 'small' | 'medium' | 'large'
	disabled?: boolean
	icon?: React.ReactNode
	iconPosition?: 'left' | 'right'
	'aria-label': string
	'aria-describedby'?: string
	'aria-haspopup'?:
		| boolean
		| 'false'
		| 'true'
		| 'menu'
		| 'listbox'
		| 'tree'
		| 'grid'
		| 'dialog'
	'aria-expanded'?: boolean | 'false' | 'true'
	'aria-controls'?: string
}

// Добавляем тип для пропсов StyledButton, включая theme и новые пропсы
interface StyledButtonProps extends Omit<ButtonProps, 'children' | 'label'> {
	theme: Theme
	hasIcon?: boolean
	hasChildren?: boolean
}

// Styled-component для кнопки с использованием динамических стилей
const StyledButton = styled.button<StyledButtonProps>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.3s ease;
	white-space: nowrap;
	border-style: solid;
	box-shadow: none;
	outline: none;

	${({ size = 'medium', hasIcon, hasChildren }) => css`
		min-width: ${hasIcon && !hasChildren
			? buttonWidths.iconOnly.mobile[size]
			: buttonWidths.mobile[size]};
		min-height: ${buttonHeights.mobile[size]};
		padding-top: ${hasIcon && !hasChildren
			? buttonPadding.mobile.iconOnly.vertical
			: buttonPadding.mobile[size].vertical};
		padding-bottom: ${hasIcon && !hasChildren
			? buttonPadding.mobile.iconOnly.vertical
			: buttonPadding.mobile[size].vertical};
		padding-left: ${hasIcon && !hasChildren
			? buttonPadding.mobile.iconOnly.horizontal
			: buttonPadding.mobile[size].horizontal};
		padding-right: ${hasIcon && !hasChildren
			? buttonPadding.mobile.iconOnly.horizontal
			: buttonPadding.mobile[size].horizontal};
		gap: ${hasIcon && hasChildren ? buttonGap.mobile[size] : '0'};
		& > svg {
			width: ${iconSizes.mobile[size]};
			height: ${iconSizes.mobile[size]};
		}
		font-size: ${hasIcon && !hasChildren
			? '0'
			: buttonTypography.mobile.fontSize[size]};
		line-height: ${buttonTypography.mobile.lineHeight[size]};
		border-radius: ${buttonBorderRadius.mobile[size]};
		border-width: ${buttonBorderWidth.mobile};
	`}

	/* Tablet */
	@media (min-width: ${props => props.theme.breakpoints.tablet}) {
		${({ size = 'medium', hasIcon, hasChildren }) => css`
			min-width: ${hasIcon && !hasChildren
				? buttonWidths.iconOnly.tablet[size]
				: buttonWidths.tablet[size]};
			min-height: ${buttonHeights.tablet[size]};
			padding-top: ${hasIcon && !hasChildren
				? buttonPadding.tablet.iconOnly.vertical
				: buttonPadding.tablet[size].vertical};
			padding-bottom: ${hasIcon && !hasChildren
				? buttonPadding.tablet.iconOnly.vertical
				: buttonPadding.tablet[size].vertical};
			padding-left: ${hasIcon && !hasChildren
				? buttonPadding.tablet.iconOnly.horizontal
				: buttonPadding.tablet[size].horizontal};
			padding-right: ${hasIcon && !hasChildren
				? buttonPadding.tablet.iconOnly.horizontal
				: buttonPadding.tablet[size].horizontal};
			gap: ${hasIcon && hasChildren ? buttonGap.tablet[size] : '0'};
			& > svg {
				width: ${iconSizes.tablet[size]};
				height: ${iconSizes.tablet[size]};
			}
			font-size: ${hasIcon && !hasChildren
				? '0'
				: buttonTypography.tablet.fontSize[size]};
			line-height: ${buttonTypography.tablet.lineHeight[size]};
			border-radius: ${buttonBorderRadius.tablet[size]};
			border-width: ${buttonBorderWidth.tablet};
		`}
	}

	/* Desktop */
	/* Desktop */
	@media (min-width: ${props => props.theme.breakpoints.desktop}) {
		${({ size = 'medium', hasIcon, hasChildren }) => css`
			min-width: ${hasIcon && !hasChildren
				? buttonWidths.iconOnly.desktop[size]
				: buttonWidths.desktop[size]};
			min-height: ${buttonHeights.desktop[size]};
			padding-top: ${hasIcon && !hasChildren
				? buttonPadding.desktop.iconOnly.vertical
				: buttonPadding.desktop[size].vertical};
			padding-bottom: ${hasIcon && !hasChildren
				? buttonPadding.desktop.iconOnly.vertical
				: buttonPadding.desktop[size].vertical};
			padding-left: ${hasIcon && !hasChildren
				? buttonPadding.desktop.iconOnly.horizontal
				: buttonPadding.desktop[size].horizontal};
			padding-right: ${hasIcon && !hasChildren
				? buttonPadding.desktop.iconOnly.horizontal
				: buttonPadding.desktop[size].horizontal};
			gap: ${hasIcon && hasChildren ? buttonGap.desktop[size] : '0'};
			& > svg {
				width: ${iconSizes.desktop[size]};
				height: ${iconSizes.desktop[size]};
			}
			font-size: ${hasIcon && !hasChildren
				? '0'
				: buttonTypography.desktop.fontSize[size]};
			line-height: ${buttonTypography.desktop.lineHeight[size]};
			border-radius: ${buttonBorderRadius.desktop[size]};
			border-width: ${buttonBorderWidth.desktop};
		`}
	}

	${({ theme, variant = 'primary' }) => {
		const variantColors = theme.colors.button[variant]
		let baseStyles = css``
		let hoverStyles = css``
		let activeStyles = css``
		let focusStyles = css``
		let disabledStyles = css``

		disabledStyles = css`
			background-color: ${variantColors.disabledBackground};
			color: ${variantColors.disabledText};
			border-color: transparent;
			box-shadow: none;
			cursor: not-allowed;
		`

		if (variant === 'primary') {
			if (
				'defaultShadow' in variantColors &&
				'hoverText' in variantColors &&
				'activeText' in variantColors &&
				'focusBackground' in variantColors &&
				'focusText' in variantColors &&
				'focusShadow' in variantColors
			) {
				baseStyles = css`
					background-color: ${variantColors.background};
					color: ${variantColors.text};
					border-color: transparent; // У primary нет видимой рамки по умолчанию
					box-shadow: 0px 1px 0px 2px ${variantColors.defaultShadow}; // Тень по умолчанию
				`
				hoverStyles = css`
					background-color: ${variantColors.hoverBackground};
					color: ${variantColors.hoverText};
					box-shadow: none; // Убираем тень при ховере
				`
				activeStyles = css`
					background-color: ${variantColors.activeBackground};
					color: ${variantColors.activeText};
					box-shadow: none; // Убираем тень при активации
				`
				focusStyles = css`
					background-color: ${variantColors.focusBackground};
					color: ${variantColors.focusText};
					border-color: transparent;
					/* Применяем тень для фокуса */
					/* Mobile */
					box-shadow: 0 0 0 4px ${variantColors.focusShadow};
					/* Tablet */
					@media (min-width: ${theme.breakpoints.tablet}) {
						box-shadow: 0 0 0 4px ${variantColors.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${theme.breakpoints.desktop}) {
						box-shadow: 0 0 0 4px ${variantColors.focusShadow};
					}
				`
			}
		} else if (variant === 'default') {
			if (
				'hoverBorder' in variantColors &&
				'activeBorder' in variantColors &&
				'focusBorder' in variantColors &&
				'focusShadow' in variantColors
			) {
				baseStyles = css`
					background-color: ${variantColors.background};
					color: ${variantColors.text};
					border-color: transparent;
					box-shadow: none;
				`
				hoverStyles = css`
					border-color: ${variantColors.hoverBorder};
					background-color: ${variantColors.hoverBackground};
				`
				activeStyles = css`
					border-color: ${variantColors.activeBorder};
					background-color: ${variantColors.activeBackground};
				`
				focusStyles = css`
					border-color: ${variantColors.focusBorder};
					/* Применяем тень как вторую рамку */
					/* Mobile */
					box-shadow: 0 0 0 ${buttonBorderWidth.mobile}
						${variantColors.focusShadow};
					/* Tablet */
					@media (min-width: ${theme.breakpoints.tablet}) {
						box-shadow: 0 0 0 ${buttonBorderWidth.tablet}
							${variantColors.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${theme.breakpoints.desktop}) {
						box-shadow: 0 0 0 ${buttonBorderWidth.desktop}
							${variantColors.focusShadow};
					}
				`
			}
		} else if (variant === 'danger') {
			if (
				'defaultShadow' in variantColors &&
				'hoverBackground' in variantColors &&
				'hoverText' in variantColors &&
				'activeBackground' in variantColors &&
				'activeText' in variantColors &&
				'focusBackground' in variantColors &&
				'focusText' in variantColors &&
				'focusShadow' in variantColors
			) {
				baseStyles = css`
					background-color: ${variantColors.background};
					color: ${variantColors.text};
					border-color: transparent;
					box-shadow: 0px 1px 0px 2px ${variantColors.defaultShadow};
				`
				hoverStyles = css`
					background-color: ${variantColors.hoverBackground};
					color: ${variantColors.hoverText};
					box-shadow: none;
				`
				activeStyles = css`
					background-color: ${variantColors.activeBackground};
					color: ${variantColors.activeText};
					box-shadow: none;
				`
				focusStyles = css`
					background-color: ${variantColors.focusBackground};
					color: ${variantColors.focusText};
					border-color: transparent;
					/* Применяем тень для фокуса */
					/* Mobile */
					box-shadow: 0 0 0 4px ${variantColors.focusShadow};
					/* Tablet */
					@media (min-width: ${theme.breakpoints.tablet}) {
						box-shadow: 0 0 0 4px ${variantColors.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${theme.breakpoints.desktop}) {
						box-shadow: 0 0 0 4px ${variantColors.focusShadow};
					}
				`
			}
		} else if (variant === 'text') {
			if (
				'hoverBackground' in variantColors &&
				'hoverText' in variantColors &&
				'hoverShadow' in variantColors &&
				'activeBackground' in variantColors &&
				'activeText' in variantColors &&
				'focusBackground' in variantColors &&
				'focusText' in variantColors &&
				'focusShadow' in variantColors
			) {
				baseStyles = css`
					background-color: ${variantColors.background}; // transparent
					color: ${variantColors.text};
					border-color: transparent;
					box-shadow: none;
				`
				hoverStyles = css`
					background-color: ${variantColors.hoverBackground};
					color: ${variantColors.hoverText};
					box-shadow: 0px 1px 0px 2px ${variantColors.hoverShadow}; // Тень снизу
				`
				activeStyles = css`
					background-color: ${variantColors.activeBackground};
					color: ${variantColors.activeText};
					box-shadow: none;
				`
				focusStyles = css`
					background-color: ${variantColors.focusBackground};
					color: ${variantColors.focusText};
					border-color: transparent;
					/* Тень для фокуса */
					/* Mobile */
					box-shadow: 0 0 0 4px ${variantColors.focusShadow};
					/* Tablet */
					@media (min-width: ${theme.breakpoints.tablet}) {
						box-shadow: 0 0 0 4px ${variantColors.focusShadow};
					}
					/* Desktop */
					@media (min-width: ${theme.breakpoints.desktop}) {
						box-shadow: 0 0 0 4px ${variantColors.focusShadow};
					}
				`
			}
		}

		// Собираем все стили вместе
		return css`
			${baseStyles}

			&:hover:not(:disabled) {
				${hoverStyles}
			}

			&:active:not(:disabled) {
				${activeStyles}
			}

			&:focus-visible:not(:disabled) {
				${focusStyles}
			}

			&:disabled {
				${disabledStyles}
			}
		`
	}}
`

const Button: React.FC<ButtonProps> = ({
	children,
	onClick,
	variant = 'primary',
	size = 'medium',
	disabled = false,
	icon,
	iconPosition = 'left',
	// Явно извлекаем aria-* пропсы, чтобы передать их дальше
	'aria-label': ariaLabel,
	'aria-describedby': ariaDescribedBy,
	'aria-haspopup': ariaHasPopup,
	'aria-expanded': ariaExpanded,
	'aria-controls': ariaControls,
	...props // Остальные пропсы, включая стандартные HTML атрибуты
}) => {
	const theme = useTheme() as Theme
	const hasIcon = !!icon
	const hasChildren = React.Children.count(children) > 0

	return (
		<StyledButton
			theme={theme}
			variant={variant}
			size={size}
			disabled={disabled}
			onClick={onClick}
			hasIcon={hasIcon}
			hasChildren={hasChildren}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedBy}
			aria-haspopup={ariaHasPopup}
			aria-expanded={ariaExpanded}
			aria-controls={ariaControls}
			{...props}
		>
			{hasIcon && iconPosition === 'left' && icon}
			{hasChildren && <span>{children}</span>}
			{hasIcon && iconPosition === 'right' && icon}
		</StyledButton>
	)
}

export default Button
