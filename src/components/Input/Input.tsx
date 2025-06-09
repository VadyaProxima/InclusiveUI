import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React, { InputHTMLAttributes, ReactNode } from 'react'
import { Theme } from '../../theme'
import {
	inputBorderRadius,
	inputHeight,
	inputHorizontalGap,
	inputIconSize,
	inputPaddingHorizontal,
	inputPaddingVertical,
	inputShadowSpread,
	inputStrokeWidth,
	inputWidth,
} from '../../tokens/Input'
import { padding } from '../../tokens/spacing'
import {
	fontFamily,
	fontSizes,
	fontWeights,
	lineHeights,
} from '../../tokens/Typography'

// Типы пропсов инпута
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	leftIcon?: ReactNode
	rightIcon?: ReactNode
	label?: string
	status?: 'default' | 'success' | 'warning' | 'danger'
	device?: 'desktop' | 'tablet' | 'mobile'
	'aria-label': string
	'aria-describedby'?: string
	'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
	'aria-required'?: boolean | 'false' | 'true'
	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
}

// Получение токенов по устройству
const getDeviceValue = (token: any, device: 'desktop' | 'tablet' | 'mobile') =>
	token[device]

// Обертка для всего компонента
const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
`

// Стилизованный лейбл
const StyledLabel = styled.label<{
	disabled?: boolean
}>`
	font-family: ${fontFamily.sans};
	font-size: ${fontSizes.mobile.label};
	line-height: ${lineHeights.mobile.label};
	font-weight: ${fontWeights.label};
	color: ${({ disabled, theme }) =>
		disabled
			? theme.colors.input.disabled.text
			: theme.colors.input.default.label};
	margin-bottom: ${padding.mobile.vertical.tiny}px;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: ${fontSizes.tablet.label};
		line-height: ${lineHeights.tablet.label};
		margin-bottom: ${padding.tablet.vertical.tiny}px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		font-size: ${fontSizes.desktop.label};
		line-height: ${lineHeights.desktop.label};
		margin-bottom: ${padding.desktop.vertical.tiny}px;
	}
`

// Обертка для инпута и иконок
const InputWrapper = styled.div`
	position: relative;
	display: inline-flex;
	align-items: center;
	width: 100%;
`

// Иконка внутри инпута
const IconWrapper = styled.span<{
	position: 'left' | 'right'
}>`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 50%;
	transform: translateY(-50%);
	width: ${inputIconSize.mobile};
	height: ${inputIconSize.mobile};
	pointer-events: none;
	color: ${({ theme }) => theme.colors.input.default.text};

	${({ position }) => {
		if (position === 'left') {
			return css`
				left: ${inputPaddingHorizontal.mobile}px;
			`
		} else {
			return css`
				right: ${inputPaddingHorizontal.mobile}px;
			`
		}
	}}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		width: ${inputIconSize.tablet};
		height: ${inputIconSize.tablet};
		${({ position }) => {
			if (position === 'left') {
				return css`
					left: ${inputPaddingHorizontal.tablet}px;
				`
			} else {
				return css`
					right: ${inputPaddingHorizontal.tablet}px;
				`
			}
		}}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		width: ${inputIconSize.desktop};
		height: ${inputIconSize.desktop};
		${({ position }) => {
			if (position === 'left') {
				return css`
					left: ${inputPaddingHorizontal.desktop}px;
				`
			} else {
				return css`
					right: ${inputPaddingHorizontal.desktop}px;
				`
			}
		}}
	}
