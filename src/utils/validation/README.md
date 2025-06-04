# Система валидации форм в UnifyUI

Эта система предоставляет удобный набор инструментов для валидации полей ввода и отображения соответствующих статусов и сообщений.

## Основные компоненты

1. **InputValidator** - утилитарный класс для валидации
2. **Validators** - набор предопределенных валидаторов
3. **useInputValidation** - React-хук для интеграции валидации в компоненты
4. **ValidationMessage** - компонент для отображения сообщений валидации
5. **InputWithValidation** - готовый компонент инпута с валидацией

## Статусы валидации

Система использует три основных статуса валидации, которые соответствуют цветовой схеме UnifyUI:

- **success** (зеленый) - успешная валидация, корректные данные
- **warning** (желтый/gold) - предупреждение, не блокирующее отправку формы
- **danger** (красный) - критическая ошибка, блокирующая отправку формы

## Примеры валидации

### Валидация Email

Email-адрес должен соответствовать стандартному формату:

- 🔴 **Danger (красный)**: Пустое поле или некорректный формат (отсутствует @ или домен)
  - Примеры: `пустое поле`, `user.example.com`, `user@`
- ✅ **Success (зеленый)**: Корректный формат email адреса
  - Примеры: `user@example.com`, `name.surname@domain.co.uk`

### Валидация пароля

Пароль должен соответствовать требованиям безопасности:

- 🔴 **Danger (красный)**: Пустое поле или слишком короткий пароль (менее 8 символов)
  - Примеры: `пустое поле`, `pass`
- 🟡 **Warning (желтый)**: Пароль достаточной длины, но нет цифр или специальных символов
  - Примеры: `password`, `longtextonly`
- ✅ **Success (зеленый)**: Надежный пароль с достаточной длиной, цифрами и специальными символами
  - Примеры: `password123!`, `Secure_Pass2023`

## Как использовать

### 1. Использование готового компонента InputWithValidation

```tsx
import { InputWithValidation } from 'components/Input'
import { Validators } from 'utils/validation'
import { Check, AlertTriangle, XCircle } from 'react-feather'

// Внутри вашего компонента
;<InputWithValidation
	name="email"
	label="Email адрес"
	placeholder="Введите email"
	validators={[
		Validators.required('Email обязателен'),
		Validators.email('Введите корректный email адрес'),
	]}
	onValidated={(name, isValid, value) => {
		// Обработка результата валидации
	}}
	successIcon={<Check size={18} />}
	warningIcon={<AlertTriangle size={18} />}
	errorIcon={<XCircle size={18} />}
/>
```

### 2. Использование хука useInputValidation с собственными компонентами

```tsx
import {
	useInputValidation,
	ValidationMessage,
	Validators,
} from 'utils/validation'

function MyCustomField() {
	const { value, handleChange, handleBlur, status, message, validate } =
		useInputValidation('', [
			Validators.required('Это поле обязательно'),
			Validators.minLength(3, 'Минимальная длина 3 символа'),
		])

	return (
		<div>
			<input
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
				className={`input-field input-${status}`}
			/>
			<ValidationMessage status={status} message={message} />
		</div>
	)
}
```

### 3. Создание собственных валидаторов

```tsx
import { Validators, InputValidator } from 'utils/validation'

// Простой кастомный валидатор
const onlyAlphabetic = Validators.custom(
	value => /^[A-Za-zА-Яа-я]+$/.test(value),
	'danger',
	'Поле должно содержать только буквы'
)

// Более сложный валидатор
function customRangeValidator(min, max) {
	return value => {
		const numValue = Number(value)
		if (isNaN(numValue)) {
			return InputValidator.danger('Введите число')
		}
		if (numValue < min) {
			return InputValidator.danger(`Значение должно быть не меньше ${min}`)
		}
		if (numValue > max) {
			return InputValidator.danger(`Значение должно быть не больше ${max}`)
		}
		return InputValidator.success()
	}
}

// Использование
;<InputWithValidation
	validators={[
		Validators.required(),
		onlyAlphabetic,
		customRangeValidator(1, 100),
	]}
	// ...остальные пропсы
/>
```

## Предопределенные валидаторы

В библиотеке доступны следующие предопределенные валидаторы:

- **required()** - проверка на обязательное заполнение
- **minLength(min)** - проверка минимальной длины
- **maxLength(max)** - проверка максимальной длины
- **lengthWarning(idealLength)** - предупреждение о рекомендуемой длине
- **email()** - валидация email-адреса
- **phone()** - валидация номера телефона
- **password(minLength, needsSpecialChars)** - валидация пароля
- **custom(validationFn, errorStatus, errorMessage)** - кастомный валидатор

## Пример полной формы

```tsx
import { InputWithValidation } from 'components/Input'
import { Validators, FormValidationWrapper } from 'utils/validation'
import { Check, AlertTriangle, XCircle } from 'react-feather'
import { useState } from 'react'

function RegistrationForm() {
	const [formValid, setFormValid] = useState({
		username: false,
		email: false,
		password: false,
	})

	const handleValidation = (name, isValid) => {
		setFormValid(prev => ({ ...prev, [name]: isValid }))
	}

	const isFormValid = Object.values(formValid).every(v => v)

	const handleSubmit = e => {
		e.preventDefault()
		if (isFormValid) {
			// Отправка формы
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<FormValidationWrapper>
				<InputWithValidation
					name="username"
					label="Имя пользователя"
					placeholder="Введите имя пользователя"
					validators={[
						Validators.required('Имя пользователя обязательно'),
						Validators.minLength(3, 'Имя должно быть не короче 3 символов'),
					]}
					onValidated={(name, isValid) => handleValidation(name, isValid)}
					successIcon={<Check size={18} />}
					errorIcon={<XCircle size={18} />}
				/>

				<InputWithValidation
					name="email"
					label="Email адрес"
					placeholder="Введите email"
					validators={[
						Validators.required('Email обязателен'),
						Validators.email(),
					]}
					onValidated={(name, isValid) => handleValidation(name, isValid)}
					successIcon={<Check size={18} />}
					errorIcon={<XCircle size={18} />}
				/>

				<InputWithValidation
					name="password"
					label="Пароль"
					type="password"
					placeholder="Введите пароль"
					validators={[
						Validators.required('Пароль обязателен'),
						Validators.password(8, true),
					]}
					onValidated={(name, isValid) => handleValidation(name, isValid)}
					successIcon={<Check size={18} />}
					warningIcon={<AlertTriangle size={18} />}
					errorIcon={<XCircle size={18} />}
				/>

				<button type="submit" disabled={!isFormValid}>
					Зарегистрироваться
				</button>
			</FormValidationWrapper>
		</form>
	)
}
```

## Логика отображения цветов и иконок

Компонент `InputWithValidation` автоматически применяет соответствующий цвет рамки и иконку в зависимости от результата валидации:

1. **Зеленый (success)** - отображается когда валидация успешно пройдена

   - Рамка: `colors.light.green[600]` (#3A7F3B)
   - Иконка: Передается через проп `successIcon`

2. **Желтый (warning)** - отображается при некритичных проблемах

   - Рамка: `colors.light.gold[300]` (#FEBA40)
   - Иконка: Передается через проп `warningIcon`

3. **Красный (danger)** - отображается при серьезных ошибках
   - Рамка: `colors.light.red[600]` (#DB242A)
   - Иконка: Передается через проп `errorIcon`

Для более детального понимания, рекомендуем изучить примеры в Storybook.
