import { ThemeProvider } from '@emotion/react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import { darkTheme, lightTheme } from '../../theme'
import { Checkbox, CheckboxGroup } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
	title: 'Components/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	decorators: [
		Story => (
			<ThemeProvider theme={lightTheme}>
				<Story />
			</ThemeProvider>
		),
	],
}
export default meta

type Story = StoryObj<typeof Checkbox>

const devices = ['desktop', 'tablet', 'mobile'] as const

export const AllStates: Story = {
	render: () => {
		return (
			<>
				<div style={{ marginBottom: 30 }}>Checkbox</div>
				<div style={{ display: 'flex', gap: 32 }}>
					<Checkbox checked={false} indeterminate={false} onChange={() => {}} />
					<Checkbox checked={true} indeterminate={false} onChange={() => {}} />
					<Checkbox checked={false} indeterminate={true} onChange={() => {}} />
					<Checkbox
						checked={false}
						indeterminate={false}
						disabled={true}
						onChange={() => {}}
					/>
					<Checkbox
						checked={true}
						indeterminate={false}
						disabled={true}
						onChange={() => {}}
					/>
					<Checkbox
						checked={false}
						indeterminate={true}
						disabled={true}
						onChange={() => {}}
					/>
				</div>
			</>
		)
	},
}

export const Interactive: Story = {
	render: args => {
		const [checked, setChecked] = useState(false)
		return (
			<Checkbox
				{...args}
				checked={checked}
				onChange={e => setChecked(e.target.checked)}
			/>
		)
	},
	args: {
		device: 'desktop',
		disabled: false,
		indeterminate: false,
	},
}

export const WithLabel: Story = {
	render: args => {
		const [checked, setChecked] = useState(false)
		return (
			<ThemeProvider theme={lightTheme}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
					<h3>Стандартные состояния с лейблом</h3>
					<Checkbox
						{...args}
						checked={checked}
						onChange={e => setChecked(e.target.checked)}
						label="Согласен с условиями"
					/>
					<Checkbox
						{...args}
						checked={true}
						label="Выбранный чекбокс с лейблом"
					/>
					<Checkbox
						{...args}
						indeterminate={true}
						label="Неопределенное состояние с лейблом"
					/>
					<Checkbox {...args} disabled label="Недоступный чекбокс с лейблом" />
					<Checkbox
						{...args}
						disabled
						checked={true}
						label="Недоступный выбранный чекбокс"
					/>
					<Checkbox
						{...args}
						disabled
						indeterminate={true}
						label="Недоступный неопределенный чекбокс"
					/>
				</div>
			</ThemeProvider>
		)
	},
	args: {
		device: 'desktop',
		disabled: false,
		indeterminate: false,
	},
}

export const WithLabelResponsive: Story = {
	render: () => {
		const [checked, setChecked] = useState(false)

		return (
			<ThemeProvider theme={lightTheme}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
					{devices.map(device => (
						<div
							key={device}
							style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
						>
							<h3>{device}</h3>
							<Checkbox
								device={device}
								checked={checked}
								onChange={e => setChecked(e.target.checked)}
								label="Интерактивный чекбокс с лейблом"
							/>
							<Checkbox
								device={device}
								checked={true}
								label="Выбранный чекбокс с лейблом"
							/>
							<Checkbox
								device={device}
								indeterminate={true}
								label="Неопределенное состояние с лейблом"
							/>
							<Checkbox
								device={device}
								disabled
								label="Недоступный чекбокс с лейблом"
							/>
						</div>
					))}
				</div>
			</ThemeProvider>
		)
	},
}

export const LongLabels: Story = {
	render: args => {
		return (
			<ThemeProvider theme={lightTheme}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						gap: 20,
						maxWidth: '500px',
					}}
				>
					<Checkbox {...args} checked={true} label="Короткий лейбл" />
					<Checkbox
						{...args}
						checked={true}
						label="Этот длинный текст демонстрирует, как чекбокс отображается с многострочным лейблом. Текст может занимать несколько строк и должен нормально переноситься."
					/>
					<Checkbox
						{...args}
						indeterminate={true}
						label="Чекбокс с неопределенным состоянием и длинным текстом лейбла, который также может занимать несколько строк для демонстрации корректного выравнивания."
					/>
				</div>
			</ThemeProvider>
		)
	},
	args: {
		device: 'desktop',
	},
}