`

// Стилизованный инпут
const StyledInput = styled.input<{
	hasLeftIcon: boolean
	hasRightIcon: boolean
	status: 'default' | 'success' | 'warning' | 'danger'
	device: 'desktop' | 'tablet' | 'mobile'
}>`
	font-family: ${fontFamily.sans};
	font-size: ${fontSizes.mobile.bodyS};
	line-height: ${lineHeights.mobile.bodyS};
	font-weight: ${fontWeights.body};
	color: ${({ theme }) => theme.colors.input.default.text};

	width: ${inputWidth.mobile};
	height: ${inputHeight.mobile}px;

	padding-left: ${({ hasLeftIcon }) => {
		const basePadding = inputPaddingHorizontal.mobile
		if (hasLeftIcon) {
			const iconSize = inputIconSize.mobile.replace('px', '')
			const gap = inputHorizontalGap.mobile
			return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
		}
		return `${basePadding}px`
	}};

	padding-right: ${({ hasRightIcon }) => {
		const basePadding = inputPaddingHorizontal.mobile
		if (hasRightIcon) {
			const iconSize = inputIconSize.mobile.replace('px', '')
			const gap = inputHorizontalGap.mobile
			return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
		}
		return `${basePadding}px`
	}};

	padding-top: ${inputPaddingVertical.mobile}px;
	padding-bottom: ${inputPaddingVertical.mobile}px;

	border-radius: ${inputBorderRadius.mobile};
	border-width: ${inputStrokeWidth.mobile};
	border-style: solid;
	box-sizing: border-box;

	outline: none;
	transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;

	&::placeholder {
		color: ${({ theme }) => theme.colors.input.default.placeholder};
		opacity: 1;
		font-size: ${fontSizes.mobile.bodyS};
		line-height: ${lineHeights.mobile.bodyS};
	}

	/* Tablet */
	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: ${fontSizes.tablet.bodyS};
		line-height: ${lineHeights.tablet.bodyS};
		width: ${inputWidth.tablet};
		height: ${inputHeight.tablet}px;
		padding-left: ${({ hasLeftIcon }) => {
			const basePadding = inputPaddingHorizontal.tablet
			if (hasLeftIcon) {
				const iconSize = inputIconSize.tablet.replace('px', '')
				const gap = inputHorizontalGap.tablet
				return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
			}
			return `${basePadding}px`
		}};
		padding-right: ${({ hasRightIcon }) => {
			const basePadding = inputPaddingHorizontal.tablet
			if (hasRightIcon) {
				const iconSize = inputIconSize.tablet.replace('px', '')
				const gap = inputHorizontalGap.tablet
				return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
			}
			return `${basePadding}px`
		}};
		padding-top: ${inputPaddingVertical.tablet}px;
		padding-bottom: ${inputPaddingVertical.tablet}px;
		border-radius: ${inputBorderRadius.tablet};
		border-width: ${inputStrokeWidth.tablet};
		&::placeholder {
			font-size: ${fontSizes.tablet.bodyS};
			line-height: ${lineHeights.tablet.bodyS};
		}
	}

	/* Desktop */
	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		font-size: ${fontSizes.desktop.bodyS};
		line-height: ${lineHeights.desktop.bodyS};
		width: ${inputWidth.desktop};
		height: ${inputHeight.desktop}px;
		padding-left: ${({ hasLeftIcon }) => {
			const basePadding = inputPaddingHorizontal.desktop
			if (hasLeftIcon) {
				const iconSize = inputIconSize.desktop.replace('px', '')
				const gap = inputHorizontalGap.desktop
				return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
			}
			return `${basePadding}px`
		}};
		padding-right: ${({ hasRightIcon }) => {
			const basePadding = inputPaddingHorizontal.desktop
			if (hasRightIcon) {
				const iconSize = inputIconSize.desktop.replace('px', '')
				const gap = inputHorizontalGap.desktop
				return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
			}
			return `${basePadding}px`
		}};
		padding-top: ${inputPaddingVertical.desktop}px;
		padding-bottom: ${inputPaddingVertical.desktop}px;
		border-radius: ${inputBorderRadius.desktop};
		border-width: ${inputStrokeWidth.desktop};
		&::placeholder {
			font-size: ${fontSizes.desktop.bodyS};
			line-height: ${lineHeights.desktop.bodyS};
		}
	}

	${({ theme, status, disabled }) => {
		const { input: i } = theme.colors
		// Базовые стили для разных статусов
		const getBorderColor = () => {
			if (disabled) return i.disabled.border

			switch (status) {
				case 'success':
					return i.success.border
				case 'warning':
					return i.warning.border
				case 'danger':
					return i.error.border
				default:
					return i.default.border
			}
		}

		// Базовые стили
		const baseStyles = css`
			background-color: ${disabled
				? i.disabled.background
				: i.default.background};
			border-color: ${getBorderColor()};
			${disabled ? 'cursor: not-allowed;' : ''}
		`

		// Стили для hover
		const hoverStyles = !disabled
			? css`
					&:hover {
						border-color: ${status === 'default'
							? i.hover.border
							: getBorderColor()};
					}
			  `
			: css``

		// Стили для focus
		const focusStyles = !disabled
			? css`
					&:focus-visible {
						border-color: ${i.focus.border};
						box-shadow: 0 0 0 ${inputShadowSpread.mobile} ${i.focus.shadow};
					}
			  `
			: css``

		// Стили для disabled
		const disabledStyles = disabled
			? css`
					color: ${i.disabled.text};
					&::placeholder {
						color: ${i.disabled.text};
					}
			  `
			: css``

		return css`
			${baseStyles}
			${hoverStyles}
			${focusStyles}
			${disabledStyles}
		`
	}}
`

export const Input: React.FC<InputProps> = ({
	leftIcon,
	rightIcon,
	label,
	id,
	disabled = false,
	status = 'default',
	device = 'desktop',
	'aria-label': ariaLabel,
	'aria-describedby': ariaDescribedBy,
	'aria-invalid': ariaInvalid,
	'aria-required': ariaRequired,
	'aria-autocomplete': ariaAutocomplete,
	...props
}) => {
	const theme = useTheme() as Theme
	const hasLeftIcon = Boolean(leftIcon)
	const hasRightIcon = Boolean(rightIcon)
	const uniqueId = React.useMemo(
		() => id || `input-${Math.random().toString(36).substring(2, 11)}`,
		[id]
	)

	// Генерируем уникальный ID для label если он есть
	const labelId = label ? `${uniqueId}-label` : undefined

	// Автоматически устанавливаем aria-invalid на основе status
	const computedAriaInvalid = ariaInvalid ?? status === 'danger'

	return (
		<InputContainer>
			{label && (
				<StyledLabel id={labelId} htmlFor={uniqueId} disabled={disabled}>
					{label}
				</StyledLabel>
			)}
			<InputWrapper>
				{leftIcon && <IconWrapper position="left">{leftIcon}</IconWrapper>}
				<StyledInput
					id={uniqueId}
					disabled={disabled}
					hasLeftIcon={hasLeftIcon}
					hasRightIcon={hasRightIcon}
					status={status}
					device={device}
					aria-label={ariaLabel}
					aria-labelledby={label ? labelId : undefined}
					aria-describedby={ariaDescribedBy}
					aria-invalid={computedAriaInvalid}
					aria-required={ariaRequired}
					aria-autocomplete={ariaAutocomplete}
					aria-disabled={disabled}
					{...props}
				/>
				{rightIcon && <IconWrapper position="right">{rightIcon}</IconWrapper>}
			</InputWrapper>
		</InputContainer>
	)
}
