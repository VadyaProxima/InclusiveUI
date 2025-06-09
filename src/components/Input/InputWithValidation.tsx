import styled from '@emotion/styled'
import React from 'react'
import {
	InputValidationStatus,
	useInputValidation,
	ValidationMessage,
	ValidationResult,
} from '../../utils/validation'
import { Input, InputProps } from './Input'

// Расширяем пропсы инпута
export interface InputWithValidationProps extends Omit<InputProps, 'status'> {
	name: string
	initialValue?: string
	validators?: Array<(value: string) => ValidationResult>
	onValidated?: (
		name: string,
		isValid: boolean,
		value: string,
		status?: InputValidationStatus,
		message?: string
	) => void
	errorIcon?: React.ReactNode
	warningIcon?: React.ReactNode
	successIcon?: React.ReactNode
	validateOnChange?: boolean // Новый проп для управления валидацией при вводе
}

// Контейнер для инпута с сообщением валидации
const InputContainer = styled.div`
	font-family: Open Sans;
	display: flex;
	flex-direction: column;
	width: 100%;
`

export const InputWithValidation: React.FC<InputWithValidationProps> = ({
	name,
	initialValue = '',
	validators = [],
	onValidated,
	onChange,
	onBlur,
	errorIcon,
	warningIcon,
	successIcon,
	validateOnChange = true, // По умолчанию валидируем при каждом изменении
	...inputProps
}) => {
	// Используем хук для валидации
	const {
		value,
		handleChange,
		handleBlur,
		status,
		message,
		validate,
		isDirty,
	} = useInputValidation(initialValue, validators, validateOnChange)

	// Запускаем валидацию сразу после монтирования, если есть начальное значение
	React.useEffect(() => {
		if (initialValue && validators.length > 0) {
			validate()
		}
	}, [])

	// Вызываем onValidated при изменении статуса валидации
	React.useEffect(() => {
		if (isDirty && onValidated) {
			onValidated(name, status !== 'danger', value, status, message)
		}
	}, [status, value, name, onValidated, isDirty, message])

	// Обработчик изменения значения
	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e)
		if (onChange) {
			onChange(e)
		}
	}

	// Обработчик потери фокуса
	const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
		handleBlur()
		if (onBlur) {
			onBlur(e)
		}
	}

	// Определяем иконку в зависимости от статуса
	const getRightIcon = () => {
		if (!isDirty) return inputProps.rightIcon

		switch (status) {
			case 'success':
				return successIcon || inputProps.rightIcon
			case 'warning':
				return warningIcon || inputProps.rightIcon
			case 'danger':
				return errorIcon || inputProps.rightIcon
			default:
				return inputProps.rightIcon
		}
	}

	return (
		<InputContainer>
			<Input
				{...inputProps}
				name={name}
				value={value}
				onChange={onChangeHandler}
				onBlur={onBlurHandler}
				status={isDirty ? status : 'default'}
				rightIcon={getRightIcon()}
			/>
			<ValidationMessage status={status} message={message} />
		</InputContainer>
	)
}

export default InputWithValidation
