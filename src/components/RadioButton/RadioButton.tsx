import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Theme } from '../../theme'
import { colors } from '../../tokens/colors'
import {
	radioButtonBorderRadius,
	radioButtonBorderWidth,
	radioButtonFocusShadowSpread,
	radioButtonInnerCircleSize,
	radioButtonSize,
} from '../../tokens/RadioButton'
import {
	fontFamily,
	fontSizes,
	fontWeights,
	lineHeights,
} from '../../tokens/Typography'

// Определяем типы пропсов
interface RadioButtonProps {
	checked?: boolean
	disabled?: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	device?: 'desktop' | 'tablet' | 'mobile'
	label?: string
	id?: string
	name?: string
	value?: string
}

// Интерфейс для группы радиокнопок
interface RadioButtonGroupProps {
	children: React.ReactNode
	direction?: 'horizontal' | 'vertical'
}

// Получение токенов по устройству
const getDeviceValue = (token: any, device: 'desktop' | 'tablet' | 'mobile') =>
	token[device]

// Основная обертка для радиокнопки
const StyledWrapper = styled.label<{ disabled?: boolean }>`
	display: inline-flex;
	align-items: center;
	cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
	user-select: none;
`

// Стилизованный input с использованием встроенного radio
const StyledRadioButton = styled.input<{
	device: 'desktop' | 'tablet' | 'mobile'
}>`
	appearance: none;
	-webkit-appearance: none;
	margin: 0;
	width: ${radioButtonSize};
	height: ${radioButtonSize};
	border-radius: ${radioButtonBorderRadius};
	border-width: ${radioButtonBorderWidth};
	border-style: solid;
	outline: none;
	flex-shrink: 0;

	position: relative;
	transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;

	/* Круг внутри радиокнопки при checked состоянии */
	&:checked::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		width: ${radioButtonInnerCircleSize};
		height: ${radioButtonInnerCircleSize};
		background-color: currentColor;
		border-radius: 50%;
		transform: translate(-50%, -50%);
	}

	${({ theme, checked, disabled }) => {
		// Базовые стили
		const baseStyles = css`
			background-color: ${colors.light.neutral.white};
			border-color: ${disabled
				? colors.light.gray[200]
				: checked
				? colors.light.blue[600]
				: colors.light.gray[400]};
			color: ${disabled
				? colors.light.gray[200]
				: checked
				? colors.light.blue[600]
				: colors.light.gray[400]};
		`

		// Стили для hover
		const hoverStyles = css`
			&:hover:not(:disabled) {
				border-color: ${checked
					? colors.light.blue[500]
					: colors.light.gray[300]};
				color: ${checked ? colors.light.blue[500] : colors.light.gray[300]};
			}
		`

		// Стили для focus
		const focusStyles = css`
			&:focus-visible {
				border-color: ${disabled
					? colors.light.gray[200]
					: colors.light.blue[700]};
				color: ${disabled ? colors.light.gray[200] : colors.light.blue[700]};
				box-shadow: 0 0 0 ${radioButtonFocusShadowSpread}
					rgba(0, 143, 243, 0.25);
			}
		`

		// Стили для disabled
		const disabledStyles = disabled
			? css`
					background-color: ${colors.light.gray[100]};
					border-color: ${colors.light.gray[200]};
					cursor: not-allowed;
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

// Компонент с паддингами для радиокнопки
const RadioButtonPadding = styled.div<{
	device: 'desktop' | 'tablet' | 'mobile'
}>`
	padding: ${({ device }) => (device === 'desktop' ? '10px' : '12px')};
	display: flex;
	align-items: center;
	justify-content: center;
`

// Стили для лейбла радиокнопки
const StyledLabel = styled.span<{
	device: 'desktop' | 'tablet' | 'mobile'
	disabled?: boolean
}>`
	font-family: ${fontFamily.sans};
	font-size: ${({ device }) => fontSizes[device].paragraph};
	line-height: ${({ device }) => lineHeights[device].paragraph};
	font-weight: ${fontWeights.paragraph};
	color: ${({ disabled }) =>
		disabled ? colors.light.gray[500] : colors.light.gray[1000]};
`

// Стилизованная группа радиокнопок
const StyledRadioButtonGroup = styled.div<{
	direction: 'horizontal' | 'vertical'
}>`
	display: flex;
	flex-direction: ${({ direction }) =>
		direction === 'horizontal' ? 'row' : 'column'};
	flex-wrap: ${({ direction }) =>
		direction === 'horizontal' ? 'wrap' : 'nowrap'};
`

export const RadioButton: React.FC<RadioButtonProps> = ({
	checked = false,
	disabled = false,
	onChange,
	device = 'desktop',
	label,
	id,
	name,
	value,
	...rest
}) => {
	const theme = useTheme() as Theme
	const uniqueId = React.useMemo(
		() => id || `radio-${Math.random().toString(36).substring(2, 11)}`,
		[id]
	)

	return (
		<StyledWrapper disabled={disabled} htmlFor={uniqueId}>
			<RadioButtonPadding device={device}>
				<StyledRadioButton
					type="radio"
					checked={checked}
					disabled={disabled}
					onChange={onChange}
					device={device}
					theme={theme}
					id={uniqueId}
					name={name}
					value={value}
					{...rest}
				/>
			</RadioButtonPadding>
			{label && (
				<StyledLabel device={device} disabled={disabled}>
					{label}
				</StyledLabel>
			)}
		</StyledWrapper>
	)
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
	children,
	direction = 'vertical',
}) => {
	return (
		<StyledRadioButtonGroup direction={direction}>
			{children}
		</StyledRadioButtonGroup>
	)
}
