import styled from '@emotion/styled'
import React, { ReactNode, useEffect } from 'react'
import { colors } from '../../tokens/colors'
import { modalHeight, modalWidth } from '../../tokens/Modal'
import { borderRadius, padding as spacingTokens } from '../../tokens/spacing' // Renamed to avoid conflict
import Button from '../Button/Button' // Assuming Button component exists
import Typography from '../Typography/Typography'

// --- Helper: Close Icon SVG ---
const CloseIconSvg: React.FC<{ color: string }> = ({ color }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="17"
		height="17"
		viewBox="0 0 18 18"
		fill="none"
	>
		<path
			d="M2.5 2.5L15.5 15.5M15.5 2.5L2.5 15.5"
			stroke={color}
			strokeLinecap="round"
		/>
	</svg>
)

// --- Types ---
export type ModalVariant = 'info' | 'success' | 'warning' | 'error' | 'default'

export interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: ReactNode
	footerContent?: ReactNode
	hideCloseButton?: boolean
	variant?: ModalVariant
	statusTitle?: string
	statusContent?: string
	// Default buttons
	showCancelButton?: boolean
	cancelButtonText?: string
	onCancel?: () => void
	showConfirmButton?: boolean
	confirmButtonText?: string
	onConfirm?: () => void
	confirmButtonVariant?: 'primary' | 'default' | 'text' | 'danger'
	// Styling & Accessibility
	className?: string
	style?: React.CSSProperties
	ariaLabelledby?: string
	ariaDescribedby?: string
}

// --- Styled Components ---

const ModalOverlay = styled.div<{ isStatic?: boolean }>`
	position: ${props => (props.isStatic ? 'static' : 'fixed')};
	top: ${props => (props.isStatic ? 'auto' : '0')};
	left: ${props => (props.isStatic ? 'auto' : '0')};
	width: ${props => (props.isStatic ? 'auto' : '100%')};
	height: ${props => (props.isStatic ? 'auto' : '100%')};
	background-color: ${props =>
		props.isStatic ? 'transparent' : 'rgba(0, 0, 0, 0.5)'};
	display: flex;
	align-items: ${props => (props.isStatic ? 'flex-start' : 'center')};
	justify-content: center;
	z-index: ${props => (props.isStatic ? 'auto' : '1000')};
`

const ModalContainer = styled.div`
	background-color: ${({ theme }) => theme.colors.modal.background};
	border-radius: ${borderRadius.desktop.small}; // 6px from Figma
	box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.25),
		0px 6px 16px 0px rgba(0, 0, 0, 0.25), 0px 9px 28px 8px rgba(0, 0, 0, 0.05); // From Figma (порядок из вашего комментария)
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding: 16px; // Общие внутренние отступы для модалки

	width: ${modalWidth.mobile};
	min-height: ${modalHeight.mobile};

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		width: ${modalWidth.tablet};
		min-height: ${modalHeight.tablet};
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		width: ${modalWidth.desktop};
		min-height: ${modalHeight.desktop};
	}
`

const ModalHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 26px 0px;
	border-bottom: 1px solid ${colors.light.gray[100]};
	box-sizing: border-box;
	flex-shrink: 0;
`

const ModalTitle = styled(Typography)`
	// Предполагаем, что Typography сам справится с нужной насыщенностью и размером для bodySBold
	// Если нет, нужно будет добавить стили или использовать другой variant
`

const CloseButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	padding: 11px; // Внутренние отступы для крестика
	display: flex;
	align-items: center;
	justify-content: center;
	// width и height будут определяться размером SVG (17px) + padding (2*11px) = 39px
	border-radius: ${borderRadius.desktop.tiny};
	margin-left: auto; // Прижимаем крестик вправо, если нет заголовка

	&:hover {
		background-color: ${({ theme }) => theme.colors.modal.closeButtonHover};
	}
`

const StatusIconWrapper = styled.div`
	width: 48px;
	height: 48px;
	padding: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	margin-right: ${spacingTokens.mobile.horizontal.small}px;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		margin-right: ${spacingTokens.tablet.horizontal.small}px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		margin-right: ${spacingTokens.desktop.horizontal.small}px;
	}
`

const StatusCircle = styled.div<{ variantColor: string }>`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background-color: ${({ variantColor }) => variantColor};
`

const StatusContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
`

const ModalBody = styled.section<{ variant: ModalVariant }>`
	overflow-y: auto;
	flex-grow: 1;
	padding-top: ${({ variant }) => (variant !== 'default' ? '22px' : '0')};
	// padding для ModalBody теперь не нужен, т.к. ModalContainer имеет общий padding 16px.
	// Если нужен дополнительный отступ *внутри* body, его можно добавить здесь.
	// Если есть statusTitle или statusContent, они будут с отступами благодаря StatusWrapper
