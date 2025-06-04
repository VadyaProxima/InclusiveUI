import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Theme } from '../../theme'
import {
	checkboxBorderRadius,
	checkboxBorderWidth,
	checkboxFocusShadowSpread,
	checkboxSize,
} from '../../tokens/Checkbox'
import { colors } from '../../tokens/colors'
import {
	fontFamily,
	fontSizes,
	fontWeights,
	lineHeights,
} from '../../tokens/Typography'

// Определяем типы пропсов
interface CheckboxProps {
	checked?: boolean
	indeterminate?: boolean
	disabled?: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	device?: 'desktop' | 'tablet' | 'mobile'
	label?: string
	id?: string
}

// Интерфейс для группы чекбоксов
interface CheckboxGroupProps {
	children: React.ReactNode
	direction?: 'horizontal' | 'vertical'
}

// Получение токенов по устройству
const getDeviceValue = (token: any, device: 'desktop' | 'tablet' | 'mobile') =>
	token[device]

// Основная обертка для чекбокса
const StyledWrapper = styled.label<{ disabled?: boolean }>`
	display: inline-flex;
	align-items: center;
	cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
	user-select: none;
`

// Стилизованный input с использованием встроенного чекбокса
const StyledCheckbox = styled.input<{
	device: 'desktop' | 'tablet' | 'mobile'
	indeterminate?: boolean
}>`
	appearance: none;
	-webkit-appearance: none;
	margin: 0;
	width: ${p => getDeviceValue(checkboxSize, p.device)};
	height: ${p => getDeviceValue(checkboxSize, p.device)};
	border-radius: ${p => getDeviceValue(checkboxBorderRadius, p.device)};
	border-width: ${p => getDeviceValue(checkboxBorderWidth, p.device)};
	border-style: solid;
	outline: none;
	flex-shrink: 0;

	position: relative;
	transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;

	/* Имитация нативной галочки чекбокса без SVG */
	&:checked:not(:indeterminate)::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		width: 30%;
		height: 60%;
		border-style: solid;
		border-color: ${colors.light.neutral.white};
		border-width: 0 2px 2px 0;
		transform: translate(-50%, -60%) rotate(45deg);
	}

	/* Имитация горизонтальной линии для indeterminate */
	&:indeterminate::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		width: 10px;
		height: 2px;
		background-color: ${colors.light.neutral.white};
		transform: translate(-50%, -50%);
	}

	${({ theme, checked, indeterminate, disabled, device }) => {
		// Базовые стили
		const baseStyles = css`
			background-color: ${checked || indeterminate
				? colors.light.blue[600]
				: colors.light.neutral.white};
			border-color: ${disabled
				? colors.light.gray[200]
				: checked || indeterminate
				? colors.light.blue[600]
				: colors.light.gray[400]};
		`

		// Стили для hover
		const hoverStyles = css`
			&:hover:not(:disabled) {
				border-color: ${checked || indeterminate
					? colors.light.blue[500]
					: colors.light.gray[300]};
				background-color: ${checked || indeterminate
					? colors.light.blue[500]
					: colors.light.neutral.white};
			}
		`

		// Стили для focus
		const focusStyles = css`
			&:focus-visible {
				border-color: ${disabled
					? colors.light.gray[200]
					: colors.light.blue[700]};
				box-shadow: 0 0 0 ${getDeviceValue(checkboxFocusShadowSpread, device)}
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

// Компонент с паддингами для чекбокса
const CheckboxPadding = styled.div<{ device: 'desktop' | 'tablet' | 'mobile' }>`
	padding: ${({ device }) => (device === 'desktop' ? '10px' : '12px')};
	display: flex;
	align-items: center;
	justify-content: center;
`

// Стили для лейбла чекбокса
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

// Стилизованная группа чекбоксов
const StyledCheckboxGroup = styled.div<{
	direction: 'horizontal' | 'vertical'
}>`
	display: flex;
	flex-direction: ${({ direction }) =>
		direction === 'horizontal' ? 'row' : 'column'};
	flex-wrap: ${({ direction }) =>
		direction === 'horizontal' ? 'wrap' : 'nowrap'};

	& > label {
		${({ direction }) =>
			direction === 'horizontal'
				? css`
						margin-right: 8px;
						@media (min-width: 768px) {
							margin-right: 16px;
						}
						&:last-child {
							margin-right: 0;
						}
				  `
				: ''}
	}
`

export const Checkbox: React.FC<CheckboxProps> = ({
	checked = false,
	indeterminate = false,
	disabled = false,
	onChange,
	device = 'desktop',
	label,
	id,
	...rest
}) => {
	const theme = useTheme() as Theme
	const checkboxRef = React.useRef<HTMLInputElement>(null)
	const uniqueId = React.useMemo(
		() => id || `checkbox-${Math.random().toString(36).substring(2, 11)}`,
		[id]
	)

	// Управляем indeterminate через ref
	React.useEffect(() => {
		if (checkboxRef.current) {
			checkboxRef.current.indeterminate = indeterminate
		}
	}, [indeterminate])

	return (
		<StyledWrapper disabled={disabled} htmlFor={uniqueId}>
			<CheckboxPadding device={device}>
				<StyledCheckbox
					ref={checkboxRef}
					type="checkbox"
					checked={checked}
					disabled={disabled}
					onChange={onChange}
					device={device}
					indeterminate={indeterminate}
					theme={theme}
					id={uniqueId}
					{...rest}
				/>
			</CheckboxPadding>
			{label && (
				<StyledLabel device={device} disabled={disabled}>
					{label}
				</StyledLabel>
			)}
		</StyledWrapper>
	)
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
	children,
	direction = 'vertical',
}) => {
	return (
		<StyledCheckboxGroup direction={direction}>{children}</StyledCheckboxGroup>
	)
}
