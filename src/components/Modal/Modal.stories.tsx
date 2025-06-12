import styled from '@emotion/styled'
import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import {
	buttonHeights,
	buttonPadding,
	buttonTypography,
} from '../../tokens/Buttons'
import { modalHeight, modalWidth } from '../../tokens/Modal'
import { fontSizes } from '../../tokens/Typography'
import Button from '../Button/Button'
import Typography from '../Typography/Typography'
import Modal from './Modal'

const devices = ['desktop', 'tablet', 'mobile'] as const

const PageWrapper = styled.div`
	padding: 48px;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f5f5f5;
`

const ResponsiveWrapper = styled.div`
	display: flex;
	gap: 48px;
	align-items: flex-start;
`

const DeviceContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 16px;
`

const DeviceTitle = styled.h3`
	margin: 0;
	margin-bottom: 8px;
	font-size: 1.5rem;
	font-weight: 600;
`

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

export const ResponsiveSize: Story = {
	...ModalTemplate,
	args: {
		...Basic.args,
		title: 'Адаптивные размеры',
		children: (
			<>
				<Typography variant="paragraph" style={{ marginBottom: '16px' }}>
					Размеры модального окна для разных устройств:
				</Typography>
				<Typography variant="paragraph">
					• Мобильный: {modalWidth.mobile} x {modalHeight.mobile}
				</Typography>
				<Typography variant="paragraph">
					• Планшет: {modalWidth.tablet} x {modalHeight.tablet}
				</Typography>
				<Typography variant="paragraph">
					• Десктоп: {modalWidth.desktop} x {modalHeight.desktop}
				</Typography>
			</>
		),
		
		showCancelButton: true,
		confirmButtonText: 'Понятно',
		cancelButtonText: 'Закрыть',
	},
}

export const Responsive: Story = {
	parameters: {
		layout: 'fullscreen',
	},
	args: {
		...Basic.args,
	},
	render: () => {
		return (
			<PageWrapper>
				<ResponsiveWrapper>
					{devices.map(device => (
						<DeviceContainer key={device}>
							<DeviceTitle>{device}</DeviceTitle>
							<Modal
								{...Basic.args}
								isOpen={true}
								onClose={() => {}}
								style={{
									position: 'static',
									width: modalWidth[device],
									minHeight: modalHeight[device],
									margin: 0,
								}}
							
							>
								<Typography
									variant="paragraph"
									style={{
										fontSize: fontSizes[device].paragraph,
										marginBottom: '24px',
									}}
								>
									Это модальное окно для {device} устройств
								</Typography>
								<div
									style={{
										display: 'flex',
										gap: '8px',
										justifyContent: 'flex-end',
									}}
								>
									
								</div>
							</Modal>
						</DeviceContainer>
					))}
				</ResponsiveWrapper>
			</PageWrapper>
		)
	},
}