`

const StatusVariantWrapper = styled.div`
	display: flex;
	align-items: flex-start; // Иконка и текст по верхнему краю
	margin-bottom: ${spacingTokens.mobile.vertical.medium}px;

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		margin-bottom: ${spacingTokens.tablet.vertical.medium}px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		margin-bottom: ${spacingTokens.desktop.vertical.medium}px;
	}
`

const ModalFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-top: ${spacingTokens.mobile.vertical.medium}px;
	border-top: 1px solid ${colors.light.gray[100]};
	box-sizing: border-box;
	flex-shrink: 0;

	& > *:not(:last-child) {
		margin-right: ${spacingTokens.mobile.horizontal.small}px;
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
		padding-top: ${spacingTokens.tablet.vertical.medium}px;
		& > *:not(:last-child) {
			margin-right: ${spacingTokens.tablet.horizontal.small}px;
		}
	}

	@media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
		padding-top: ${spacingTokens.desktop.vertical.medium}px;
		& > *:not(:last-child) {
			margin-right: ${spacingTokens.desktop.horizontal.small}px;
		}
	}
`

// --- Modal Component ---
const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	title,
	children,
	footerContent,
	hideCloseButton = false,
	variant = 'default',
	statusTitle,
	statusContent,
	showCancelButton = true,
	cancelButtonText = 'Cancel',
	onCancel,
	showConfirmButton = true,
	confirmButtonText = 'Confirm',
	onConfirm,
	confirmButtonVariant = 'primary',
	className,
	style,
	ariaLabelledby,
	ariaDescribedby,
}) => {
	useEffect(() => {
		const handleEscKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('keydown', handleEscKey)
			document.body.style.overflow = 'hidden' // Prevent background scrolling
		}

		return () => {
			document.removeEventListener('keydown', handleEscKey)
			document.body.style.overflow = 'visible'
		}
	}, [isOpen, onClose])

	if (!isOpen) {
		return null
	}

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (e.target === e.currentTarget) {
			// Ensure click is on overlay itself
			onClose()
		}
	}

	const handleCancel = () => {
		if (onCancel) {
			onCancel()
		} else {
			onClose() // Default cancel action
		}
	}

	const defaultFooter = (
		<>
			{showCancelButton && (
				<Button
					variant="default"
					onClick={handleCancel}
					aria-label={cancelButtonText}
				>
					{cancelButtonText}
				</Button>
			)}
			{showConfirmButton && (
				<Button
					variant={confirmButtonVariant}
					onClick={onConfirm}
					aria-label={confirmButtonText}
				>
					{confirmButtonText}
				</Button>
			)}
		</>
	)

	const getVariantColor = () => {
		switch (variant) {
			case 'info':
				return colors.light.blue[600]
			case 'success':
				return colors.light.green[600]
			case 'warning':
				return colors.light.gold[300]
			case 'error':
				return colors.light.red[600]
			default:
				return 'transparent'
		}
	}

	const renderStatusIcon = () => {
		if (variant === 'default') {
			return null
		}
		return (
			<StatusIconWrapper>
				<StatusCircle variantColor={getVariantColor()} />
			</StatusIconWrapper>
		)
	}

	const hasStatusContent = statusTitle || statusContent

	return (
		<ModalOverlay
			onClick={handleOverlayClick}
			isStatic={style?.position === 'static'}
		>
			<ModalContainer
				onClick={e => e.stopPropagation()}
				className={className}
				style={style}
				role="dialog"
				aria-modal="true"
				aria-labelledby={ariaLabelledby}
				aria-describedby={ariaDescribedby}
			>
				{(title || !hideCloseButton) && (
					<ModalHeader>
						{title && (
							<ModalTitle variant="bodyLargeBold" as="h2">
								{title}
							</ModalTitle>
						)}
						{!hideCloseButton && (
							<CloseButton onClick={onClose} aria-label="Close modal">
								<CloseIconSvg color={colors.light.gray[500]} />
							</CloseButton>
						)}
					</ModalHeader>
				)}
				<ModalBody variant={variant}>
					{hasStatusContent ? (
						<StatusVariantWrapper>
							{renderStatusIcon()}
							<StatusContentWrapper>
								{statusTitle && (
									<Typography variant="heading6">{statusTitle}</Typography>
								)}
								{statusContent && (
									<Typography variant="paragraph">{statusContent}</Typography>
								)}
							</StatusContentWrapper>
						</StatusVariantWrapper>
					) : (
						children
					)}
				</ModalBody>
				{(footerContent || showCancelButton || showConfirmButton) && (
					<ModalFooter>
						{footerContent ? footerContent : defaultFooter}
					</ModalFooter>
				)}
			</ModalContainer>
		</ModalOverlay>
	)
}

export default Modal
