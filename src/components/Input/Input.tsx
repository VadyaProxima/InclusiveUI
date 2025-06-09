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
	device: 'desktop' | 'tablet' | 'mobile'
	disabled?: boolean
}>`
	font-family: ${fontFamily.sans};
	font-size: ${({ device }) => fontSizes[device].label};
	line-height: ${({ device }) => lineHeights[device].label};
	font-weight: ${fontWeights.label};
	color: ${({ disabled, theme }) =>
		disabled
			? theme.colors.input.disabled.text
			: theme.colors.input.default.label};
	margin-bottom: ${({ device }) =>
		`${getDeviceValue(padding, device).vertical.tiny}px`};
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
	device: 'desktop' | 'tablet' | 'mobile'
}>`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 50%;
	transform: translateY(-50%);
	${({ position, device }) => {
		if (position === 'left') {
			return css`
				left: ${getDeviceValue(inputPaddingHorizontal, device)}px;
			`
		} else {
			return css`
				right: ${getDeviceValue(inputPaddingHorizontal, device)}px;
			`
		}
	}}
	width: ${({ device }) => getDeviceValue(inputIconSize, device)};
	height: ${({ device }) => getDeviceValue(inputIconSize, device)};
	pointer-events: none;
	color: ${({ theme }) => theme.colors.input.default.text};
`

// Стилизованный инпут
const StyledInput = styled.input<{
	hasLeftIcon: boolean
	hasRightIcon: boolean
	status: 'default' | 'success' | 'warning' | 'danger'
	device: 'desktop' | 'tablet' | 'mobile'
}>`
	font-family: ${fontFamily.sans};
	font-size: ${({ device }) => fontSizes[device].bodyS};
	line-height: ${({ device }) => lineHeights[device].bodyS};
	font-weight: ${fontWeights.body};
	color: ${({ theme }) => theme.colors.input.default.text};

	width: ${({ device }) => getDeviceValue(inputWidth, device)};
	height: ${({ device }) => getDeviceValue(inputHeight, device)}px;

	padding-left: ${({ device, hasLeftIcon }) => {
		const basePadding = getDeviceValue(inputPaddingHorizontal, device)
		if (hasLeftIcon) {
			const iconSize = getDeviceValue(inputIconSize, device).replace('px', '')
			const gap = getDeviceValue(inputHorizontalGap, device)
			return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
		}
		return `${basePadding}px`
	}};

	padding-right: ${({ device, hasRightIcon }) => {
		const basePadding = getDeviceValue(inputPaddingHorizontal, device)
		if (hasRightIcon) {
			const iconSize = getDeviceValue(inputIconSize, device).replace('px', '')
			const gap = getDeviceValue(inputHorizontalGap, device)
			return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
		}
		return `${basePadding}px`
	}};

	padding-top: ${({ device }) =>
		`${getDeviceValue(inputPaddingVertical, device)}px`};
	padding-bottom: ${({ device }) =>
		`${getDeviceValue(inputPaddingVertical, device)}px`};

	border-radius: ${({ device }) =>
		`${getDeviceValue(inputBorderRadius, device)}`};
	border-width: ${({ device }) => getDeviceValue(inputStrokeWidth, device)};
	border-style: solid;
	box-sizing: border-box;

	outline: none;
	transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;

	&::placeholder {
		color: ${({ theme }) => theme.colors.input.default.placeholder};
		opacity: 1;
		font-size: ${({ device }) => fontSizes[device].bodyS};
		line-height: ${({ device }) => lineHeights[device].bodyS};
	}

	${({ theme, status, disabled, device }) => {
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
						box-shadow: 0 0 0 ${getDeviceValue(inputShadowSpread, device)}
							${i.focus.shadow};
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
				<StyledLabel
					id={labelId}
					htmlFor={uniqueId}
					device={device}
					disabled={disabled}
				>
					{label}
				</StyledLabel>
			)}
			<InputWrapper>
				{leftIcon && (
					<IconWrapper position="left" device={device}>
						{leftIcon}
					</IconWrapper>
				)}
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
				{rightIcon && (
					<IconWrapper position="right" device={device}>
						{rightIcon}
					</IconWrapper>
				)}
			</InputWrapper>
		</InputContainer>
	)
}
