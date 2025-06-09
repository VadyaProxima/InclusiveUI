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
`

const FormContainer = styled.div`
	padding: 40px;
	background: ${({ theme }) => theme.colors.gray[50]};
	border-radius: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	width: 100%;
	max-width: 400px;
	display: flex;
	flex-direction: column;
	gap: 24px;
`

const Title = styled(Typography)`
	text-align: center;
	margin-bottom: 8px;
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

	return (
		<PageContainer>
			<FormContainer>
				<Title variant="heading3">Авторизация</Title>
				<InputWithValidation
					label="Почта"
					aria-label="Почта"
					placeholder="Введите ваш email"
					value={login}
					onChange={e => setLogin(e.target.value)}
					id="login-input"
					name="login"
					validators={[Validators.required(), Validators.email()]}
					onValidated={handleValidation}
				/>
				<InputWithValidation
					label="Пароль"
					aria-label="Пароль"
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
					aria-label="Войти"
					size="small"
					disabled={!isLoginValid || !isPasswordValid}
				>
					Войти
				</Button>
			</FormContainer>
		</PageContainer>
	)
}
