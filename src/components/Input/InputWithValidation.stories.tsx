import { ThemeProvider } from '@emotion/react'
import { StoryFn } from '@storybook/react'
import React from 'react'
import { Check, Mail, XCircle } from 'react-feather'
import { lightTheme } from '../../theme'
import { Input } from './Input'

export default {
	title: 'Components/Validation/InteractiveExamples',
	parameters: {
		docs: {
			description: {
				component: 'Примеры реальной валидации с немедленной обратной связью',
			},
		},
	},
}

// Интерактивный пример валидации email
export const EmailValidation: StoryFn<{}> = () => {
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
					<h3>Валидация Email</h3>
					<p>Попробуйте ввести: </p>
					<ul>
						<li>
							Пустое значение - получите{' '}
							<span style={{ color: '#DB242A' }}>красную</span> рамку и
							сообщение об ошибке
						</li>
						<li>
							Некорректный email (без @ или домена) - получите{' '}
							<span style={{ color: '#DB242A' }}>красную</span> рамку и ошибку
							валидации
						</li>
						<li>
							Корректный email (example@mail.com) - получите{' '}
							<span style={{ color: '#3A7F3B' }}>зеленую</span> рамку и
							подтверждение
						</li>
					</ul>
				</div>
				<Input
					label="Email адрес"
					placeholder="Введите email"
					value={value}
					onChange={handleChange}
					status={status as any}
					leftIcon={<Mail size={18} />}
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
