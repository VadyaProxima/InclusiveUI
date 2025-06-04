import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React, { TextareaHTMLAttributes } from 'react'
import { Theme } from '../../theme'
import { colors } from '../../tokens/colors'
import {
	inputBorderRadius,
	inputPaddingHorizontal,
	inputPaddingVertical,
	inputShadowSpread,
	inputStrokeWidth,
} from '../../tokens/Input'
import { padding } from '../../tokens/spacing'
import { textAriaHeight, textAriaWidth } from '../../tokens/TextAria'
import {
	fontFamily,
	fontSizes,
	fontWeights,
	lineHeights,
} from '../../tokens/Typography'

// Типы пропсов текстового поля
export interface TextAreaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string
	status?: 'default' | 'success' | 'warning' | 'danger'
	device?: 'desktop' | 'tablet' | 'mobile'
}

// Получение токенов по устройству
const getDeviceValue = (token: any, device: 'desktop' | 'tablet' | 'mobile') =>
	token[device]

// Обертка для всего компонента
const TextAreaContainer = styled.div`
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

// Стилизованное текстовое поле
const StyledTextArea = styled.textarea<{
	status: 'default' | 'success' | 'warning' | 'danger'
	device: 'desktop' | 'tablet' | 'mobile'
}>`
	font-family: ${fontFamily.sans};
	font-size: ${({ device }) => fontSizes[device].bodyS};
	line-height: ${({ device }) => lineHeights[device].bodyS};
	font-weight: ${fontWeights.body};
	color: ${colors.light.gray[900]};

	width: ${({ device }) => getDeviceValue(textAriaWidth, device)};
	height: ${({ device }) => getDeviceValue(textAriaHeight, device)};

	padding-left: ${({ device }) =>
		`${getDeviceValue(inputPaddingHorizontal, device)}px`};
	padding-right: ${({ device }) =>
		`${getDeviceValue(inputPaddingHorizontal, device)}px`};
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
	resize: vertical;

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

export const TextArea: React.FC<TextAreaProps> = ({
	label,
	id,
	disabled = false,
	status = 'default',
	device = 'desktop',
	...props
}) => {
	const theme = useTheme() as Theme
	const uniqueId = React.useMemo(
		() => id || `textarea-${Math.random().toString(36).substring(2, 11)}`,
		[id]
	)

	return (
		<TextAreaContainer>
			{label && (
				<StyledLabel htmlFor={uniqueId} device={device} disabled={disabled}>
					{label}
				</StyledLabel>
			)}
			<StyledTextArea
				id={uniqueId}
				disabled={disabled}
				status={status}
				device={device}
				theme={theme}
				{...props}
			/>
		</TextAreaContainer>
	)
}
