import { ThemeProvider } from '@emotion/react'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { AlertTriangle, Check, Heart, XCircle } from 'react-feather'
import { darkTheme, lightTheme } from '../../theme'
import { Validators } from '../../utils/validation'
import { Input, InputProps } from './Input'
import {
	InputWithValidation,
	InputWithValidationProps,
} from './InputWithValidation'

export default {
	title: 'Components/Input',
	component: Input,
	argTypes: {
		status: {
			control: { type: 'select' },
			options: ['default', 'success', 'warning', 'danger'],
		},
		device: {
			control: { type: 'select' },
			options: ['desktop', 'tablet', 'mobile'],
		},
		disabled: {
			control: { type: 'boolean' },
		},
		leftIcon: {
			control: { type: 'object' },
		},
		rightIcon: {
			control: { type: 'object' },
		},
		label: {
			control: { type: 'text' },
		},
		placeholder: {
			control: { type: 'text' },
		},
	},
} as Meta<InputProps>

// ======= Обычный Input =======
const Template: StoryFn<InputProps> = args => (
	<ThemeProvider theme={lightTheme}>
		<Input {...args} />
	</ThemeProvider>
)

// Базовая история без иконок
export const Default: StoryFn<InputProps> = Template.bind({})
Default.args = {
	placeholder: 'Input',
	status: 'default',
	device: 'desktop',
}

// С левой иконкой
export const WithLeftIcon: StoryFn<InputProps> = Template.bind({})
WithLeftIcon.args = {
	...Default.args,
	leftIcon: <Heart size={18} />,
}

// С правой иконкой
export const WithRightIcon: StoryFn<InputProps> = Template.bind({})
WithRightIcon.args = {
	...Default.args,
	rightIcon: <Heart size={18} />,
}

// С обеими иконками
export const WithBothIcons: StoryFn<InputProps> = Template.bind({})
WithBothIcons.args = {
	...Default.args,
	leftIcon: <Heart size={18} />,
	rightIcon: <Heart size={18} />,
}

// С лейблом
export const WithLabel: StoryFn<InputProps> = Template.bind({})
WithLabel.args = {
	...Default.args,
	label: 'Имя пользователя',
}

// Состояние disabled
export const Disabled: StoryFn<InputProps> = Template.bind({})
Disabled.args = {
	...Default.args,
	disabled: true,
}

// Состояние success
export const Success: StoryFn<InputProps> = Template.bind({})
Success.args = {
	...Default.args,
	status: 'success',
	rightIcon: <Heart size={18} />,
}

// Состояние warning
export const Warning: StoryFn<InputProps> = Template.bind({})
Warning.args = {
	...Default.args,
	status: 'warning',
	value: 'Требует внимания',
	rightIcon: <Heart size={18} />,
}

// Состояние danger/error
export const Danger: StoryFn<InputProps> = Template.bind({})
Danger.args = {
	...Default.args,
	status: 'danger',
	value: 'Ошибка ввода',
	rightIcon: <Heart size={18} />,
}

// Для планшетов
export const Tablet: StoryFn<InputProps> = Template.bind({})
Tablet.args = {
	...Default.args,
	device: 'tablet',
}

// Для мобильных устройств
export const Mobile: StoryFn<InputProps> = Template.bind({})
Mobile.args = {
	...Default.args,
	device: 'mobile',
}

// Полный вариант с лейблом и иконками
export const Complete: StoryFn<InputProps> = Template.bind({})
Complete.args = {
	label: 'Email адрес',
	placeholder: 'Input',
	leftIcon: <Heart size={18} />,
	rightIcon: <Heart size={18} />,
	status: 'success',
	device: 'desktop',
}

// Варианты ввода для разных типов данных
export const Password: StoryFn<InputProps> = Template.bind({})
Password.args = {
	...Default.args,
	type: 'password',
	leftIcon: <Heart size={18} />,
}

// Показ разных тем
export const AllThemes: StoryFn<InputProps> = args => (
	<div>
		<h3>Light Theme</h3>
		<ThemeProvider theme={lightTheme}>
			<div
				style={{
					display: 'flex',
					gap: '20px',
					alignItems: 'center',
					flexWrap: 'wrap',
					padding: '20px',
				}}
			>
				<Input {...args} status="default" />
				<Input {...args} status="success" />
				<Input {...args} status="warning" />
				<Input {...args} status="danger" />
				<Input {...args} status="default" disabled />
			</div>
		</ThemeProvider>
		<h3 style={{ marginTop: '20px' }}>Dark Theme</h3>
		<ThemeProvider theme={darkTheme}>
			<div
				style={{
					display: 'flex',
					gap: '20px',
					alignItems: 'center',
					flexWrap: 'wrap',
					padding: '20px',
					background: darkTheme.colors.gray[50],
				}}
			>
				<Input {...args} status="default" />
				<Input {...args} status="success" />
				<Input {...args} status="warning" />
				<Input {...args} status="danger" />
				<Input {...args} status="default" disabled />
			</div>
		</ThemeProvider>
	</div>
)
AllThemes.args = {
	placeholder: 'Input',
	device: 'desktop',
}

