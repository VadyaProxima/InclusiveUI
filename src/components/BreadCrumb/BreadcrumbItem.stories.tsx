import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { colors } from '../../tokens/colors'
import Typography from '../Typography/Typography'
import { BreadcrumbItem } from './BreadcrumbItem'

const meta = {
	title: 'Components/BreadcrumbItem',
	component: BreadcrumbItem,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
### Размеры текста для разных устройств:
- Desktop: 18px
- Tablet: 16px
- Mobile: 14px
				`,
			},
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof BreadcrumbItem>

export default meta
type Story = StoryObj<typeof meta>

// Опции для выпадающего меню
const dropdownOptions = [
	{ value: 'option1', label: 'Категория 1' },
	{ value: 'option2', label: 'Категория 2' },
	{ value: 'option3', label: 'Категория 3' },
]

// Компонент сепаратора
const Separator = () => (
	<div
		style={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			padding: '6px',
			width: '30px',
			height: '30px',
		}}
	>
		<Typography variant="paragraph" color={colors.light.gray[800]}>
			/
		</Typography>
	</div>
)

// Обычная ссылка
export const Default: Story = {
	args: {
		children: 'Главная',
		href: '#',
	},
}

// Активная ссылка
export const Active: Story = {
	args: {
		children: 'Текущая страница',
		href: '#',
		isActive: true,
	},
}

// Ссылка с выпадающим меню
export const WithDropdown: Story = {
	args: {
		children: 'Категории',
		hasDropdown: true,
		dropdownOptions: dropdownOptions,
	},
}

// Только иконка
export const IconOnly: Story = {
	args: {
		iconOnly: true,
		href: '#',
	},
}

// Иконка с выпадающим меню
export const IconWithDropdown: Story = {
	args: {
		iconOnly: true,
		hasDropdown: true,
		dropdownOptions: dropdownOptions,
	},
}

// Мобильная версия
export const Mobile: Story = {
	args: {
		children: 'Мобильная версия текста',
		href: '#',
		device: 'mobile',
	},
}

// Планшетная версия
export const Tablet: Story = {
	args: {
		children: 'Планшетная версия текста',
		href: '#',
		device: 'tablet',
	},
}

// Группа хлебных крошек для разных устройств
const BreadcrumbGroupTemplate: Story = {
	render: args => (
		<div
			style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
		>
			<BreadcrumbItem iconOnly href="#" device={args.device} isActive={false} />
			<Separator />
			<BreadcrumbItem href="#" device={args.device} isActive={false}>
				Продукты
			</BreadcrumbItem>
			<Separator />
			<BreadcrumbItem
				hasDropdown
				dropdownOptions={dropdownOptions}
				device={args.device}
				isActive={false}
			>
				Категории
			</BreadcrumbItem>
			<Separator />
			<BreadcrumbItem device={args.device} isActive={true}>
				Текущий элемент
			</BreadcrumbItem>
		</div>
	),
}

// Группа с иконкой и дропдауном
const BreadcrumbWithIconDropdownTemplate: Story = {
	render: args => (
		<div
			style={{ display: 'flex', alignItems: 'center', position: 'relative' }}
		>
			<BreadcrumbItem
				iconOnly
				hasDropdown
				dropdownOptions={dropdownOptions}
				device={args.device}
				isActive={false}
			/>
			<Separator />
			<BreadcrumbItem href="#" device={args.device} isActive={false}>
				Продукты
			</BreadcrumbItem>
			<Separator />
			<BreadcrumbItem device={args.device} isActive={true}>
				Текущий элемент
			</BreadcrumbItem>
		</div>
	),
}

export const DesktopGroup = {
	...BreadcrumbGroupTemplate,
	args: {
		device: 'desktop',
	},
}

export const TabletGroup = {
	...BreadcrumbGroupTemplate,
	args: {
		device: 'tablet',
	},
}

export const MobileGroup = {
	...BreadcrumbGroupTemplate,
	args: {
		device: 'mobile',
	},
}

export const DesktopWithIconDropdown = {
	...BreadcrumbWithIconDropdownTemplate,
	args: {
		device: 'desktop',
	},
}

export const TabletWithIconDropdown = {
	...BreadcrumbWithIconDropdownTemplate,
	args: {
		device: 'tablet',
	},
}

export const MobileWithIconDropdown = {
	...BreadcrumbWithIconDropdownTemplate,
	args: {
		device: 'mobile',
	},
}
