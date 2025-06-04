import { ThemeProvider } from '@emotion/react'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import { Heart, User } from 'react-feather'
import { darkTheme, lightTheme } from '../../theme'
import { DropdownMenu, DropdownMenuProps } from './DropdownMenu'

// Демо-опции для выпадающего списка
const demoOptions = [
	{ value: 'option1', label: 'Опция 1' },
	{ value: 'option2', label: 'Опция 2' },
	{ value: 'option3', label: 'Опция 3' },
	{ value: 'option4', label: 'Опция 4 (длинный текст для проверки переноса)' },
]

export default {
	title: 'Components/DropdownMenu',
	component: DropdownMenu,
	argTypes: {
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
		label: {
			control: { type: 'text' },
		},
		placeholder: {
			control: { type: 'text' },
		},
		options: {
			control: 'object',
		},
		value: {
			control: 'text',
		},
	},
} as Meta<DropdownMenuProps>

// Базовый шаблон
const Template: StoryFn<DropdownMenuProps> = args => (
	<ThemeProvider theme={lightTheme}>
		<DropdownMenu {...args} />
	</ThemeProvider>
)

// Базовая история
export const Default: StoryFn<DropdownMenuProps> = Template.bind({})
Default.args = {
	options: demoOptions,
	placeholder: 'Dropdown',
	device: 'desktop',
}

// С левой иконкой
export const WithLeftIcon: StoryFn<DropdownMenuProps> = Template.bind({})
WithLeftIcon.args = {
	...Default.args,
	leftIcon: <User size={18} />,
}

// С лейблом
export const WithLabel: StoryFn<DropdownMenuProps> = Template.bind({})
WithLabel.args = {
	...Default.args,
	label: 'Выберите опцию',
}

// Предвыбранное значение
export const WithSelectedValue: StoryFn<DropdownMenuProps> = Template.bind({})
WithSelectedValue.args = {
	...Default.args,
	value: 'option2',
}

// Состояние disabled
export const Disabled: StoryFn<DropdownMenuProps> = Template.bind({})
Disabled.args = {
	...Default.args,
	disabled: true,
}

// Для планшетов
export const Tablet: StoryFn<DropdownMenuProps> = Template.bind({})
Tablet.args = {
	...Default.args,
	device: 'tablet',
}

// Для мобильных устройств
export const Mobile: StoryFn<DropdownMenuProps> = Template.bind({})
Mobile.args = {
	...Default.args,
	device: 'mobile',
}

// Полный вариант с лейблом и иконкой
export const Complete: StoryFn<DropdownMenuProps> = Template.bind({})
Complete.args = {
	options: demoOptions,
	label: 'Выберите категорию',
	placeholder: 'Dropdown',
	leftIcon: <Heart size={18} />,
	device: 'desktop',
}

// Показ разных тем
export const AllThemes: StoryFn<DropdownMenuProps> = args => (
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
				<DropdownMenu {...args} />
				<DropdownMenu {...args} leftIcon={<User size={18} />} />
				<DropdownMenu {...args} disabled />
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
				<DropdownMenu {...args} />
				<DropdownMenu {...args} leftIcon={<User size={18} />} />
				<DropdownMenu {...args} disabled />
			</div>
		</ThemeProvider>
	</div>
)
AllThemes.args = {
	options: demoOptions,
	placeholder: 'Dropdown',
	device: 'desktop',
}