// ======= InputWithValidation =======
const ValidationGroup = {
	title: 'Components/InputWithValidation',
	component: InputWithValidation,
	parameters: {
		docs: {
			description: {
				component:
					'Компонент Input с интегрированной валидацией, который показывает результаты проверки в реальном времени',
			},
		},
	},
} as Meta<InputWithValidationProps>

// Интерактивный пример валидации email
export const InteractiveEmailValidation: StoryFn<{}> = () => {
	const [value, setValue] = React.useState('')
	const [status, setStatus] = React.useState('default')
	const [message, setMessage] = React.useState('')

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value
		setValue(newValue)

		// Если поле пустое
		if (!newValue.trim()) {
			setStatus('danger')
			setMessage('Email обязателен для заполнения')
			return
		}

		// Валидация email с помощью регулярного выражения
		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		if (!emailRegex.test(newValue)) {
			setStatus('danger')
			setMessage('Введите корректный email адрес')
			return
		}

		// Если всё в порядке
		setStatus('success')
		setMessage('Email введен корректно')
	}

	return (
		<ThemeProvider theme={lightTheme}>
			<div style={{ width: '320px' }}>
				<div style={{ marginBottom: '20px' }}>
					<h3>Интерактивная валидация Email</h3>
					<p>Попробуйте ввести: </p>
					<ul>
						<li>Пустое значение - получите сообщение об ошибке</li>
						<li>
							Некорректный email (без @ или домена) - получите ошибку валидации
						</li>
						<li>
							Корректный email (example@mail.com) - получите подтверждение
						</li>
					</ul>
				</div>
				<Input
					label="Email адрес"
					placeholder="Введите email"
					value={value}
					onChange={handleChange}
					status={status as any}
					rightIcon={
						status === 'success' ? (
							<Check size={18} />
						) : status === 'danger' ? (
							<XCircle size={18} />
						) : undefined
					}
				/>
				{message && (
					<div
						style={{
							marginTop: '8px',
							color:
								status === 'success'
									? '#3A7F3B'
									: status === 'warning'
									? '#FEBA40'
									: status === 'danger'
									? '#DB242A'
									: 'inherit',
							display: 'flex',
							alignItems: 'center',
							fontSize: '14px',
						}}
					>
						{message}
					</div>
				)}
			</div>
		</ThemeProvider>
	)
}

// Пример обязательного поля
export const RequiredField: StoryFn<InputWithValidationProps> = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<div style={{ width: '320px' }}>
				<InputWithValidation
					name="required"
					label="Обязательное поле"
					placeholder="Введите значение"
					validators={[
						Validators.required('Это поле обязательно для заполнения'),
					]}
					successIcon={<Check size={18} />}
					errorIcon={<XCircle size={18} />}
				/>
				<div style={{ marginTop: '20px', fontSize: '14px', color: '#717171' }}>
					<p>
						Поле должно быть заполнено. Попробуйте ввести текст и кликнуть за
						пределами поля.
					</p>
				</div>
			</div>
		</ThemeProvider>
	)
}

// Темная тема
export const DarkTheme: StoryFn<InputProps> = args => (
	<ThemeProvider theme={darkTheme}>
		<div
			style={{
				padding: '20px',
				background: darkTheme.colors.gray[50],
			}}
		>
			<div style={{ marginBottom: '20px' }}>
				<Input {...args} status="default" label="Default Input" />
			</div>
			<div style={{ marginBottom: '20px' }}>
				<Input
					{...args}
					status="success"
					label="Success Input"
					leftIcon={<Check size={18} />}
				/>
			</div>
			<div style={{ marginBottom: '20px' }}>
				<Input
					{...args}
					status="warning"
					label="Warning Input"
					leftIcon={<AlertTriangle size={18} />}
				/>
			</div>
			<div style={{ marginBottom: '20px' }}>
				<Input
					{...args}
					status="danger"
					label="Error Input"
					leftIcon={<XCircle size={18} />}
				/>
			</div>
			<div style={{ marginBottom: '20px' }}>
				<Input {...args} status="default" label="Disabled Input" disabled />
			</div>
		</div>
	</ThemeProvider>
)

DarkTheme.args = {
	placeholder: 'Введите значение',
	device: 'desktop',
}
