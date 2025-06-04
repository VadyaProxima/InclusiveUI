import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React, { InputHTMLAttributes, ReactNode } from 'react'
import { Theme } from '../../theme'
import { colors } from '../../tokens/colors'
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
	color: ${({ disabled }) =>
		disabled ? colors.light.gray[400] : colors.light.gray[600]};
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
	color: ${colors.light.gray[900]};
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
	color: ${colors.light.gray[900]};

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
		`${getDeviceValue(inputBorderRadius, device)}px`};
	border-width: ${({ device }) => getDeviceValue(inputStrokeWidth, device)};
	border-style: solid;
	box-sizing: border-box;

	outline: none;
	transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;

	&::placeholder {
		color: ${colors.light.gray[900]};
		opacity: 0.5;
		font-size: ${({ device }) => fontSizes[device].bodyS};
		line-height: ${({ device }) => lineHeights[device].bodyS};
	}

	${({ theme, status, disabled, device }) => {
		// Базовые стили для разных статусов
		const getBorderColor = () => {
			if (disabled) return colors.light.gray[500]

			switch (status) {
				case 'success':
					return colors.light.green[600]
				case 'warning':
					return colors.light.gold[300]
				case 'danger':
					return colors.light.red[600]
				default:
					return colors.light.gray[500]
			}
		}

		// Базовые стили
		const baseStyles = css`
			background-color: ${disabled
				? colors.light.gray[100]
				: colors.light.neutral.white};
			border-color: ${getBorderColor()};
			${disabled ? 'cursor: not-allowed;' : ''}
		`

		// Стили для hover
		const hoverStyles = !disabled
			? css`
					&:hover {
						border-color: ${status === 'default'
							? colors.light.gray[400]
							: getBorderColor()};
					}
			  `
			: css``

		// Стили для focus
		const focusStyles = !disabled
			? css`
					&:focus-visible {
						border-color: ${colors.light.blue[600]};
						box-shadow: 0 0 0 ${getDeviceValue(inputShadowSpread, device)}
							rgba(0, 143, 243, 0.25);
					}
			  `
			: css``

		// Стили для disabled
		const disabledStyles = disabled
			? css`
					color: ${colors.light.gray[400]};
					&::placeholder {
						color: ${colors.light.gray[400]};
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
	...props
}) => {
	const theme = useTheme() as Theme
	const hasLeftIcon = Boolean(leftIcon)
	const hasRightIcon = Boolean(rightIcon)
	const uniqueId = React.useMemo(
		() => id || `input-${Math.random().toString(36).substring(2, 11)}`,
		[id]
	)

	return (
		<InputContainer>
			{label && (
				<StyledLabel htmlFor={uniqueId} device={device} disabled={disabled}>
					{label}
				</StyledLabel>
			)}
			<InputWrapper>
				{hasLeftIcon && (
					<IconWrapper position="left" device={device}>
						{leftIcon}
					</IconWrapper>
				)}
				<StyledInput
					id={uniqueId}
					disabled={disabled}
					status={status}
					device={device}
					hasLeftIcon={hasLeftIcon}
					hasRightIcon={hasRightIcon}
					theme={theme}
					{...props}
				/>
				{hasRightIcon && (
					<IconWrapper position="right" device={device}>
						{rightIcon}
					</IconWrapper>
				)}
			</InputWrapper>
		</InputContainer>
	)
}
