import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import {
	checkboxBorderRadius,
	checkboxBorderWidth,
	checkboxFocusShadowSpread,
	checkboxSize,
} from '../../tokens/Checkbox'
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
	label?: string
	id?: string
}

// Интерфейс для группы чекбоксов
interface CheckboxGroupProps {
	children: React.ReactNode
	direction?: 'horizontal' | 'vertical'
}

// Основная обертка для чекбокса
const StyledWrapper = styled.label<{ disabled?: boolean }>`
	display: inline-flex;
	align-items: center;
	cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
	user-select: none;
`

// Стилизованный input с использованием встроенного чекбокса
const StyledCheckbox = styled.input<{
	indeterminate?: boolean
	checked?: boolean
	disabled?: boolean
}>`
	appearance: none;
	-webkit-appearance: none;
	margin: 0;
	width: ${checkboxSize.mobile};
	height: ${checkboxSize.mobile};
	border-radius: ${checkboxBorderRadius.mobile};
	border-width: ${checkboxBorderWidth.mobile};
	border-style: solid;
	outline: none;
	flex-shrink: 0;

	position: relative;
	transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;

	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		width: ${checkboxSize.tablet};
		height: ${checkboxSize.tablet};
		border-radius: ${checkboxBorderRadius.tablet};
		border-width: ${checkboxBorderWidth.tablet};
	}

	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		width: ${checkboxSize.desktop};
		height: ${checkboxSize.desktop};
		border-radius: ${checkboxBorderRadius.desktop};
		border-width: ${checkboxBorderWidth.desktop};
	}

	/* Имитация нативной галочки чекбокса без SVG */
	&:checked:not(:indeterminate)::after {
		content: '';
		position: absolute;
		left: 50%;
		top: 50%;
		width: 30%;
		height: 60%;
		border-style: solid;
		border-color: ${p => p.theme.colors.checkbox.checked.text};
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
		background-color: ${p => p.theme.colors.checkbox.checked.text};
		transform: translate(-50%, -50%);
	}

	${({ theme, checked, indeterminate, disabled }) => {
		const { checkbox: c } = theme.colors

		// Базовые стили
		const baseStyles = css`
			background-color: ${checked || indeterminate
				? c.checked.background
				: c.default.background};
			border-color: ${disabled
				? c.disabled.border
				: checked || indeterminate
				? c.checked.border
				: c.default.border};
		`

		// Стили для hover
		const hoverStyles = css`
			&:hover:not(:disabled) {
				border-color: ${c.hover.border};
				background-color: ${checked || indeterminate
					? c.checked.background
					: c.default.background};
			}
		`

		// Стили для focus
		const focusStyles = css`
			&:focus-visible {
				border-color: ${disabled ? c.disabled.border : c.hover.border};
				box-shadow: 0 0 0 ${checkboxFocusShadowSpread.mobile}
					${theme.colors.button.primary.focusShadow};

				@media (min-width: ${theme.breakpoints.tablet}) {
					box-shadow: 0 0 0 ${checkboxFocusShadowSpread.tablet}
						${theme.colors.button.primary.focusShadow};
				}
				@media (min-width: ${theme.breakpoints.desktop}) {
					box-shadow: 0 0 0 ${checkboxFocusShadowSpread.desktop}
						${theme.colors.button.primary.focusShadow};
				}
			}
		`

		// Стили для disabled
		const disabledStyles = disabled
			? css`
					background-color: ${c.disabled.background};
					border-color: ${c.disabled.border};
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
const CheckboxPadding = styled.div`
	padding: 12px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		padding: 10px;
	}
`

// Стили для лейбла чекбокса
const StyledLabel = styled.span<{
	disabled?: boolean
}>`
	font-family: ${fontFamily.sans};
	font-size: ${fontSizes.mobile.paragraph};
	line-height: ${lineHeights.mobile.paragraph};
	font-weight: ${fontWeights.paragraph};
	color: ${({ disabled, theme }) =>
		disabled ? theme.colors.text.Disabled : theme.colors.text.Base};

	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		font-size: ${fontSizes.tablet.paragraph};
		line-height: ${lineHeights.tablet.paragraph};
	}

	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		font-size: ${fontSizes.desktop.paragraph};
		line-height: ${lineHeights.desktop.paragraph};
	}
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
	label,
	id,
	...rest
}) => {
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
			<CheckboxPadding>
				<StyledCheckbox
					ref={checkboxRef}
					type="checkbox"
					checked={checked}
					disabled={disabled}
					onChange={onChange}
					indeterminate={indeterminate}
					id={uniqueId}
					{...rest}
				/>
			</CheckboxPadding>
			{label && <StyledLabel disabled={disabled}>{label}</StyledLabel>}
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
