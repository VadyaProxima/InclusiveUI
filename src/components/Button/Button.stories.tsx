import { ThemeProvider } from '@emotion/react'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
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
		'aria-label': {
			control: { type: 'text' },
			description: 'Обязательный accessibility label',
			table: {
				type: { summary: 'string' },
			},
		},
		'aria-describedby': {
			control: { type: 'text' },
			description: 'ID элемента, описывающего кнопку',
			table: {
				type: { summary: 'string | undefined' },
			},
		},
		'aria-haspopup': {
			control: { type: 'select' },
			options: [false, true, 'menu', 'listbox', 'tree', 'grid', 'dialog'],
			description: 'Указывает, вызывает ли кнопка всплывающий элемент',
			table: {
				type: { summary: "boolean | 'menu' | 'listbox' | ... | undefined" },
			},
		},
		'aria-expanded': {
			control: { type: 'boolean' },
			description: 'Указывает, развернут ли контролируемый элемент',
			table: {
				type: { summary: 'boolean | undefined' },
			},
		},
		'aria-controls': {
			control: { type: 'text' },
			description: 'ID контролируемого элемента',
			table: {
				type: { summary: 'string | undefined' },
			},
		},
	},
} as Meta<ButtonProps>

const Template: StoryFn<ButtonProps> = args => <Button {...args} />

const AllVariantsTemplate: StoryFn<ButtonProps> = args => (
	<div>
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
	</div>
)

export const Primary = Template.bind({})
Primary.args = {
	children: 'Primary Button',
	variant: 'primary',
	size: 'medium',
	disabled: false,
	'aria-label': 'Primary Button Action',
}

export const Default = Template.bind({})
Default.args = {
	children: 'Default Button',
	variant: 'default',
	size: 'medium',
	disabled: false,
	'aria-label': 'Default Button Action',
}

export const IconOnly = Template.bind({})
IconOnly.args = {
	variant: 'primary',
	size: 'medium',
	disabled: false,
	icon: <Heart />,
	'aria-label': 'Like Action',
}

export const Danger = Template.bind({})
Danger.args = {
	children: 'Danger Button',
	variant: 'danger',
	size: 'medium',
	disabled: false,
	'aria-label': 'Danger Button Action',
}

export const Text = Template.bind({})
Text.args = {
	children: 'Text Button',
	variant: 'text',
	size: 'medium',
	disabled: false,
	'aria-label': 'Text Button Action',
}

export const WithIconLeft = Template.bind({})
WithIconLeft.args = {
	children: 'Icon Left',
	variant: 'primary',
	size: 'medium',
	disabled: false,
	icon: <Heart />,
	iconPosition: 'left',
	'aria-label': 'Icon Left Action',
}

export const WithIconRight = Template.bind({})
WithIconRight.args = {
	children: 'Icon Right',
	variant: 'default',
	size: 'medium',
	disabled: false,
	icon: <Heart />,
	iconPosition: 'right',
	'aria-label': 'Icon Right Action',
}

export const PrimaryStates = args => (
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
)
PrimaryStates.args = {
	children: 'Primary Button',
	size: 'medium',
	'aria-label': 'Primary Button Action Example',
}

export const AllVariants = AllVariantsTemplate.bind({})
AllVariants.args = {
	children: 'Button',
	size: 'medium',
	'aria-label': 'Sample Button',
}

export const ThemeVariants: StoryFn<ButtonProps> = () => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
		<div>
			<h3>Светлая тема</h3>
			<ThemeProvider theme={lightTheme}>
				<div
					style={{
						padding: '1rem',
						background: lightTheme.colors.neutral.white,
						borderRadius: '8px',
					}}
				>
					<div style={{ marginBottom: '1rem' }}>
						<div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
							<Button variant="primary" aria-label="Primary">
								Primary
							</Button>
							<Button variant="default" aria-label="Default">
								Default
							</Button>
							<Button variant="danger" aria-label="Danger">
								Danger
							</Button>
							<Button variant="text" aria-label="Text">
								Text
							</Button>
						</div>
						<div style={{ display: 'flex', gap: '1rem' }}>
							<Button variant="primary" disabled aria-label="Primary Disabled">
								Primary
							</Button>
							<Button variant="default" disabled aria-label="Default Disabled">
								Default
							</Button>
							<Button variant="danger" disabled aria-label="Danger Disabled">
								Danger
							</Button>
							<Button variant="text" disabled aria-label="Text Disabled">
								Text
							</Button>
						</div>
					</div>
					<div>
						<div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
							<Button variant="primary" size="small" aria-label="Small">
								Small
							</Button>
							<Button variant="primary" size="medium" aria-label="Medium">
								Medium
							</Button>
							<Button variant="primary" size="large" aria-label="Large">
								Large
							</Button>
						</div>
						<div style={{ display: 'flex', gap: '1rem' }}>
							<Button
								variant="primary"
								icon={<Heart />}
								aria-label="Icon Only"
							/>
							<Button
								variant="primary"
								icon={<Heart />}
								iconPosition="left"
								aria-label="Icon Left"
							>
								Icon Left
							</Button>
							<Button
								variant="primary"
								icon={<Heart />}
								iconPosition="right"
								aria-label="Icon Right"
							>
								Icon Right
							</Button>
						</div>
					</div>
				</div>
			</ThemeProvider>
		</div>

		<div>
			<h3>Темная тема</h3>
			<ThemeProvider theme={darkTheme}>
				<div
					style={{
						padding: '1rem',
						background: darkTheme.colors.gray[100],
						borderRadius: '8px',
					}}
				>
					<div style={{ marginBottom: '1rem' }}>
						<div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
							<Button variant="primary" aria-label="Primary">
								Primary
							</Button>
							<Button variant="default" aria-label="Default">
								Default
							</Button>
							<Button variant="danger" aria-label="Danger">
								Danger
							</Button>
							<Button variant="text" aria-label="Text">
								Text
							</Button>
						</div>
						<div style={{ display: 'flex', gap: '1rem' }}>
							<Button variant="primary" disabled aria-label="Primary Disabled">
								Primary
							</Button>
							<Button variant="default" disabled aria-label="Default Disabled">
								Default
							</Button>
							<Button variant="danger" disabled aria-label="Danger Disabled">
								Danger
							</Button>
							<Button variant="text" disabled aria-label="Text Disabled">
								Text
							</Button>
						</div>
					</div>
					<div>
						<div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
							<Button variant="primary" size="small" aria-label="Small">
								Small
							</Button>
							<Button variant="primary" size="medium" aria-label="Medium">
								Medium
							</Button>
							<Button variant="primary" size="large" aria-label="Large">
								Large
							</Button>
						</div>
						<div style={{ display: 'flex', gap: '1rem' }}>
							<Button
								variant="primary"
								icon={<Heart />}
								aria-label="Icon Only"
							/>
							<Button
								variant="primary"
								icon={<Heart />}
								iconPosition="left"
								aria-label="Icon Left"
							>
								Icon Left
							</Button>
							<Button
								variant="primary"
								icon={<Heart />}
								iconPosition="right"
								aria-label="Icon Right"
							>
								Icon Right
							</Button>
						</div>
					</div>
				</div>
			</ThemeProvider>
		</div>
	</div>
)
