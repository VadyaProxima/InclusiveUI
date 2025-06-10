import { ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { darkTheme, lightTheme } from '../../theme'
import Typography from '../Typography/Typography'
import { BreadcrumbItem } from './BreadcrumbItem'

const meta = {
	title: 'Components/BreadcrumbItem',
	component: BreadcrumbItem,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbItem>

export default meta
type Story = StoryObj<typeof meta>

const dropdownOptions = [
	{ value: 'option1', label: 'Категория 1' },
	{ value: 'option2', label: 'Категория 2' },
	{ value: 'option3', label: 'Категория 3' },
]

const Separator = () => (
	<Typography variant="paragraph" style={{ margin: '0 8px' }}>
		/
	</Typography>
)

export const Default: Story = {
	args: {
		children: 'Главная',
		href: '#',
	},
}

export const Active: Story = {
	args: {
		children: 'Текущая страница',
		href: '#',
		isActive: true,
	},
}

export const WithDropdown: Story = {
	args: {
		children: 'Категории',
		hasDropdown: true,
		dropdownOptions: dropdownOptions,
	},
}

export const IconOnly: Story = {
	args: {
		iconOnly: true,
		href: '#',
	},
}

export const IconWithDropdown: Story = {
	args: {
		iconOnly: true,
		hasDropdown: true,
		dropdownOptions: dropdownOptions,
	},
}

export const BreadcrumbTrail: Story = {
	render: () => (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<BreadcrumbItem iconOnly href="#" />
			<Separator />
			<BreadcrumbItem href="#">Продукты</BreadcrumbItem>
			<Separator />
			<BreadcrumbItem hasDropdown dropdownOptions={dropdownOptions}>
				Категории
			</BreadcrumbItem>
			<Separator />
			<BreadcrumbItem isActive={true}>Текущий элемент</BreadcrumbItem>
		</div>
	),
}

export const AllVariants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
			<div>
				<h4>Обычные хлебные крошки</h4>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<BreadcrumbItem href="#">Главная</BreadcrumbItem>
					<Separator />
					<BreadcrumbItem href="#">Продукты</BreadcrumbItem>
					<Separator />
					<BreadcrumbItem isActive={true}>Текущий элемент</BreadcrumbItem>
				</div>
			</div>

			<div>
				<h4>С иконкой и дропдауном</h4>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<BreadcrumbItem iconOnly href="#" />
					<Separator />
					<BreadcrumbItem hasDropdown dropdownOptions={dropdownOptions}>
						Категории
					</BreadcrumbItem>
					<Separator />
					<BreadcrumbItem isActive={true}>Текущий элемент</BreadcrumbItem>
				</div>
			</div>

			<div>
				<h4>Только иконки</h4>
				<div style={{ display: 'flex', alignItems: 'center' }}>
					<BreadcrumbItem iconOnly href="#" />
					<Separator />
					<BreadcrumbItem
						iconOnly
						hasDropdown
						dropdownOptions={dropdownOptions}
					/>
					<Separator />
					<BreadcrumbItem iconOnly isActive={true} href="#" />
				</div>
			</div>
		</div>
	),
}

export const ThemeVariants: Story = {
	render: () => (
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
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									marginBottom: '1rem',
								}}
							>
								<BreadcrumbItem iconOnly href="#" />
								<Separator />
								<BreadcrumbItem href="#">Продукты</BreadcrumbItem>
								<Separator />
								<BreadcrumbItem isActive={true}>Текущий элемент</BreadcrumbItem>
							</div>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<BreadcrumbItem iconOnly href="#" />
								<Separator />
								<BreadcrumbItem hasDropdown dropdownOptions={dropdownOptions}>
									Категории
								</BreadcrumbItem>
								<Separator />
								<BreadcrumbItem isActive={true}>
									Активный элемент
								</BreadcrumbItem>
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
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									marginBottom: '1rem',
								}}
							>
								<BreadcrumbItem iconOnly href="#" />
								<Separator />
								<BreadcrumbItem href="#">Продукты</BreadcrumbItem>
								<Separator />
								<BreadcrumbItem isActive={true}>Текущий элемент</BreadcrumbItem>
							</div>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<BreadcrumbItem iconOnly href="#" />
								<Separator />
								<BreadcrumbItem hasDropdown dropdownOptions={dropdownOptions}>
									Категории
								</BreadcrumbItem>
								<Separator />
								<BreadcrumbItem isActive={true}>
									Активный элемент
								</BreadcrumbItem>
							</div>
						</div>
					</div>
				</ThemeProvider>
			</div>
		</div>
	),
}
