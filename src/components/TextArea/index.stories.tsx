import { ThemeProvider } from '@emotion/react'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { darkTheme, lightTheme } from '../../theme'
import { TextArea, TextAreaProps } from './TextArea'

export default {
	title: 'Components/TextArea',
	component: TextArea,
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
		label: {
			control: { type: 'text' },
		},
		placeholder: {
			control: { type: 'text' },
		},
	},
} as Meta<TextAreaProps>

// Базовый шаблон
const Template: StoryFn<TextAreaProps> = args => (
	<ThemeProvider theme={lightTheme}>
		<TextArea {...args} />
	</ThemeProvider>
)

// Базовая история
export const Default: StoryFn<TextAreaProps> = Template.bind({})
Default.args = {
	placeholder: 'Введите текст...',
	status: 'default',
	device: 'desktop',
}

// С лейблом
export const WithLabel: StoryFn<TextAreaProps> = Template.bind({})
WithLabel.args = {
	...Default.args,
	label: 'Комментарий',
}

// Состояние disabled
export const Disabled: StoryFn<TextAreaProps> = Template.bind({})
Disabled.args = {
	...Default.args,
	disabled: true,
}

// Состояние success
export const Success: StoryFn<TextAreaProps> = Template.bind({})
Success.args = {
	...Default.args,
	status: 'success',
}

// Состояние warning
export const Warning: StoryFn<TextAreaProps> = Template.bind({})
Warning.args = {
	...Default.args,
	status: 'warning',
	value: 'Требует внимания',
}

// Состояние danger/error
export const Danger: StoryFn<TextAreaProps> = Template.bind({})
Danger.args = {
	...Default.args,
	status: 'danger',
	value: 'Ошибка ввода',
}

// Для планшетов
export const Tablet: StoryFn<TextAreaProps> = Template.bind({})
Tablet.args = {
	...Default.args,
	device: 'tablet',
}

// Для мобильных устройств
export const Mobile: StoryFn<TextAreaProps> = Template.bind({})
Mobile.args = {
	...Default.args,
	device: 'mobile',
}

// Полный вариант с лейблом
export const Complete: StoryFn<TextAreaProps> = Template.bind({})
Complete.args = {
	label: 'Описание',
	placeholder: 'Введите описание...',
	status: 'default',
	device: 'desktop',
}

// С фиксированным размером
export const WithRows: StoryFn<TextAreaProps> = Template.bind({})
WithRows.args = {
	...Default.args,
	rows: 5,
}

// Показ разных тем
export const AllThemes: StoryFn<TextAreaProps> = args => (
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
				<TextArea {...args} status="default" />
				<TextArea {...args} status="success" />
				<TextArea {...args} status="warning" />
				<TextArea {...args} status="danger" />
				<TextArea {...args} status="default" disabled />
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
					background: darkTheme.colors.gray[100],
				}}
			>
				<TextArea {...args} status="default" />
				<TextArea {...args} status="success" />
				<TextArea {...args} status="warning" />
				<TextArea {...args} status="danger" />
				<TextArea {...args} status="default" disabled />
			</div>
		</ThemeProvider>
	</div>
)
AllThemes.args = {
	placeholder: 'Введите текст...',
	device: 'desktop',
}
