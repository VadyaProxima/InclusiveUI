import { ThemeProvider } from '@emotion/react'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { darkTheme, lightTheme } from '../../theme'
import Typography from './Typography'

// Определяем варианты явно, ПЕРЕД использованием в meta
const typographyVariantOptions = [
	'heading1',
	'heading2',
	'heading3',
	'heading4',
	'heading5',
	'heading6',
	'bodyLarge',
	'bodyLargeBold',
	'bodyMedium',
	'bodyMediumBold',
	'bodySmall',
	'bodySmallBold',
	'paragraph',
	'paragraphBold',
	'paragraphLight',
	'label',
	'labelBold',
	'labelLight',
] as const

const meta = {
	title: 'Components/Typography',
	component: Typography,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: typographyVariantOptions, // Теперь константа определена
		},
		as: {
			control: 'select',
			options: [
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'p',
				'span',
				'div',
				'label',
			],
		},
		color: {
			control: 'select',
			options: [
				undefined,
				...Object.keys(lightTheme.colors.text),
				'#ff5500',
				'blue',
			],
		},
	},
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

// Обновляем рендер для всех историй, чтобы использовать ThemeProvider правильно
const defaultRender = (args: any, { globals }: { globals: any }) => (
	<ThemeProvider theme={globals.theme === 'dark' ? darkTheme : lightTheme}>
		<div style={{ padding: '10px' }}>
			<Typography {...args} />
		</div>
	</ThemeProvider>
)

// Базовая история
export const Default: Story = {
	args: {
		variant: 'paragraph',
		children: 'Это пример текста для компонента Typography',
	},
	render: defaultRender,
}

// Примеры вариантов
export const Heading1: Story = {
	args: {
		variant: 'heading1',
		children: 'Заголовок первого уровня',
	},
	render: defaultRender,
}

export const BodyLargeBold: Story = {
	args: {
		variant: 'bodyLargeBold',
		children: 'Крупный жирный основной текст',
	},
	render: defaultRender,
}

export const LabelLight: Story = {
	args: {
		variant: 'labelLight',
		children: 'Облегченная метка',
	},
	render: defaultRender,
}

// Примеры с цветами
export const SecondaryColor: Story = {
	args: {
		variant: 'paragraph',
		children: 'Текст вторичного цвета (из темы)',
		color: 'Secondary',
	},
	render: defaultRender,
}

export const CustomCSSColor: Story = {
	args: {
		variant: 'heading2',
		children: 'Заголовок с пользовательским CSS цветом',
		color: '#ff5500',
	},
	render: defaultRender,
}

// Пример с другим HTML элементом
export const DifferentElement: Story = {
	args: {
		variant: 'paragraph',
		as: 'div',
		children: 'Этот текст рендерится как div, а не p',
	},
	render: defaultRender,
}

// Демонстрация тем (используем кастомный рендер)
export const DarkThemeDemo: Story = {
	args: {
		variant: 'paragraph',
		children:
			'Параграф в темной теме (рендер внутри). Используйте глобальный переключатель тем Storybook для переключения всех историй.',
		// Можно закомментировать render ниже, чтобы использовать defaultRender и глобальный переключатель тем
	},
	render: args => (
		<ThemeProvider theme={darkTheme}>
			<div
				style={{
					padding: '20px',
					background: darkTheme.colors.gray[100],
					color: darkTheme.colors.text.Base,
				}}
			>
				<Typography {...args} />
				<hr style={{ margin: '10px 0' }} />
				<Typography variant="heading3" color="LightSolid">
					Заголовок в темной теме (LightSolid)
				</Typography>
				<Typography variant="label" color="Secondary">
					Метка в темной теме (Secondary)
				</Typography>
			</div>
		</ThemeProvider>
	),
}
