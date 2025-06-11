import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Theme } from '../../theme'
import {
	buttonBorderRadius,
	buttonBorderWidth,
	buttonGap,
	buttonHeights,
	buttonMinSizes,
	buttonPadding,
	buttonTypography,
	iconSizes,
} from '../../tokens/Buttons'
import { ButtonVariants } from '../../types/button'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode
	onClick?: () => void
	variant?: keyof ButtonVariants
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
	onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void
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
			? buttonMinSizes.iconOnly.mobile[size]
			: 'auto'};
		height: ${hasIcon && !hasChildren
			? buttonMinSizes.iconOnly.mobile[size]
			: buttonHeights.mobile[size]};
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
				? buttonMinSizes.iconOnly.tablet[size]
				: 'auto'};
			height: ${hasIcon && !hasChildren
				? buttonMinSizes.iconOnly.tablet[size]
				: buttonHeights.tablet[size]};
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
	@media (min-width: ${props => props.theme.breakpoints.desktop}) {
		${({ size = 'medium', hasIcon, hasChildren }) => css`
			min-width: ${hasIcon && !hasChildren
				? buttonMinSizes.iconOnly.desktop[size]
				: 'auto'};
			height: ${hasIcon && !hasChildren
				? buttonMinSizes.iconOnly.desktop[size]
				: buttonHeights.desktop[size]};
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
		const variantColors = theme.colors.button[
			variant
		] as ButtonVariants[typeof variant]
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

		if (variant === 'primary' || variant === 'danger') {
			const colors = variantColors as ButtonVariants['primary']
			baseStyles = css`
				background-color: ${colors.background};
				color: ${colors.text};
				border-color: transparent;
				box-shadow: 0px 1px 0px 2px ${colors.defaultShadow};
			`
			hoverStyles = css`
				background-color: ${colors.hoverBackground};
				color: ${colors.hoverText};
				box-shadow: none;
			`
			activeStyles = css`
				background-color: ${colors.activeBackground};
				color: ${colors.activeText};
				box-shadow: none;
			`
			focusStyles = css`
				background-color: ${colors.focusBackground};
				color: ${colors.focusText};
				border-color: transparent;
				box-shadow: 0 0 0 4px ${colors.focusShadow};
			`
		} else if (variant === 'default') {
			const colors = variantColors as ButtonVariants['default']
			baseStyles = css`
				background-color: ${colors.background};
				color: ${colors.text};
				border-color: transparent;
				box-shadow: none;
			`
			hoverStyles = css`
				border-color: ${colors.hoverBorder};
				background-color: ${colors.hoverBackground};
			`
			activeStyles = css`
				border-color: ${colors.activeBorder};
				background-color: ${colors.activeBackground};
			`
			focusStyles = css`
				border-color: ${colors.focusBorder};
				box-shadow: 0 0 0 4px ${colors.focusShadow};
			`
		} else {
			// text variant
			const colors = variantColors as ButtonVariants['text']
			baseStyles = css`
				background-color: ${colors.background};
				color: ${colors.text};
				border-color: transparent;
				box-shadow: none;
			`
			hoverStyles = css`
				background-color: ${colors.hoverBackground};
				color: ${colors.text};
				box-shadow: 0px 1px 2px ${colors.hoverShadow};
			`
			activeStyles = css`
				background-color: ${colors.activeBackground};
				color: ${colors.text};
				box-shadow: none;
			`
			focusStyles = css`
				background-color: ${colors.focusBackground};
				color: ${colors.text};
				box-shadow: 0 0 0 4px ${colors.focusShadow};
			`
		}

		return css`
			${baseStyles}
			&:hover:not(:disabled) {
				${hoverStyles}
			}
			&:active:not(:disabled) {
				${activeStyles}
			}
			&:focus-visible {
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
	'aria-label': ariaLabel,
	'aria-describedby': ariaDescribedBy,
	'aria-haspopup': ariaHasPopup,
	'aria-expanded': ariaExpanded,
	'aria-controls': ariaControls,
	onKeyDown,
	...props
}) => {
	const theme = useTheme() as Theme
	const hasIcon = Boolean(icon)
	const hasChildren = Boolean(children)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'Enter' && !disabled && onClick) {
			onClick()
		}
		if (onKeyDown) {
			onKeyDown(e)
		}
	}

	return (
		<StyledButton
			onClick={onClick}
			variant={variant}
			size={size}
			disabled={disabled}
			hasIcon={hasIcon}
			hasChildren={hasChildren}
			theme={theme}
			aria-label={ariaLabel}
			aria-describedby={ariaDescribedBy}
			aria-haspopup={ariaHasPopup}
			aria-expanded={ariaExpanded}
			aria-controls={ariaControls}
			onKeyDown={handleKeyDown}
			{...props}
		>
			{hasIcon && iconPosition === 'left' && icon}
			{children}
			{hasIcon && iconPosition === 'right' && icon}
		</StyledButton>
	)
}

export default Button
