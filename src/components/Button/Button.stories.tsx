import { ThemeProvider } from '@emotion/react'
import { Meta, StoryFn } from '@storybook/react'
import { Heart } from 'react-feather'
import { darkTheme, lightTheme } from '../../theme'
import Button, { ButtonProps } from './Button'

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'default', 'danger', 'text'],
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
		disabled: {
			control: { type: 'boolean' },
		},
		children: {
			control: { type: 'text' },
		},
		icon: {
			control: { type: 'object' },
		},
		iconPosition: {
			control: { type: 'radio' },
			options: ['left', 'right'],
		},
	},
} as Meta<ButtonProps>

const Template: StoryFn<ButtonProps> = args => (
	<ThemeProvider theme={lightTheme}>
		<Button {...args} />
	</ThemeProvider>
)

const AllThemesTemplate: StoryFn<ButtonProps> = args => (
	<div>
		<h3>Light Theme</h3>
		<ThemeProvider theme={lightTheme}>
			<div
				style={{
					display: 'flex',
					gap: '10px',
					alignItems: 'center',
					flexWrap: 'wrap',
					padding: '10px',
				}}
			>
				<Button {...args} variant="primary" />
				<Button {...args} variant="default" />
				<Button {...args} variant="danger" />
				<Button {...args} variant="text" />
				<Button {...args} variant="primary" disabled />
				<Button {...args} variant="default" disabled />
				<Button {...args} variant="danger" disabled />
				<Button {...args} variant="text" disabled />
			</div>
		</ThemeProvider>
		<h3 style={{ marginTop: '20px' }}>Dark Theme</h3>
		<ThemeProvider theme={darkTheme}>
			<div
				style={{
					display: 'flex',
					gap: '10px',
					alignItems: 'center',
					flexWrap: 'wrap',
					padding: '10px',
					background: darkTheme.colors.gray[100],
				}}
			>
				<Button {...args} variant="primary" />
				<Button {...args} variant="default" />
				<Button {...args} variant="danger" />
				<Button {...args} variant="text" />
				<Button {...args} variant="primary" disabled />
				<Button {...args} variant="default" disabled />
				<Button {...args} variant="danger" disabled />
				<Button {...args} variant="text" disabled />
			</div>
		</ThemeProvider>
	</div>
)

export const Primary: StoryFn<ButtonProps> = Template.bind({})
Primary.args = {
	children: 'Primary Button',
	variant: 'primary',
	size: 'medium',
	disabled: false,
}

export const Default: StoryFn<ButtonProps> = Template.bind({})
Default.args = {
	children: 'Default Button',
	variant: 'default',
	size: 'medium',
	disabled: false,
}

export const Danger: StoryFn<ButtonProps> = Template.bind({})
Danger.args = {
	children: 'Danger Button',
	variant: 'danger',
	size: 'medium',
	disabled: false,
}

export const Text: StoryFn<ButtonProps> = Template.bind({})
Text.args = {
	children: 'Text Button',
	variant: 'text',
	size: 'medium',
	disabled: false,
}

export const WithIconLeft: StoryFn<ButtonProps> = Template.bind({})
WithIconLeft.args = {
	children: 'Icon Left',
	variant: 'primary',
	size: 'medium',
	disabled: false,
	icon: <Heart />,
	iconPosition: 'left',
}

export const WithIconRight: StoryFn<ButtonProps> = Template.bind({})
WithIconRight.args = {
	children: 'Icon Right',
	variant: 'default',
	size: 'medium',
	disabled: false,
	icon: <Heart />,
	iconPosition: 'right',
}

export const IconOnly: StoryFn<ButtonProps> = Template.bind({})
IconOnly.args = {
	variant: 'primary',
	size: 'medium',
	disabled: false,
	icon: <Heart />,
	'aria-label': 'Heart',
}

export const PrimaryStates: StoryFn<ButtonProps> = args => (
	<ThemeProvider theme={lightTheme}>
		<div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
			<div>
				<h4>Default, Hover & Active States</h4>
				<p>Наведите или кликните на кнопку ниже:</p>
				<Button {...args} variant="primary" />
			</div>
			<div>
				<h4>Focus State</h4>
				<p>Кликните или используйте Tab для фокуса на кнопке ниже:</p>
				<Button {...args} variant="primary" />
			</div>
			<div>
				<h4>Disabled State</h4>
				<Button {...args} variant="primary" disabled />
			</div>
		</div>
	</ThemeProvider>
)
PrimaryStates.args = {
	children: 'Primary Button',
	size: 'medium',
}

export const AllThemes: StoryFn<ButtonProps> = AllThemesTemplate.bind({})
AllThemes.args = {
	children: 'Button',
	size: 'medium',
}
