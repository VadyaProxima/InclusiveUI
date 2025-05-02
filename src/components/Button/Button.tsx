import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Theme } from '../../theme'
import {
	buttonBorderRadius,
	buttonBorderWidth,
	buttonHeights,
	buttonPadding,
	buttonTypography,
	buttonWidths,
} from '../../tokens/Buttons'

export interface ButtonProps {
	label?: string
	onClick?: () => void
	variant?: 'primary' | 'default' | 'danger' | 'text'
	size?: 'small' | 'medium' | 'large'
	disabled?: boolean
}

// Добавляем тип для пропсов StyledButton, включая theme
interface StyledButtonProps extends ButtonProps {
	theme: Theme
}

// Styled-component для кнопки с использованием динамических стилей
const StyledButton = styled.button<StyledButtonProps>`
	cursor: pointer;
	transition: 0.3s ease;
	white-space: nowrap;
	border-style: solid;
	box-shadow: none;
	outline: none;

	/* Mobile-first: Стили по умолчанию для мобильных */
	${({ size = 'medium' }) => css`
		min-width: ${buttonWidths.mobile[size]};
		min-height: ${buttonHeights.mobile[size]};
		font-size: ${buttonTypography.mobile.fontSize[size]};
		line-height: ${buttonTypography.mobile.lineHeight[size]};
		padding-top: ${buttonPadding.mobile[size].vertical};
		padding-bottom: ${buttonPadding.mobile[size].vertical};
		padding-left: ${buttonPadding.mobile[size].horizontal};
		padding-right: ${buttonPadding.mobile[size].horizontal};
		border-radius: ${buttonBorderRadius.mobile[size]};
		border-width: ${buttonBorderWidth.mobile};
	`}

	/* Tablet */
	@media (min-width: ${props => props.theme.breakpoints.tablet}) {
		${({ size = 'medium' }) => css`
			min-width: ${buttonWidths.tablet[size]};
			min-height: ${buttonHeights.tablet[size]};
			font-size: ${buttonTypography.tablet.fontSize[size]};
			line-height: ${buttonTypography.tablet.lineHeight[size]};
			padding-top: ${buttonPadding.tablet[size].vertical};
			padding-bottom: ${buttonPadding.tablet[size].vertical};
			padding-left: ${buttonPadding.tablet[size].horizontal};
			padding-right: ${buttonPadding.tablet[size].horizontal};
			border-radius: ${buttonBorderRadius.tablet[size]};
			border-width: ${buttonBorderWidth.tablet};
		`}
	}

	/* Desktop */
	@media (min-width: ${props => props.theme.breakpoints.desktop}) {
		${({ size = 'medium' }) => css`
			min-width: ${buttonWidths.desktop[size]};
			min-height: ${buttonHeights.desktop[size]};
			font-size: ${buttonTypography.desktop.fontSize[size]};
			line-height: ${buttonTypography.desktop.lineHeight[size]};
			padding-top: ${buttonPadding.desktop[size].vertical};
			padding-bottom: ${buttonPadding.desktop[size].vertical};
			padding-left: ${buttonPadding.desktop[size].horizontal};
			padding-right: ${buttonPadding.desktop[size].horizontal};
			border-radius: ${buttonBorderRadius.desktop[size]};
			border-width: ${buttonBorderWidth.desktop};
		`}
	}

	/* Применяем стили варианта из темы */
	${({ theme, variant = 'primary' }) => {
		const variantColors = theme.colors.button[variant]
		let baseStyles = css``
		let hoverStyles = css``
		let activeStyles = css``
		let focusStyles = css``
		let disabledStyles = css``

		// Базовые стили для disabled
		disabledStyles = css`
			background-color: ${variantColors.disabledBackground};
			color: ${variantColors.disabledText};
			border-color: transparent;
			box-shadow: none;
			cursor: not-allowed;
		`

		// Стили в зависимости от варианта
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
	label,
	onClick,
	variant = 'primary',
	size = 'medium',
	disabled = false,
}) => {
	const theme = useTheme()
	return (
		<StyledButton
			theme={theme}
			onClick={onClick}
			variant={variant}
			size={size}
			disabled={disabled}
		>
			{label}
		</StyledButton>
	)
}

export default Button
