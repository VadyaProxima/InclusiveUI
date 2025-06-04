import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { AlertTriangle, Check, XCircle } from 'react-feather'
import { colors } from '../../tokens/colors'
import { InputValidationStatus } from './inputValidation'

// Интерфейс пропсов компонента ValidationMessage
interface ValidationMessageProps {
	status: InputValidationStatus
	message?: string
	showIcon?: boolean
	className?: string
}

// Стилизованный контейнер для сообщения валидации
const MessageContainer = styled.div<{ status: InputValidationStatus }>`
	display: flex;
	align-items: center;
	margin-top: 4px;
	font-size: 0.875rem;

	${({ status }) => {
		// Применяем разные стили в зависимости от статуса
		switch (status) {
			case 'success':
				return css`
					color: ${colors.light.green[600]};
				`
			case 'warning':
				return css`
					color: ${colors.light.gold[300]};
				`
			case 'danger':
				return css`
					color: ${colors.light.red[600]};
				`
			default:
				return css`
					display: none;
				`
		}
	}}
`

// Стилизованная иконка
const IconWrapper = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin-right: 6px;
`

// Компонент ValidationMessage
export const ValidationMessage: React.FC<ValidationMessageProps> = ({
	status,
	message,
	showIcon = true,
	className,
}) => {
	// Если статус default или сообщения нет, не отображаем компонент
	if (status === 'default' || !message) {
		return null
	}

	// Определяем иконку в зависимости от статуса
	const renderIcon = () => {
		if (!showIcon) return null

		switch (status) {
			case 'success':
				return (
					<IconWrapper>
						<Check size={16} />
					</IconWrapper>
				)
			case 'warning':
				return (
					<IconWrapper>
						<AlertTriangle size={16} />
					</IconWrapper>
				)
			case 'danger':
				return (
					<IconWrapper>
						<XCircle size={16} />
					</IconWrapper>
				)
			default:
				return null
		}
	}

	return (
		<MessageContainer status={status} className={className}>
			{renderIcon()}
			{message}
		</MessageContainer>
	)
}

// Компонент высшего порядка для оборачивания формы
export const FormValidationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`

export default ValidationMessage
