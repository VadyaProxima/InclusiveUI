import { ThemeProvider } from '@emotion/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { lightTheme } from '../../theme'
import { Avatar, AvatarProps } from './Avatar'

const meta: Meta<typeof Avatar> = {
	title: 'Components/Avatar',
	component: Avatar,
	tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Avatar>

const devices = ['desktop', 'tablet', 'mobile'] as const

export const AllSizes: Story = {
	render: () => {
		return (
			<ThemeProvider theme={lightTheme}>
				<div style={{ display: 'flex', gap: 32 }}>
					{devices.map(device => (
						<div
							key={device}
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: 16,
								alignItems: 'center',
							}}
						>
							<h3>{device}</h3>
							<Avatar device={device} letter="A" />
							<Avatar device={device} letter="A" badge="2" />
							<Avatar device={device} letter="A" showDot />
							<Avatar
								device={device}
								src="https://i.pravatar.cc/300"
								alt="User avatar"
							/>
							<Avatar
								device={device}
								src="https://i.pravatar.cc/300"
								alt="User avatar"
								badge="5"
							/>
							<Avatar
								device={device}
								src="https://i.pravatar.cc/300"
								alt="User avatar"
								showDot
							/>
						</div>
					))}
				</div>
			</ThemeProvider>
		)
	},
}

export const Responsive: Story = {
	render: () => {
		return (
			<ThemeProvider theme={lightTheme}>
				<div style={{ display: 'flex', gap: 32 }}>
					{devices.map(device => (
						<div
							key={device}
							style={{
								display: 'flex',
								flexDirection: 'column',
								gap: 16,
								alignItems: 'center',
							}}
						>
							<h3>{device}</h3>
							<div style={{ display: 'flex', gap: 16 }}>
								<Avatar device={device} letter="A" variant="circle" />
								<Avatar device={device} letter="B" variant="rounded" />
							</div>
							<div style={{ display: 'flex', gap: 16 }}>
								<Avatar
									device={device}
									src="https://i.pravatar.cc/300"
									alt="User avatar"
									variant="circle"
								/>
								<Avatar
									device={device}
									src="https://i.pravatar.cc/300"
									alt="User avatar"
									variant="rounded"
								/>
							</div>
						</div>
					))}
				</div>
			</ThemeProvider>
		)
	},
}

// Базовый шаблон
const Template: StoryFn<AvatarProps> = args => (
	<ThemeProvider theme={lightTheme}>
		<Avatar {...args} />
	</ThemeProvider>
)

// Круглый аватар с изображением
export const CircleWithImage = Template.bind({})
CircleWithImage.args = {
	src: 'https://i.pravatar.cc/300',
	alt: 'Аватар пользователя',
	variant: 'circle',
}

// Скругленный аватар с изображением
export const RoundedWithImage = Template.bind({})
RoundedWithImage.args = {
	src: 'https://i.pravatar.cc/300',
	alt: 'Аватар пользователя',
	variant: 'rounded',
}

// Круглый аватар с буквой
export const CircleWithLetter = Template.bind({})
CircleWithLetter.args = {
	letter: 'A',
	variant: 'circle',
}

// Скругленный аватар с буквой
export const RoundedWithLetter = Template.bind({})
RoundedWithLetter.args = {
	letter: 'B',
	variant: 'rounded',
}

// Аватар с бейджем-уведомлением
export const WithBadge = Template.bind({})
WithBadge.args = {
	src: 'https://i.pravatar.cc/300',
	badge: '3',
	variant: 'circle',
}

// Аватар с точкой
export const WithDot = Template.bind({})
WithDot.args = {
	src: 'https://i.pravatar.cc/300',
	showDot: true,
	variant: 'circle',
}

// Все варианты
export const AllVariants: StoryFn<AvatarProps> = args => (
	<ThemeProvider theme={lightTheme}>
		<div style={{ display: 'grid', gap: '24px' }}>
			<div>
				<h3>Круглые аватары</h3>
				<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
					<Avatar {...CircleWithImage.args} />
					<Avatar {...CircleWithImage.args} badge="99" />
					<Avatar {...CircleWithImage.args} showDot={true} />
					<Avatar {...CircleWithLetter.args} />
					<Avatar {...CircleWithLetter.args} badge="99" />
					<Avatar {...CircleWithLetter.args} showDot={true} />
				</div>
			</div>

			<div>
				<h3>Скругленные аватары</h3>
				<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
					<Avatar {...RoundedWithImage.args} />
					<Avatar {...RoundedWithImage.args} badge="99" />
					<Avatar {...RoundedWithImage.args} showDot={true} />
					<Avatar {...RoundedWithLetter.args} />
					<Avatar {...RoundedWithLetter.args} badge="99" />
					<Avatar {...RoundedWithLetter.args} showDot={true} />
				</div>
			</div>
		</div>
	</ThemeProvider>
)
