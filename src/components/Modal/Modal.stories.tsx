import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import Button from '../Button/Button'
import Typography from '../Typography/Typography'
import Modal from './Modal'

const meta = {
	title: 'Components/Modal',
	component: Modal,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'Компонент модального окна для отображения контента поверх основного интерфейса.',
			},
		},
	},
	tags: ['autodocs'],
	argTypes: {
		isOpen: { control: 'boolean' },
		title: { control: 'text' },
		device: { control: 'radio', options: ['desctop', 'tablet', 'mobile'] },
		hideCloseButton: { control: 'boolean' },
		showCancelButton: { control: 'boolean' },
		cancelButtonText: { control: 'text' },
		showConfirmButton: { control: 'boolean' },
		confirmButtonText: { control: 'text' },
		confirmButtonVariant: {
			control: 'select',
			options: ['primary', 'secondary', 'tertiary', 'danger'],
		},
	},
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

// --- Template for stories ---
const ModalTemplate: Story = {
	args: {
		isOpen: false,
		onClose: () => console.log('Template onClose triggered'), // Default for template
		children: <Typography variant="paragraph">Дети из шаблона</Typography>, // Default children for template
		title: 'Заголовок из шаблона', // Default title
		// Можно добавить другие обязательные или часто используемые пропсы с дефолтными значениями
	},
	render: args => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isOpen, setIsOpen] = useState(args.isOpen)

		const handleOpen = () => setIsOpen(true)
		const handleClose = () => {
			setIsOpen(false)
			// Call onClose from args if provided, to ensure Storybook action is logged
			args.onClose?.()
		}

		return (
			<>
				<Button aria-label="Открыть модальное окно" onClick={handleOpen}>
					Открыть модальное окно
				</Button>
				<Modal {...args} isOpen={isOpen} onClose={handleClose}>
					{args.children || (
						<Typography variant="paragraph">
							Это содержимое модального окна. Здесь может быть любой
							React-компонент или текст. Можно добавить больше контента, чтобы
							проверить прокрутку.
							<br /> <br />
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</Typography>
					)}
				</Modal>
			</>
		)
	},
}

// --- Stories ---

export const Default: Story = {
	...ModalTemplate,
	args: {
		...ModalTemplate.args, // Наследуем args из шаблона
		isOpen: false, // Переопределяем или подтверждаем
		title: 'Заголовок модального окна',
		device: 'desctop',
		children: (
			<Typography variant="paragraph">
				Это основное содержимое модального окна для демонстрации.
			</Typography>
		),
		onClose: () => console.log('Default Modal closed'),
		onConfirm: () => console.log('Default Confirmed!'),
		onCancel: () => console.log('Default Cancelled!'),
	},
}

export const Mobile: Story = {
	...ModalTemplate,
	args: {
		...Default.args,
		device: 'mobile',
		title: 'Мобильное окно',
	},
}

export const Tablet: Story = {
	...ModalTemplate,
	args: {
		...Default.args,
		device: 'tablet',
		title: 'Планшетное окно',
	},
}

export const WithoutTitle: Story = {
	...ModalTemplate,
	args: {
		...Default.args,
		title: undefined,
	},
}

export const WithoutCloseButton: Story = {
	...ModalTemplate,
	args: {
		...Default.args,
		hideCloseButton: true,
	},
}

export const CustomFooter: Story = {
	...ModalTemplate,
	args: {
		...Default.args, // Наследуем Default args, который уже содержит все необходимое
		title: 'Окно с кастомным футером',
		footerContent: (
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					width: '100%',
				}}
			>
				<Button aria-label="Доп. действие" variant="text">
					Доп. действие
				</Button>
				<Button
					aria-label="Удалить"
					variant="danger"
					onClick={() => console.log('Deleted')}
				>
					Удалить
				</Button>
			</div>
		),
		// Hide default buttons when custom footer is provided
		showCancelButton: false,
		showConfirmButton: false,
	},
}

export const OnlyConfirmButton: Story = {
	...ModalTemplate,
	args: {
		...Default.args,
		title: 'Только подтверждение',
		showCancelButton: false,
	},
}

export const LongContent: Story = {
	...ModalTemplate,
	args: {
		...Default.args,
		title: 'Окно с длинным контентом',
		children: (
			<Typography variant="paragraph">
				{[...Array(20)].map((_, i) => (
					<React.Fragment key={i}>
						Это строка номер {i + 1} для проверки прокрутки в модальном окне.{' '}
						<br />
					</React.Fragment>
				))}
			</Typography>
		),
	},
}
