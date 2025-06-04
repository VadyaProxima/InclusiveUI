import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React, {
	ReactNode,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react'
import { ChevronDown } from 'react-feather'
import { Theme } from '../../theme'
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
	device?: 'desktop' | 'tablet' | 'mobile'
}

// Получение токенов по устройству
const getDeviceValue = (token: any, device: 'desktop' | 'tablet' | 'mobile') =>
	token[device]

// Обертка для всего компонента
const DropdownContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: fit-content;
	position: relative;
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
				pointer-events: none;
			`
		}
	}}
	width: ${({ device }) => getDeviceValue(inputIconSize, device)};
	height: ${({ device }) => getDeviceValue(inputIconSize, device)};
	color: ${colors.light.gray[900]};
`

// Стилизованный селектор
const StyledDropdownButton = styled.button<{
	hasLeftIcon: boolean
	device: 'desktop' | 'tablet' | 'mobile'
	isOpen: boolean
}>`
	font-family: ${fontFamily.sans};
	font-size: ${({ device }) => fontSizes[device].bodyS};
	line-height: ${({ device }) => lineHeights[device].bodyS};
	font-weight: ${fontWeights.body};
	color: ${colors.light.gray[900]};
	text-align: left;
	cursor: pointer;
	display: flex;
	align-items: center;

	width: ${({ device }) => getDeviceValue(dropDownMenu, device).width};
	height: ${({ device }) => getDeviceValue(dropDownMenu, device).height};

	padding-left: ${({ device, hasLeftIcon }) => {
		const basePadding = getDeviceValue(inputPaddingHorizontal, device)
		if (hasLeftIcon) {
			const iconSize = getDeviceValue(inputIconSize, device).replace('px', '')
			const gap = getDeviceValue(inputHorizontalGap, device)
			return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
		}
		return `${basePadding}px`
	}};

	padding-right: ${({ device }) => {
		const basePadding = getDeviceValue(inputPaddingHorizontal, device)
		const iconSize = getDeviceValue(inputIconSize, device).replace('px', '')
		const gap = getDeviceValue(inputHorizontalGap, device)
		return `calc(${basePadding}px + ${iconSize}px + ${gap}px)`
	}};

	padding-top: 0;
	padding-bottom: 0;

	border-radius: ${({ device }) =>
		`${getDeviceValue(inputBorderRadius, device)}px`};
	border-width: ${({ device }) => getDeviceValue(inputStrokeWidth, device)};
	border-style: solid;
	box-sizing: border-box;
	background-color: ${colors.light.neutral.white};

	outline: none;
	transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s;

	${({ theme, isOpen, disabled, device }) => {
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
					&:focus-visible {
						border-color: ${colors.light.blue[600]};
						box-shadow: 0 0 0 ${getDeviceValue(inputShadowSpread, device)}
							rgba(0, 143, 243, 0.25);
					}
					&:focus {
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
const DropdownList = styled.ul<{
	device: 'desktop' | 'tablet' | 'mobile'
}>`
	position: absolute;
	top: 100%;
	left: 0;
	width: ${({ device }) => getDeviceValue(dropDownMenu, device).width};
	max-height: 200px;
	overflow-y: auto;
	list-style: none;
	margin: 0;
	padding: 4px 0;
	background-color: ${colors.light.neutral.white};
	border: 1px solid ${colors.light.gray[400]};
	border-radius: ${({ device }) =>
		`${getDeviceValue(inputBorderRadius, device)}px`};
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	z-index: 10;
	margin-top: 4px;
