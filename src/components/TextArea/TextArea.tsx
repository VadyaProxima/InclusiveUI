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

// Типы пропсов для TextArea
export interface TextAreaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	status?: 'default' | 'success' | 'warning' | 'danger'
	label?: string
	id?: string
	'aria-label': string
	'aria-describedby'?: string
	'aria-invalid'?: boolean | 'false' | 'true' | 'grammar' | 'spelling'
	'aria-required'?: boolean | 'false' | 'true'
}

// Обертка для всего компонента
const TextAreaContainer = styled.div`
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
	color: ${({ disabled }) =>
		disabled ? colors.light.gray[400] : colors.light.gray[600]};
	margin-bottom: ${padding.mobile.vertical.tiny}px;

	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		font-size: ${fontSizes.tablet.label};
		line-height: ${lineHeights.tablet.label};
		margin-bottom: ${padding.tablet.vertical.tiny}px;
	}

	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		font-size: ${fontSizes.desktop.label};
		line-height: ${lineHeights.desktop.label};
		margin-bottom: ${padding.desktop.vertical.tiny}px;
	}
`

// Стилизованное текстовое поле
const StyledTextArea = styled.textarea<{
	status: 'default' | 'success' | 'warning' | 'danger'
}>`
	font-family: ${fontFamily.sans};
	color: ${colors.light.gray[900]};
	border-style: solid;
	box-sizing: border-box;
	outline: none;
	transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;
	resize: vertical;

	/* Mobile styles */
	font-size: ${fontSizes.mobile.bodyS};
	line-height: ${lineHeights.mobile.bodyS};
	font-weight: ${fontWeights.body};
	width: ${textAriaWidth.mobile};
	height: ${textAriaHeight.mobile};
	padding: ${inputPaddingVertical.mobile}px ${inputPaddingHorizontal.mobile}px;
	border-radius: ${inputBorderRadius.mobile};
	border-width: ${inputStrokeWidth.mobile};

	&::placeholder {
		color: ${colors.light.gray[900]};
		opacity: 0.5;
		font-size: ${fontSizes.mobile.bodyS};
		line-height: ${lineHeights.mobile.bodyS};
	}

	/* Tablet styles */
	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		font-size: ${fontSizes.tablet.bodyS};
		line-height: ${lineHeights.tablet.bodyS};
		width: ${textAriaWidth.tablet};
		height: ${textAriaHeight.tablet};
		padding: ${inputPaddingVertical.tablet}px ${inputPaddingHorizontal.tablet}px;
		border-radius: ${inputBorderRadius.tablet};
		border-width: ${inputStrokeWidth.tablet};

		&::placeholder {
			font-size: ${fontSizes.tablet.bodyS};
			line-height: ${lineHeights.tablet.bodyS};
		}
	}

	/* Desktop styles */
	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		font-size: ${fontSizes.desktop.bodyS};
		line-height: ${lineHeights.desktop.bodyS};
		width: ${textAriaWidth.desktop};
		height: ${textAriaHeight.desktop};
		padding: ${inputPaddingVertical.desktop}px
			${inputPaddingHorizontal.desktop}px;
		border-radius: ${inputBorderRadius.desktop};
		border-width: ${inputStrokeWidth.desktop};

		&::placeholder {
			font-size: ${fontSizes.desktop.bodyS};
			line-height: ${lineHeights.desktop.bodyS};
		}
	}

	${({ theme, status, disabled }) => {
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
						box-shadow: 0 0 0 ${inputShadowSpread.mobile}
							rgba(0, 143, 243, 0.25);

						@media (min-width: ${theme.breakpoints.tablet}) {
							box-shadow: 0 0 0 ${inputShadowSpread.tablet}
								rgba(0, 143, 243, 0.25);
						}

						@media (min-width: ${theme.breakpoints.desktop}) {
							box-shadow: 0 0 0 ${inputShadowSpread.desktop}
								rgba(0, 143, 243, 0.25);
						}
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
	disabled = false,
	status = 'default',
	label,
	id,
	'aria-label': ariaLabel,
	'aria-describedby': ariaDescribedBy,
	'aria-invalid': ariaInvalid,
	'aria-required': ariaRequired,
	...props
}) => {
	const theme = useTheme() as Theme
	const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`

	return (
		<TextAreaContainer>
			{label && (
				<StyledLabel htmlFor={textareaId} disabled={disabled}>
					{label}
				</StyledLabel>
			)}
			<StyledTextArea
				id={textareaId}
				disabled={disabled}
				status={status}
				aria-label={ariaLabel}
				aria-describedby={ariaDescribedBy}
				aria-invalid={ariaInvalid}
				aria-required={ariaRequired}
				theme={theme}
				{...props}
			/>
		</TextAreaContainer>
	)
}

export default TextArea
