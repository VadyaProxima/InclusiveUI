import { ThemeProvider } from '@emotion/react'
import { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { lightTheme } from '../../theme'
import { RadioButton, RadioButtonGroup } from './RadioButton'

const meta = {
	title: 'Components/RadioButton',
	component: RadioButton,
	tags: ['autodocs'],
} as Meta<typeof RadioButton>

export default meta

type Story = StoryObj<typeof meta>

const devices = ['desktop', 'tablet', 'mobile'] as const

export const AllStates: Story = {
	render: () => {
		return (
			<div style={{ display: 'flex', gap: 32 }}>
				{devices.map(device => (
					<div
						key={device}
						style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
					>
						<div>{device}</div>
						<RadioButton checked={false} device={device} onChange={() => {}} />
						<RadioButton checked={true} device={device} onChange={() => {}} />
						<RadioButton
							checked={false}
							disabled={true}
							device={device}
							onChange={() => {}}
						/>
						<RadioButton
							checked={true}
							disabled={true}
							device={device}
							onChange={() => {}}
						/>
					</div>
				))}
			</div>
		)
	},
}

export const Interactive: Story = {
	render: args => {
		const [checked, setChecked] = useState(false)
		return (
			<RadioButton
				{...args}
				checked={checked}
				onChange={e => setChecked(e.target.checked)}
			/>
		)
	},
	args: {
		device: 'desktop',
		disabled: false,
	},
}

export const WithLabel: Story = {
	render: args => {
		const [selected, setSelected] = useState('option1')

		const handleChange =
			(value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
				if (e.target.checked) {
					setSelected(value)
				}
			}

		return (
			<ThemeProvider theme={lightTheme}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
					<h3>Стандартные состояния с лейблом</h3>
					<RadioButton
						checked={selected === 'option1'}
						onChange={handleChange('option1')}
						name="demo"
						value="option1"
						label="Опция 1"
						{...args}
					/>
					<RadioButton
						checked={selected === 'option2'}
						onChange={handleChange('option2')}
						name="demo"
						value="option2"
						label="Опция 2"
						{...args}
					/>
					<RadioButton disabled label="Недоступная радиокнопка" {...args} />
					<RadioButton
						disabled
						checked={true}
						label="Недоступная выбранная радиокнопка"
						{...args}
					/>
				</div>
			</ThemeProvider>
		)
	},
	args: {
		device: 'desktop',
	},
}

export const WithLabelResponsive: Story = {
	render: () => {
		const [selected, setSelected] = useState('option1')

		const handleChange =
			(value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
				if (e.target.checked) {
					setSelected(value)
				}
			}

		return (
			<ThemeProvider theme={lightTheme}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
					{devices.map(device => (
						<div
							key={device}
							style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
						>
							<h3>{device}</h3>
							<RadioButton
								device={device}
								checked={selected === 'option1'}
								onChange={handleChange('option1')}
								name={`demo-${device}`}
								value="option1"
								label="Опция 1"
							/>
							<RadioButton
								device={device}
								checked={selected === 'option2'}
								onChange={handleChange('option2')}
								name={`demo-${device}`}
								value="option2"
								label="Опция 2"
							/>
							<RadioButton
								device={device}
								disabled
								label="Недоступная радиокнопка"
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
		const [selected, setSelected] = useState('option1')

		const handleChange =
			(value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
				if (e.target.checked) {
					setSelected(value)
				}
			}

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
					<RadioButton
						checked={selected === 'option1'}
						onChange={handleChange('option1')}
						name="long-labels"
						value="option1"
						label="Короткий лейбл"
						{...args}
					/>
					<RadioButton
						checked={selected === 'option2'}
						onChange={handleChange('option2')}
						name="long-labels"
						value="option2"
						label="Этот длинный текст демонстрирует, как радиокнопка отображается с многострочным лейблом. Текст может занимать несколько строк и должен нормально переноситься."
						{...args}
					/>
					<RadioButton
						checked={selected === 'option3'}
						onChange={handleChange('option3')}
						name="long-labels"
						value="option3"
						label="Еще один пример с длинным лейблом, который демонстрирует корректное выравнивание текста относительно радиокнопки."
						{...args}
					/>
				</div>
			</ThemeProvider>
		)
	},
	args: {
		device: 'desktop',
	},
}

export const RadioGroups: Story = {
	render: args => {
		const [selected, setSelected] = useState('option1')

		const handleChange =
			(value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
				if (e.target.checked) {
					setSelected(value)
				}
			}

		return (
			<ThemeProvider theme={lightTheme}>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
					<div>
						<h3>Горизонтальное расположение</h3>
						<RadioButtonGroup direction="horizontal">
							<RadioButton
								label="Опция 1"
								checked={selected === 'option1'}
								onChange={handleChange('option1')}
								name="group-horizontal"
								value="option1"
								device={args.device}
							/>
							<RadioButton
								label="Опция 2"
								checked={selected === 'option2'}
								onChange={handleChange('option2')}
								name="group-horizontal"
								value="option2"
								device={args.device}
							/>
							<RadioButton
								label="Опция 3"
								checked={selected === 'option3'}
								onChange={handleChange('option3')}
								name="group-horizontal"
								value="option3"
								device={args.device}
							/>
						</RadioButtonGroup>
					</div>

					<div>
						<h3>Вертикальное расположение</h3>
						<RadioButtonGroup direction="vertical">
							<RadioButton
								label="Опция 1"
								checked={selected === 'option1'}
								onChange={handleChange('option1')}
								name="group-vertical"
								value="option1"
								device={args.device}
							/>
							<RadioButton
								label="Опция 2"
								checked={selected === 'option2'}
								onChange={handleChange('option2')}
								name="group-vertical"
								value="option2"
								device={args.device}
							/>
							<RadioButton
								label="Опция 3"
								checked={selected === 'option3'}
								onChange={handleChange('option3')}
								name="group-vertical"
								value="option3"
								device={args.device}
							/>
						</RadioButtonGroup>
					</div>
				</div>
			</ThemeProvider>
		)
	},
	args: {
		device: 'desktop',
	},
}

export const ResponsiveRadioGroups: Story = {
	render: () => {
		const [selected, setSelected] = useState('option1')

		const handleChange =
			(value: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
				if (e.target.checked) {
					setSelected(value)
				}
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
									<RadioButtonGroup direction="horizontal">
										<RadioButton
											label="Опция 1"
											checked={selected === 'option1'}
											onChange={handleChange('option1')}
											name={`group-horizontal-${device}`}
											value="option1"
											device={device}
										/>
										<RadioButton
											label="Опция 2"
											checked={selected === 'option2'}
											onChange={handleChange('option2')}
											name={`group-horizontal-${device}`}
											value="option2"
											device={device}
										/>
										<RadioButton
											label="Опция 3"
											checked={selected === 'option3'}
											onChange={handleChange('option3')}
											name={`group-horizontal-${device}`}
											value="option3"
											device={device}
										/>
									</RadioButtonGroup>
								</div>

								<div>
									<h4>Вертикальное расположение</h4>
									<RadioButtonGroup direction="vertical">
										<RadioButton
											label="Опция 1"
											checked={selected === 'option1'}
											onChange={handleChange('option1')}
											name={`group-vertical-${device}`}
											value="option1"
											device={device}
										/>
										<RadioButton
											label="Опция 2"
											checked={selected === 'option2'}
											onChange={handleChange('option2')}
											name={`group-vertical-${device}`}
											value="option2"
											device={device}
										/>
										<RadioButton
											label="Опция 3"
											checked={selected === 'option3'}
											onChange={handleChange('option3')}
											name={`group-vertical-${device}`}
											value="option3"
											device={device}
										/>
									</RadioButtonGroup>
								</div>
							</div>
						</div>
					))}
				</div>
			</ThemeProvider>
		)
	},
}
