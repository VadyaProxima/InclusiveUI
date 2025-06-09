import { ThemeProvider } from '@emotion/react'
import { StoryFn } from '@storybook/react'
import React from 'react'
import { Check, Mail, XCircle } from 'react-feather'
import { lightTheme } from '../../theme'
import { Validators } from '../../utils/validation'
import { InputWithValidation } from './InputWithValidation'

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
export const EmailValidation: StoryFn<{}> = () => (
	<ThemeProvider theme={lightTheme}>
		<div style={{ width: '320px' }}>
			<div style={{ marginBottom: '20px' }}>
				<h3>Валидация Email</h3>
				<p>Попробуйте ввести: </p>
				<ul>
					<li>
						Пустое значение - получите{' '}
						<span style={{ color: '#DB242A' }}>красную</span> рамку и сообщение
						об ошибке
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
			<InputWithValidation
				label="Email адрес"
				aria-label="Email адрес"
				placeholder="Введите email"
				name="email"
				id="email-validation-input"
				leftIcon={<Mail size={18} />}
				successIcon={<Check size={18} />}
				errorIcon={<XCircle size={18} />}
				validators={[
					Validators.required('Email обязателен для заполнения'),
					Validators.email(),
				]}
			/>
		</div>
	</ThemeProvider>
)
