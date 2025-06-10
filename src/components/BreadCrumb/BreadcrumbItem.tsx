import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ReactNode, useState } from 'react'
import { Theme } from '../../theme'
import { padding as spacingToken } from '../../tokens/spacing'
import Typography from '../Typography/Typography'

// Иконка для хлебных крошек
const HomeIcon: React.FC<{ isActive?: boolean; theme: Theme }> = ({
	isActive = false,
	theme,
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill="none"
	>
		<path
			d="M15.7097 8.88761L9.7428 2.57312L9.34285 2.14965C9.25172 2.0538 9.12848 2 9.00003 2C8.87158 2 8.74834 2.0538 8.65721 2.14965L2.29038 8.88761C2.197 8.9861 2.1232 9.10339 2.07334 9.23256C2.02348 9.36174 1.99856 9.50019 2.00006 9.63973C2.00624 10.2153 2.4587 10.6747 3.00226 10.6747H3.65856V16H14.3415V10.6747H15.0117C15.2758 10.6747 15.5244 10.5652 15.7112 10.3673C15.8032 10.2702 15.8761 10.1548 15.9257 10.0276C15.9753 9.90048 16.0005 9.76419 16 9.62665C16 9.34869 15.8965 9.08545 15.7097 8.88761V8.88761ZM9.86479 14.8228H8.13526V11.4873H9.86479V14.8228ZM13.2297 9.49748V14.8228H10.8531V11.0949C10.8531 10.7336 10.5767 10.4409 10.2354 10.4409H7.76465C7.42338 10.4409 7.14696 10.7336 7.14696 11.0949V14.8228H4.7704V9.49748H3.28795L9.00157 3.45277L9.35829 3.83046L14.7137 9.49748H13.2297Z"
			fill={isActive ? theme.colors.gray[1000] : theme.colors.gray[800]}
		/>
	</svg>
)

// Иконка стрелки
const ChevronIcon: React.FC<{
	isActive?: boolean
	isOpen?: boolean
	theme: Theme
}> = ({ isActive = false, isOpen = false, theme }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill="none"
		style={{
			transform: `rotate(${isOpen ? '180deg' : '0deg'})`,
			transition: 'transform 0.2s ease-in-out',
		}}
	>
		<path
			d="M9.00002 10.0125L13.0125 6L14 6.9875L9.00002 12L4 6.9875L4.98752 6L9.00002 10.0125Z"
			fill={isActive ? theme.colors.gray[1000] : theme.colors.gray[800]}
		/>
	</svg>
)

// Типы для пропсов
export interface BreadcrumbItemProps {
	/** Текст элемента */
	children?: ReactNode
	/** Ссылка */
	href?: string
	/** Активный элемент */
	isActive?: boolean
	/** Только иконка */
	iconOnly?: boolean
	/** Показывать стрелку дропдауна */
	hasDropdown?: boolean
	/** Опции для выпадающего меню */
	dropdownOptions?: Array<{ value: string; label: string }>
	/** Обработчик клика */
	onClick?: () => void
}

// Стилизованная обертка
const ItemWrapper = styled.div<{
	isInteractive?: boolean
	theme: Theme
}>`
	display: flex;
	align-items: center;
	position: relative;
	cursor: ${props => (props.isInteractive ? 'pointer' : 'default')};
	padding: ${spacingToken.mobile.horizontal.tiny}px;

	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		padding: ${spacingToken.tablet.horizontal.tiny}px;
	}

	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		padding: ${spacingToken.desktop.horizontal.tiny}px;
	}
`

// Стилизованный сепаратор
const Separator = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 6px;
	width: 30px;
	height: 30px;
`

// Стилизованная ссылка
const StyledLink = styled.a<{
	isActive?: boolean
	theme: Theme
}>`
	text-decoration: none;
	display: flex;
	align-items: center;
	color: inherit;
	padding: ${spacingToken.mobile.horizontal.tiny}px;

	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		padding: ${spacingToken.tablet.horizontal.tiny}px;
	}

	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		padding: ${spacingToken.desktop.horizontal.tiny}px;
	}

	&:hover {
		text-decoration: none;
	}
