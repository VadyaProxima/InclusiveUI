import { css } from '@emotion/react'
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
type Device = 'desctop' | 'tablet' | 'mobile' // Matches token keys
export type ModalVariant = 'info' | 'success' | 'warning' | 'error' | 'default'

export interface ModalProps {
	isOpen: boolean
	onClose: () => void
	title?: string
	children: ReactNode
	footerContent?: ReactNode
	device?: Device
	hideCloseButton?: boolean
	variant?: ModalVariant
	statusIcon?: ReactNode
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
	ariaLabelledby?: string
	ariaDescribedby?: string
}

// --- Styled Components ---

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5); // Standard overlay color
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 1000; // Ensure it's on top
`

const ModalContainer = styled.div<{ device: Device }>`
	background-color: ${colors.light.neutral.white};
	border-radius: ${borderRadius.desktop.small}; // 6px from Figma
	box-shadow: 0px 3px 6px -4px rgba(0, 0, 0, 0.25),
		0px 6px 16px 0px rgba(0, 0, 0, 0.25), 0px 9px 28px 8px rgba(0, 0, 0, 0.05); // From Figma (порядок из вашего комментария)
	display: flex;
	flex-direction: column;
	overflow: hidden;
	padding: 16px; // Общие внутренние отступы для модалки

	${({ device }) => css`
		width: ${modalWidth[device] || modalWidth.desctop};
		min-height: ${modalHeight[device] || modalHeight.desctop};
		// Если modalWidth/Height должны учитывать padding, то нужно будет их вычитать или использовать box-sizing: border-box на всех уровнях
	`}
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
		background-color: ${colors.light.gray[50]};
	}
`

const StatusIconWrapper = styled.div`
	width: 48px;
	height: 48px;
	padding: 8px; // (48-32)/2
	display: flex;
	align-items: center;
	justify-content: center;
	flex-shrink: 0;
	margin-right: ${spacingTokens.desktop.horizontal
		.small}px; // Отступ от текста (8px)
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

const ModalBody = styled.section`
	overflow-y: auto;
	flex-grow: 1;
	// padding для ModalBody теперь не нужен, т.к. ModalContainer имеет общий padding 16px.
	// Если нужен дополнительный отступ *внутри* body, его можно добавить здесь.
	// Если есть statusTitle или statusContent, они будут с отступами благодаря StatusWrapper
`

const StatusVariantWrapper = styled.div`
	display: flex;
	align-items: flex-start; // Иконка и текст по верхнему краю
	margin-bottom: ${spacingTokens.desktop.vertical
		.medium}px; // Отступ под блоком статуса (16px)
`

const ModalFooter = styled.footer`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	padding-top: ${spacingTokens.desktop.vertical
		.medium}px; // Отступ от тела модалки (16px)
	border-top: 1px solid ${colors.light.gray[100]};
	box-sizing: border-box;
	flex-shrink: 0;

	& > *:not(:last-child) {
		margin-right: ${spacingTokens.desktop.horizontal.small}px;
	}
`

// --- Modal Component ---
const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	title,
	children,
	footerContent,
	device = 'desctop',
	hideCloseButton = false,
	variant = 'default',
	statusIcon,
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
				return colors.light.green[500]
			case 'warning':
				return colors.light.gold[500]
			case 'error':
				return colors.light.red[600]
			default:
				return ''
		}
	}

	const renderStatusIcon = () => {
		if (variant === 'default' && !statusIcon) return null
		if (statusIcon) return <StatusIconWrapper>{statusIcon}</StatusIconWrapper>

		const color = getVariantColor()
		if (!color) return null

		return (
			<StatusIconWrapper>
				<StatusCircle variantColor={color} />
			</StatusIconWrapper>
		)
	}

	return (
		<ModalOverlay
			onClick={handleOverlayClick}
			role="dialog"
			aria-modal="true"
			aria-labelledby={ariaLabelledby}
			aria-describedby={ariaDescribedby}
			className={className}
		>
			<ModalContainer device={device}>
				{(title || !hideCloseButton) && (
					<ModalHeader>
						{title && (
							<ModalTitle variant="bodyLargeBold" color="gray1000">
								{title}
							</ModalTitle>
						)}
						{!hideCloseButton && (
							<CloseButton onClick={onClose} aria-label="Close modal">
								<CloseIconSvg color={colors.light.gray[800]} />
							</CloseButton>
						)}
					</ModalHeader>
				)}
				<ModalBody id={ariaDescribedby}>
					{(variant !== 'default' ||
						statusIcon ||
						statusTitle ||
						statusContent) &&
						(statusTitle || statusContent || statusIcon) && (
							<StatusVariantWrapper>
								{renderStatusIcon()}
								{(statusTitle || statusContent) && (
									<StatusContentWrapper>
										{statusTitle && (
											<Typography variant="heading5" color="gray1000">
												{statusTitle}
											</Typography>
										)}
										{statusContent && (
											<Typography variant="bodyLarge" color="gray800">
												{statusContent}
											</Typography>
										)}
									</StatusContentWrapper>
								)}
							</StatusVariantWrapper>
						)}
					{children}
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