`

// Элемент списка
const DropdownItem = styled.li<{
	isActive: boolean
	device: 'desktop' | 'tablet' | 'mobile'
}>`
	padding: ${({ device }) =>
		`${getDeviceValue(inputPaddingVertical, device)}px ${getDeviceValue(
			inputPaddingHorizontal,
			device
		)}px`};
	cursor: pointer;
	font-family: ${fontFamily.sans};
	font-size: ${({ device }) => fontSizes[device].bodyS};
	line-height: ${({ device }) => lineHeights[device].bodyS};
	background-color: ${({ isActive }) =>
		isActive ? colors.light.gray[200] : 'transparent'};

	&:hover {
		background-color: ${colors.light.gray[200]};
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
	device = 'desktop',
}) => {
	const theme = useTheme() as Theme
	const [isOpen, setIsOpen] = useState(false)
	const [selectedValue, setSelectedValue] = useState(
		value || defaultValue || ''
	)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const hasLeftIcon = Boolean(leftIcon)
	const uniqueId = React.useMemo(
		() => `dropdown-${Math.random().toString(36).substring(2, 11)}`,
		[]
	)

	// Обновление выбранного значения при изменении value извне
	useEffect(() => {
		if (value !== undefined) {
			setSelectedValue(value)
		}
	}, [value])

	// Отображение текущего выбранного элемента
	const displayValue = React.useMemo(() => {
		if (!selectedValue) return placeholder
		const option = options.find(opt => opt.value === selectedValue)
		return option ? option.label : placeholder
	}, [selectedValue, options, placeholder])

	// Обработчик клика по элементу списка
	const handleOptionClick = (optionValue: string) => {
		setSelectedValue(optionValue)
		setIsOpen(false)
		if (onChange) {
			onChange(optionValue)
		}
	}

	// Закрытие списка при клике вне компонента
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

	// Добавляем и удаляем обработчик клика при открытии/закрытии списка
	useEffect(() => {
		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen, handleClickOutside])

	// Обработчик нажатия клавиш
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (disabled) return

		if (event.key === 'Escape') {
			setIsOpen(false)
		} else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
			event.preventDefault()
			if (!isOpen) {
				setIsOpen(true)
				return
			}

			const currentIndex = options.findIndex(opt => opt.value === selectedValue)
			let newIndex = currentIndex

			if (event.key === 'ArrowDown') {
				newIndex = currentIndex < options.length - 1 ? currentIndex + 1 : 0
			} else {
				newIndex = currentIndex > 0 ? currentIndex - 1 : options.length - 1
			}

			const newValue = options[newIndex]?.value
			if (newValue) {
				setSelectedValue(newValue)
				if (onChange) {
					onChange(newValue)
				}
			}
		} else if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault()
			setIsOpen(!isOpen)
		}
	}

	return (
		<DropdownContainer ref={dropdownRef}>
			{label && (
				<StyledLabel htmlFor={uniqueId} device={device} disabled={disabled}>
					{label}
				</StyledLabel>
			)}
			<DropdownWrapper>
				{hasLeftIcon && (
					<IconWrapper position="left" device={device}>
						{leftIcon}
					</IconWrapper>
				)}
				<StyledDropdownButton
					id={uniqueId}
					type="button"
					disabled={disabled}
					device={device}
					hasLeftIcon={hasLeftIcon}
					isOpen={isOpen}
					onClick={() => !disabled && setIsOpen(!isOpen)}
					onKeyDown={handleKeyDown}
					aria-haspopup="listbox"
					aria-expanded={isOpen}
				>
					{displayValue}
				</StyledDropdownButton>
				<IconWrapper position="right" device={device}>
					<ChevronDown size={parseInt(getDeviceValue(inputIconSize, device))} />
				</IconWrapper>
				{isOpen && !disabled && (
					<DropdownList device={device} role="listbox">
						{options.map(option => (
							<DropdownItem
								key={option.value}
								isActive={option.value === selectedValue}
								device={device}
								onClick={() => handleOptionClick(option.value)}
								role="option"
								aria-selected={option.value === selectedValue}
							>
								{option.label}
							</DropdownItem>
						))}
					</DropdownList>
				)}
			</DropdownWrapper>
		</DropdownContainer>
	)
}