export const CheckboxGroups: Story = {
	render: args => {
		const [checks, setChecks] = useState({
			option1: false,
			option2: true,
			option3: false,
		})

		const handleChange =
			(option: keyof typeof checks) =>
			(e: React.ChangeEvent<HTMLInputElement>) => {
				setChecks(prev => ({
					...prev,
					[option]: e.target.checked,
				}))
			}

		return (
			<ThemeProvider theme={lightTheme}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
					<div>
						<h3>Горизонтальное расположение</h3>
						<CheckboxGroup direction="horizontal">
							<Checkbox
								label="Опция 1"
								checked={checks.option1}
								onChange={handleChange('option1')}
								device={args.device}
							/>
							<Checkbox
								label="Опция 2"
								checked={checks.option2}
								onChange={handleChange('option2')}
								device={args.device}
							/>
							<Checkbox
								label="Опция 3"
								checked={checks.option3}
								onChange={handleChange('option3')}
								device={args.device}
							/>
						</CheckboxGroup>
					</div>

					<div>
						<h3>Вертикальное расположение</h3>
						<CheckboxGroup direction="vertical">
							<Checkbox
								label="Опция 1"
								checked={checks.option1}
								onChange={handleChange('option1')}
								device={args.device}
							/>
							<Checkbox
								label="Опция 2"
								checked={checks.option2}
								onChange={handleChange('option2')}
								device={args.device}
							/>
							<Checkbox
								label="Опция 3"
								checked={checks.option3}
								onChange={handleChange('option3')}
								device={args.device}
							/>
						</CheckboxGroup>
					</div>
				</div>
			</ThemeProvider>
		)
	},
	args: {
		device: 'desktop',
	},
}

export const ResponsiveCheckboxGroups: Story = {
	render: () => {
		const [checks, setChecks] = useState({
			option1: false,
			option2: true,
			option3: false,
		})

		const handleChange =
			(option: keyof typeof checks) =>
			(e: React.ChangeEvent<HTMLInputElement>) => {
				setChecks(prev => ({
					...prev,
					[option]: e.target.checked,
				}))
			}

		return (
			<ThemeProvider theme={lightTheme}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
					{devices.map(device => (
						<div key={device}>
							<h3>{device}</h3>
							<div
								style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
							>
								<div>
									<h4>Горизонтальное расположение</h4>
									<CheckboxGroup direction="horizontal">
										<Checkbox
											label="Опция 1"
											checked={checks.option1}
											onChange={handleChange('option1')}
											device={device}
										/>
										<Checkbox
											label="Опция 2"
											checked={checks.option2}
											onChange={handleChange('option2')}
											device={device}
										/>
										<Checkbox
											label="Опция 3"
											checked={checks.option3}
											onChange={handleChange('option3')}
											device={device}
										/>
									</CheckboxGroup>
								</div>

								<div>
									<h4>Вертикальное расположение</h4>
									<CheckboxGroup direction="vertical">
										<Checkbox
											label="Опция 1"
											checked={checks.option1}
											onChange={handleChange('option1')}
											device={device}
										/>
										<Checkbox
											label="Опция 2"
											checked={checks.option2}
											onChange={handleChange('option2')}
											device={device}
										/>
										<Checkbox
											label="Опция 3"
											checked={checks.option3}
											onChange={handleChange('option3')}
											device={device}
										/>
									</CheckboxGroup>
								</div>
							</div>
						</div>
					))}
				</div>
			</ThemeProvider>
		)
	},
}

// Темная тема
export const DarkTheme: StoryFn = () => {
	const [checked1, setChecked1] = React.useState(false)
	const [checked2, setChecked2] = React.useState(true)
	const [checked3, setChecked3] = React.useState(false)
	const [indeterminate, setIndeterminate] = React.useState(true)

	return (
		<ThemeProvider theme={darkTheme}>
			<div
				style={{
					padding: '20px',
					background: darkTheme.colors.gray[100],
					display: 'flex',
					flexDirection: 'column',
					gap: '16px',
				}}
			>
				<Checkbox
					label="Обычный чекбокс"
					checked={checked1}
					onChange={e => setChecked1(e.target.checked)}
				/>
				<Checkbox
					label="Отмеченный чекбокс"
					checked={checked2}
					onChange={e => setChecked2(e.target.checked)}
				/>
				<Checkbox
					label="Неопределенное состояние"
					checked={checked3}
					indeterminate={indeterminate}
					onChange={e => {
						setChecked3(e.target.checked)
						setIndeterminate(false)
					}}
				/>
				<Checkbox label="Отключенный чекбокс" disabled />
				<Checkbox label="Отключенный отмеченный чекбокс" checked disabled />
			</div>
		</ThemeProvider>
	)
}
