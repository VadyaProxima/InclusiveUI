import styled from '@emotion/styled'
import { useState } from 'react'
import { Button, Typography } from '../components'
import { Checkbox } from '../components/Checkbox'
import { InputWithValidation } from '../components/Input'
import { Validators } from '../utils/validation'

const PageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: ${({ theme }) => theme.colors.gray[100]};
	gap: 40px;
`

const FormContainer = styled.div`
	padding: 60px;
	background: ${({ theme }) => theme.colors.gray[50]};
	border-radius: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	gap: 24px;

	&:focus-within {
		outline: 2px solid ${({ theme }) => theme.colors.input.focus.border};
		outline-offset: 2px;
	}
`

const Title = styled(Typography)`
	text-align: center;
	margin-bottom: 8px;
	white-space: nowrap;
`

const CheckboxContainer = styled.div`
	display: flex;
	align-items: center;
`

export const AuthorizationPage = () => {
	const [login, setLogin] = useState('')
	const [password, setPassword] = useState('')
	const [rememberMe, setRememberMe] = useState(false)

	const [isLoginValid, setIsLoginValid] = useState(false)
	const [isPasswordValid, setIsPasswordValid] = useState(false)

	const handleValidation = (name: string, isValid: boolean) => {
		if (name === 'login') {
			setIsLoginValid(isValid)
		} else if (name === 'password') {
			setIsPasswordValid(isValid)
		}
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && isLoginValid && isPasswordValid) {
			alert(`Login: ${login}, Password: ${password}`)
		}
	}

	return (
		<PageContainer>
			<FormContainer role="form" aria-label="Форма авторизации">
				<Title variant="heading3" id="auth-title">
					Авторизация
				</Title>
				<InputWithValidation
					label="Почта"
					aria-label="Почта"
					aria-describedby="auth-title"
					placeholder="Введите ваш email"
					value={login}
					onChange={e => setLogin(e.target.value)}
					id="login-input"
					name="login"
					validators={[Validators.required(), Validators.email()]}
					onValidated={handleValidation}
					className="input-full-width"
					autoComplete="email"
				/>
				<InputWithValidation
					label="Пароль"
					aria-label="Пароль"
					aria-describedby="auth-title"
					placeholder="Введите ваш пароль"
					type="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					id="password-input"
					name="password"
					validators={[
						Validators.required(),
						Validators.minLength(8),
						Validators.password(),
					]}
					onValidated={handleValidation}
					className="input-full-width"
					autoComplete="current-password"
				/>
				<CheckboxContainer>
					<Checkbox
						id="remember-me"
						checked={rememberMe}
						onChange={e => setRememberMe(e.target.checked)}
						label="Запомнить меня"
					/>
				</CheckboxContainer>
				<Button
					onClick={() => alert(`Login: ${login}, Password: ${password}`)}
					onKeyPress={handleKeyPress}
					aria-label="Войти"
					size="large"
					disabled={!isLoginValid || !isPasswordValid}
				>
					Войти
				</Button>
			</FormContainer>
		</PageContainer>
	)
}
