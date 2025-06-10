import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, {
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import { ChevronDown } from 'react-feather'
import { colors } from '../../tokens/colors'
import { dropDownMenu } from '../../tokens/DropDownMenu'
import {
	inputBorderRadius,
	inputHorizontalGap,
	inputIconSize,
	inputPaddingHorizontal,
	inputPaddingVertical,
	inputShadowSpread,
	inputStrokeWidth,
} from '../../tokens/Input'
import { padding } from '../../tokens/spacing'
import {
	fontFamily,
	fontSizes,
	fontWeights,
	lineHeights,
} from '../../tokens/Typography'

// Типы пропсов для элемента списка
export interface DropdownOption {
	value: string
	label: string
}

// Типы пропсов для компонента
export interface DropdownMenuProps {
	options: DropdownOption[]
	value?: string
	defaultValue?: string
	onChange?: (value: string) => void
	leftIcon?: ReactNode
	label?: string
	placeholder?: string
	disabled?: boolean
}

// Обертка для всего компонента
const DropdownContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	position: relative;
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

// Обертка для дропдауна и иконок
const DropdownWrapper = styled.div`
	position: relative;
	display: inline-flex;
	align-items: center;
	width: 100%;
`

// Иконка внутри дропдауна
const IconWrapper = styled.span<{
	position: 'left' | 'right'
}>`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 50%;
	transform: translateY(-50%);
	color: ${colors.light.gray[900]};

	/* Mobile */
	width: ${inputIconSize.mobile};
	height: ${inputIconSize.mobile};
	${({ position }) =>
		position === 'left'
			? `left: ${inputPaddingHorizontal.mobile}px;`
			: `right: ${inputPaddingHorizontal.mobile}px; pointer-events: none;`}

	/* Tablet */
	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		width: ${inputIconSize.tablet};
		height: ${inputIconSize.tablet};
		${({ position }) =>
			position === 'left'
				? `left: ${inputPaddingHorizontal.tablet}px;`
				: `right: ${inputPaddingHorizontal.tablet}px; pointer-events: none;`}
	}

	/* Desktop */
	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		width: ${inputIconSize.desktop};
		height: ${inputIconSize.desktop};
		${({ position }) =>
			position === 'left'
				? `left: ${inputPaddingHorizontal.desktop}px;`
				: `right: ${inputPaddingHorizontal.desktop}px; pointer-events: none;`}
	}
`

// Стилизованный селектор
const StyledDropdownButton = styled.button<{
	hasLeftIcon: boolean
	isOpen: boolean
}>`
	font-family: ${fontFamily.sans};
	text-align: left;
	cursor: pointer;
	display: flex;
	align-items: center;
	border-style: solid;
	box-sizing: border-box;
	background-color: ${colors.light.neutral.white};
	outline: none;
	transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;

	/* Mobile */
	font-size: ${fontSizes.mobile.bodyS};
	line-height: ${lineHeights.mobile.bodyS};
	font-weight: ${fontWeights.body};
	width: ${dropDownMenu.mobile.width};
	height: ${dropDownMenu.mobile.height};
	border-radius: ${inputBorderRadius.mobile};
	border-width: ${inputStrokeWidth.mobile};
	padding-top: 0;
	padding-bottom: 0;
	padding-left: ${({ hasLeftIcon }) => {
		const basePadding = inputPaddingHorizontal.mobile
		if (hasLeftIcon) {
			const iconSize = inputIconSize.mobile.replace('px', '')
			const gap = inputHorizontalGap.mobile
			return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
		}
		return `${basePadding}px`
	}};
	padding-right: ${({ hasLeftIcon }) => {
		const basePadding = inputPaddingHorizontal.mobile
		const iconSize = inputIconSize.mobile.replace('px', '')
		const gap = inputHorizontalGap.mobile
		return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
	}};

	/* Tablet */
	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		font-size: ${fontSizes.tablet.bodyS};
		line-height: ${lineHeights.tablet.bodyS};
		width: ${dropDownMenu.tablet.width};
		height: ${dropDownMenu.tablet.height};
		border-radius: ${inputBorderRadius.tablet};
		border-width: ${inputStrokeWidth.tablet};
		padding-left: ${({ hasLeftIcon }) => {
			const basePadding = inputPaddingHorizontal.tablet
			if (hasLeftIcon) {
				const iconSize = inputIconSize.tablet.replace('px', '')
				const gap = inputHorizontalGap.tablet
				return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
			}
			return `${basePadding}px`
		}};
		padding-right: ${({ hasLeftIcon }) => {
			const basePadding = inputPaddingHorizontal.tablet
			const iconSize = inputIconSize.tablet.replace('px', '')
			const gap = inputHorizontalGap.tablet
			return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
		}};
	}

	/* Desktop */
	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		font-size: ${fontSizes.desktop.bodyS};
		line-height: ${lineHeights.desktop.bodyS};
		width: ${dropDownMenu.desktop.width};
		height: ${dropDownMenu.desktop.height};
		border-radius: ${inputBorderRadius.desktop};
		border-width: ${inputStrokeWidth.desktop};
		padding-left: ${({ hasLeftIcon }) => {
			const basePadding = inputPaddingHorizontal.desktop
			if (hasLeftIcon) {
				const iconSize = inputIconSize.desktop.replace('px', '')
				const gap = inputHorizontalGap.desktop
				return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
			}
			return `${basePadding}px`
		}};
		padding-right: ${({ hasLeftIcon }) => {
			const basePadding = inputPaddingHorizontal.desktop
			const iconSize = inputIconSize.desktop.replace('px', '')
			const gap = inputHorizontalGap.desktop
			return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
		}};
	}

	${({ theme, isOpen, disabled }) => {
		// Базовые стили
		const baseStyles = css`
			background-color: ${disabled
				? colors.light.gray[100]
				: colors.light.neutral.white};
			border-color: ${disabled
				? colors.light.gray[500]
				: isOpen
				? colors.light.blue[600]
				: colors.light.gray[500]};
			${disabled ? 'cursor: not-allowed;' : ''}
		`

		// Стили для hover
		const hoverStyles = !disabled
			? css`
					&:hover {
						border-color: ${isOpen
							? colors.light.blue[600]
							: colors.light.gray[400]};
					}
			  `
			: css``

		// Стили для focus
		const focusStyles = !disabled
			? css`
					&:focus-visible,
					&:focus {
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

// Выпадающий список
const DropdownList = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	max-height: 200px;
	overflow-y: auto;
	list-style: none;
	margin: 0;
	padding: 4px 0;
	background-color: ${colors.light.neutral.white};
	border: 1px solid ${colors.light.gray[400]};
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	z-index: 10;
	margin-top: 4px;

	/* Mobile */
	width: ${dropDownMenu.mobile.width};
	border-radius: ${inputBorderRadius.mobile};

	/* Tablet */
	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		width: ${dropDownMenu.tablet.width};
		border-radius: ${inputBorderRadius.tablet};
	}

	/* Desktop */
	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		width: ${dropDownMenu.desktop.width};
		border-radius: ${inputBorderRadius.desktop};
	}
