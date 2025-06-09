import React from 'react'

// Статусы валидации инпута
export type InputValidationStatus = 'default' | 'success' | 'warning' | 'danger'

// Интерфейс результата валидации
export interface ValidationResult {
	isValid: boolean
	status: InputValidationStatus
	message?: string
}

// Утилита для создания валидаторов
export class InputValidator {
	// Успешная валидация
	static success(message?: string): ValidationResult {
		return {
			isValid: true,
			status: 'success',
			message,
		}
	}

	// Предупреждение
	static warning(message?: string): ValidationResult {
		return {
			isValid: true, // Валидно, но требует внимания
			status: 'warning',
			message,
		}
	}

	// Ошибка валидации
	static danger(message?: string): ValidationResult {
		return {
			isValid: false,
			status: 'danger',
			message,
		}
	}

	// Дефолтное состояние
	static default(): ValidationResult {
		return {
			isValid: true,
			status: 'default',
		}
	}

	// Общий метод валидации для разных случаев
	static validate(
		value: string,
		validators: Array<(value: string) => ValidationResult>
	): ValidationResult {
		if (!validators || validators.length === 0) {
			return InputValidator.default()
		}

		let bestResult: ValidationResult = InputValidator.default()

		for (const validator of validators) {
			const currentResult = validator(value)

			if (currentResult.status === 'danger') {
				return currentResult // Danger is a hard stop.
			}

			if (currentResult.status === 'warning') {
				// If we don't have a warning yet, take this one.
				// We keep checking for dangers.
				if (bestResult.status !== 'warning') {
					bestResult = currentResult
				}
			} else if (currentResult.status === 'success') {
				// Success is only taken if we don't already have a warning.
				if (bestResult.status !== 'warning') {
					bestResult = currentResult
				}
			}
		}
		return bestResult
	}
}

// Предопределенные валидаторы
export const Validators = {
	// Валидатор обязательного поля
	required:
		(errorMessage = 'Это поле обязательно для заполнения') =>
		(value: string): ValidationResult => {
			return value && value.trim() !== ''
				? InputValidator.success()
				: InputValidator.danger(errorMessage)
		},

	// Валидатор минимальной длины
	minLength:
		(minLength: number, errorMessage?: string) =>
		(value: string): ValidationResult => {
			const message = errorMessage || `Минимальная длина: ${minLength} символов`
			return value.length >= minLength
				? InputValidator.success()
				: InputValidator.danger(message)
		},

	// Валидатор максимальной длины
	maxLength:
		(maxLength: number, errorMessage?: string) =>
		(value: string): ValidationResult => {
			const message =
				errorMessage || `Максимальная длина: ${maxLength} символов`
			return value.length <= maxLength
				? InputValidator.success()
				: InputValidator.danger(message)
		},

	// Валидатор диапазона длины с предупреждением
	lengthWarning:
		(idealLength: number, errorMessage?: string) =>
		(value: string): ValidationResult => {
			const message =
				errorMessage || `Рекомендуемая длина: ${idealLength} символов`
			return value.length < idealLength
				? InputValidator.warning(message)
				: InputValidator.success()
		},

	// Валидатор электронной почты
	email:
		(errorMessage = 'Введите корректный email адрес') =>
		(value: string): ValidationResult => {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
			return emailRegex.test(value)
				? InputValidator.success('Email корректен')
				: InputValidator.danger(errorMessage)
		},

	// Валидатор для номера телефона
	phone:
		(errorMessage = 'Введите корректный номер телефона') =>
		(value: string): ValidationResult => {
			// Простая проверка номера телефона (может потребоваться более сложная логика)
			const phoneRegex = /^\+?[0-9\s-()]{10,}$/
			return phoneRegex.test(value)
				? InputValidator.success()
				: InputValidator.danger(errorMessage)
		},

	// Валидатор пароля
	password:
		(minLength = 8, needsSpecialChars = true, errorMessage?: string) =>
		(value: string): ValidationResult => {
			// Базовая проверка на минимальную длину
			if (value.length < minLength) {
				return InputValidator.danger(
					errorMessage ||
						`Пароль должен содержать не менее ${minLength} символов`
				)
			}

			// Проверка на спецсимволы, если требуется
			if (needsSpecialChars) {
				const specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
				if (!specialCharsRegex.test(value)) {
					return InputValidator.warning(
						'Рекомендуется добавить специальные символы для повышения безопасности'
					)
				}
			}

			// Проверка на цифры
			const numbersRegex = /[0-9]+/
			if (!numbersRegex.test(value)) {
				return InputValidator.warning(
					'Рекомендуется добавить цифры для повышения безопасности'
				)
			}

			// Если все проверки прошли, пароль сильный
			return InputValidator.success('Надежный пароль')
		},

	// Кастомный валидатор
	custom:
		(
			validationFn: (value: string) => boolean,
			errorStatus: 'warning' | 'danger' = 'danger',
			errorMessage = 'Значение не соответствует требованиям'
		) =>
		(value: string): ValidationResult => {
			return validationFn(value)
				? InputValidator.success()
				: errorStatus === 'warning'
				? InputValidator.warning(errorMessage)
				: InputValidator.danger(errorMessage)
		},
}

// Хук для использования валидации в компонентах React
export function useInputValidation(
	initialValue = '',
	validators: Array<(value: string) => ValidationResult> = [],
	validateOnChange = true
) {
	const [value, setValue] = React.useState(initialValue)
	const [validationResult, setValidationResult] =
		React.useState<ValidationResult>(InputValidator.default())
	const [isDirty, setIsDirty] = React.useState(false)

	// Функция для выполнения валидации
	const validateValue = React.useCallback(
		(val: string) => {
			const result = InputValidator.validate(val, validators)
			setValidationResult(result)
			return result
		},
		[validators]
	)

	// Обновление значения и валидация
	const handleChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const newValue = e.target.value
			setValue(newValue)

			if (validateOnChange) {
				if (!isDirty) {
					setIsDirty(true)
				}
				validateValue(newValue)
			} else if (isDirty) {
				validateValue(newValue)
			}
		},
		[validateOnChange, isDirty, validateValue]
	)

	// Валидация при потере фокуса
	const handleBlur = React.useCallback(() => {
		if (!isDirty) {
			setIsDirty(true)
		}
		validateValue(value)
	}, [value, validateValue, isDirty])

	// Ручная валидация
	const validate = React.useCallback(() => {
		setIsDirty(true)
		const result = validateValue(value)
		return result.isValid
	}, [value, validateValue])

	// Сброс состояния
	const reset = React.useCallback((newValue = '') => {
		setValue(newValue)
		setIsDirty(false)
		setValidationResult(InputValidator.default())
	}, [])

	// Эффект для начальной валидации при наличии начального значения
	React.useEffect(() => {
		if (initialValue && initialValue.length > 0) {
			validateValue(initialValue)
			setIsDirty(true)
		}
	}, []) // Запускаем только при монтировании

	return {
		value,
		setValue,
		isDirty,
		handleChange,
		handleBlur,
		validationResult,
		validate,
		reset,
		// Хелперы для проверки состояния
		isValid: validationResult.isValid,
		status: validationResult.status,
		message: validationResult.message,
	}
}