`

// Стилизованная иконка
const IconWrapper = styled.div<{
	clickable?: boolean
	theme: Theme
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: ${props => (props.clickable ? 'pointer' : 'default')};

	/* Mobile styles */
	width: 20px; /* 18px icon + 1px padding * 2 */
	height: 20px;
	padding: 1px;

	@media (min-width: ${p => p.theme.breakpoints.tablet}) {
		width: 24px; /* 18px icon + 3px padding * 2 */
		height: 24px;
		padding: 3px;
	}

	@media (min-width: ${p => p.theme.breakpoints.desktop}) {
		width: 30px; /* 18px icon + 6px padding * 2 */
		height: 30px;
		padding: 6px;
	}
`

// Выпадающее меню
const DropdownMenu = styled.div<{ isOpen: boolean; theme: Theme }>`
	display: ${props => (props.isOpen ? 'block' : 'none')};
	position: absolute;
	top: calc(100% + 4px);
	left: 0;
	background: ${props => props.theme.colors.neutral.white};
	border: 1px solid ${props => props.theme.colors.gray[200]};
	border-radius: 4px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	min-width: 150px;
`

const DropdownItem = styled.div<{ theme: Theme }>`
	padding: 8px 16px;
	cursor: pointer;

	&:hover {
		background: ${props => props.theme.colors.gray[100]};
	}
`

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = ({
	children,
	href,
	isActive = false,
	iconOnly = false,
	hasDropdown = false,
	dropdownOptions = [],
	onClick,
}) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const theme = useTheme() as Theme

	const handleDropdownToggle = (e: React.MouseEvent) => {
		e.preventDefault()
		e.stopPropagation()
		setIsDropdownOpen(!isDropdownOpen)
	}

	const handleWrapperClick = (e: React.MouseEvent) => {
		if (hasDropdown) {
			handleDropdownToggle(e)
		} else if (onClick) {
			onClick()
		} else if (href) {
			// standard link behavior
		}
	}

	const isOverallItemInteractive = !!href || hasDropdown || !!onClick

	const renderContent = () => {
		if (iconOnly) {
			return (
				<ItemWrapper
					theme={theme}
					isInteractive={isOverallItemInteractive}
					onClick={handleWrapperClick}
				>
					<IconWrapper theme={theme} clickable={isOverallItemInteractive}>
						<HomeIcon theme={theme} isActive={isActive} />
					</IconWrapper>
					{hasDropdown && (
						<>
							<IconWrapper
								theme={theme}
								onClick={handleDropdownToggle}
								clickable
							>
								<ChevronIcon
									theme={theme}
									isActive={isActive}
									isOpen={isDropdownOpen}
								/>
							</IconWrapper>
							<DropdownMenu theme={theme} isOpen={isDropdownOpen}>
								{dropdownOptions.map(option => (
									<DropdownItem theme={theme} key={option.value}>
										{option.label}
									</DropdownItem>
								))}
							</DropdownMenu>
						</>
					)}
				</ItemWrapper>
			)
		}

		return (
			<ItemWrapper
				theme={theme}
				isInteractive={isOverallItemInteractive}
				onClick={handleWrapperClick}
			>
				<Typography
					variant={isActive ? 'paragraphBold' : 'paragraph'}
					color={isActive ? 'Base' : 'Secondary'}
				>
					{children}
				</Typography>
				{hasDropdown && (
					<>
						<IconWrapper theme={theme} clickable onClick={handleDropdownToggle}>
							<ChevronIcon
								theme={theme}
								isActive={isActive}
								isOpen={isDropdownOpen}
							/>
						</IconWrapper>
						<DropdownMenu theme={theme} isOpen={isDropdownOpen}>
							{dropdownOptions.map(option => (
								<DropdownItem theme={theme} key={option.value}>
									{option.label}
								</DropdownItem>
							))}
						</DropdownMenu>
					</>
				)}
			</ItemWrapper>
		)
	}

	const content = renderContent()

	return href ? (
		<StyledLink theme={theme} href={href} isActive={isActive} onClick={onClick}>
			{content}
		</StyledLink>
	) : (
		content
	)
}

export default BreadcrumbItem