`

// Элемент списка
const DropdownItem = styled.li<{
	isActive: boolean
}>`
	cursor: pointer;
	font-family: ${fontFamily.sans};
	font-weight: ${fontWeights.body};
	color: ${colors.light.gray[900]};

	/* Mobile */
	font-size: ${fontSizes.mobile.bodyS};
	line-height: ${lineHeights.mobile.bodyS};
	padding: ${inputPaddingVertical.mobile}px ${inputPaddingHorizontal.mobile}px;

	/* Tablet */
	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		font-size: ${fontSizes.tablet.bodyS};
		line-height: ${lineHeights.tablet.bodyS};
		padding: ${inputPaddingVertical.tablet}px ${inputPaddingHorizontal.tablet}px;
	}

	/* Desktop */
	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		font-size: ${fontSizes.desktop.bodyS};
		line-height: ${lineHeights.desktop.bodyS};
		padding: ${inputPaddingVertical.desktop}px
			${inputPaddingHorizontal.desktop}px;
	}

	${({ isActive }) =>
		isActive &&
		css`
			background-color: ${colors.light.gray[200]};
		`}

	&:hover {
		background-color: ${colors.light.gray[100]};
	}
`

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
	options,
	value,
	defaultValue,
	onChange,
	leftIcon,
	label,
	placeholder = 'Выберите...',
	disabled = false,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState(
		value || defaultValue || ''
	)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const buttonRef = useRef<HTMLButtonElement>(null)

	// Update selected value if `value` prop changes from outside
	useEffect(() => {
		if (value !== undefined) {
			setSelectedValue(value)
		}
	}, [value])

	// Close dropdown when clicking outside
	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false)
			}
		},
		[dropdownRef]
	)

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [handleClickOutside])

	const toggleDropdown = () => {
		if (!disabled) {
			setIsOpen(!isOpen)
		}
	}

	const handleOptionClick = (optionValue: string) => {
		setSelectedValue(optionValue)
		setIsOpen(false)
		if (onChange) {
			onChange(optionValue)
		}
	}

	const getDisplayValue = () => {
		const selectedOption = options.find(
			option => option.value === selectedValue
		)
		return selectedOption ? selectedOption.label : placeholder
	}

	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Escape') {
			setIsOpen(false)
			buttonRef.current?.focus()
		}
		// Basic keyboard navigation can be added here
	}

	return (
		<DropdownContainer ref={dropdownRef}>
			{label && <StyledLabel disabled={disabled}>{label}</StyledLabel>}
			<DropdownWrapper>
				{leftIcon && <IconWrapper position="left">{leftIcon}</IconWrapper>}
				<StyledDropdownButton
					ref={buttonRef}
					onClick={toggleDropdown}
					onKeyDown={handleKeyDown}
					disabled={disabled}
					hasLeftIcon={!!leftIcon}
					isOpen={isOpen}
					aria-haspopup="listbox"
					aria-expanded={isOpen}
				>
					{getDisplayValue()}
				</StyledDropdownButton>
				<IconWrapper position="right">
					<ChevronDown
						size={16}
						style={{
							transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
							transition: 'transform 0.2s',
						}}
					/>
				</IconWrapper>
			</DropdownWrapper>
			{isOpen && (
				<DropdownList role="listbox" onKeyDown={handleKeyDown}>
					{options.map(option => (
						<DropdownItem
							key={option.value}
							onClick={() => handleOptionClick(option.value)}
							isActive={option.value === selectedValue}
							role="option"
							aria-selected={option.value === selectedValue}
							tabIndex={0}
						>
							{option.label}
						</DropdownItem>
					))}
				</DropdownList>
			)}
		</DropdownContainer>
	)
}
