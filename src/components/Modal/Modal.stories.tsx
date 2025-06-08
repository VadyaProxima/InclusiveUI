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
		onClose: () => console.log('Template onClose triggered'),
		children: <Typography variant="paragraph">Дети из шаблона</Typography>,
		title: 'Заголовок из шаблона',
	},
	render: args => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		const [isOpen, setIsOpen] = useState(args.isOpen)

		const handleOpen = () => setIsOpen(true)
		const handleClose = () => {
			setIsOpen(false)
			args.onClose?.()
		}

		return (
			<>
				<Button aria-label="Открыть модальное окно" onClick={handleOpen}>
					Открыть модальное окно
				</Button>
				<Modal {...args} isOpen={isOpen} onClose={handleClose}>
					{args.children}
				</Modal>
			</>
		)
	},
}

// --- Stories ---

export const Basic: Story = {
	...ModalTemplate,
	args: {
		...ModalTemplate.args,
		isOpen: true,
		title: 'Modal Basic',
		children: <Typography variant="paragraph">This is a text</Typography>,
		showCancelButton: false,
		onClose: () => console.log('Basic Modal closed'),
		onConfirm: () => console.log('Basic Confirmed!'),
		onCancel: () => console.log('Basic Cancelled!'),
	},
}

export const BasicWithCancel: Story = {
	...ModalTemplate,
	args: {
		...Basic.args,
		showCancelButton: true,
	},
}

export const Info: Story = {
	...ModalTemplate,
	args: {
		...Basic.args,
		variant: 'info',
		title: '',
		hideCloseButton: true,
		showCancelButton: false,
		statusTitle: 'This is some info',
		statusContent: 'Some contents...',
		confirmButtonText: 'OK',
	},
}

export const Success: Story = {
	...ModalTemplate,
	args: {
		...Info.args,
		variant: 'success',
		statusTitle: 'Some task has completed!',
	},
}

export const Warning: Story = {
	...ModalTemplate,
	args: {
		...Info.args,
		variant: 'warning',
		statusTitle: 'This is a warning message',
	},
}

export const Danger: Story = {
	...ModalTemplate,
	args: {
		...Info.args,
		variant: 'error',
		statusTitle: 'This is an error message',
	},
}
