import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ReactNode } from 'react'
import { Theme } from '../../theme'
import {
	avatarBorder,
	avatarHeight,
	avatarPaddingHorizontal,
	avatarPaddingVertical,
	avatarWidth,
	badgeHeight,
	badgeWidth,
	dotSize,
} from '../../tokens/Avatar'
import { colors } from '../../tokens/colors'
import Typography from '../Typography/Typography'

export interface AvatarProps {
	/**
	 * Путь к изображению пользователя
	 */
	src?: string
	/**
	 * Альтернативный текст для изображения
	 */
	alt?: string
	/**
	 * Буква, которая отображается при отсутствии изображения
	 */
	letter?: string
	/**
	 * Содержимое бейджа (если не указано, бейдж не отображается)
	 */
	badge?: ReactNode
	/**
	 * Показывать точку вместо бейджа
	 */
	showDot?: boolean
	/**
	 * Тип скругления аватара
	 */
	variant?: 'rounded' | 'circle'
	/**
	 * ARIA-label для аватара
	 */
	'aria-label'?: string
	/**
	 * Дополнительный класс
	 */
	className?: string
	/**
	 * Устройство для адаптивности
	 */
	device?: 'desktop' | 'tablet' | 'mobile'
}

interface StyledWithTheme {
	theme: Theme
	device?: 'desktop' | 'tablet' | 'mobile'
}

interface AvatarActualContainerProps extends StyledWithTheme {
	variant: 'rounded' | 'circle'
}

interface BadgeStyledProps extends StyledWithTheme {
	isDot: boolean
}

const getDeviceStyles = (props: StyledWithTheme) => {
	const device = props.device || 'desktop'
	return css`
		padding: ${avatarPaddingVertical[device]} ${avatarPaddingHorizontal[device]};
	`
}

const AvatarRoot = styled.div<StyledWithTheme>`
	display: inline-flex;
	position: relative;
	box-sizing: border-box;
	transform: translateX(0.5px);
	${getDeviceStyles}
`

const getAvatarContainerDeviceStyles = (props: AvatarActualContainerProps) => {
	const device = props.device || 'desktop'
	return css`
		width: ${avatarWidth[device]};
		height: ${avatarHeight[device]};
		border-radius: ${props.variant === 'rounded'
			? avatarBorder.tiny[device]
			: avatarBorder.full[device]};
	`
}

const AvatarActualContainer = styled.div<AvatarActualContainerProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${colors.light.purple[400]};
	position: relative;
	box-sizing: border-box;
	overflow: visible;
	transform: translateX(-0.5px);
	${getAvatarContainerDeviceStyles}
`

const AvatarImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: inherit;
`

const LetterContainer = styled.div<{
	device?: 'desktop' | 'tablet' | 'mobile'
}>`
	color: ${colors.light.neutral.black};
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	/* Стили для Typography внутри */
	> * {
		display: flex;
		align-items: center;
		justify-content: center;
		line-height: 1 !important;
		transform: translate(-0.5px, -1px);
		text-align: center;
		font-size: ${({ device }) => {
			switch (device) {
				case 'mobile':
					return '1.125rem' // 18px
				case 'tablet':
					return '1.25rem' // 20px
				case 'desktop':
				default:
					return '1.25rem' // 20px
			}
		}};
	}
`

const getBadgeDeviceStyles = (props: BadgeStyledProps) => {
	const device = props.device || 'desktop'
	return css`
		width: ${props.isDot ? dotSize[device] : badgeWidth[device]};
		height: ${props.isDot ? dotSize[device] : badgeHeight[device]};
	`
}

const Badge = styled.div<BadgeStyledProps>`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: ${colors.light.red[600]};
	border-radius: 50%;
	top: 0;
	right: 0;
	transform: translate(50%, -50%);
	z-index: 1;
	${({ isDot }) =>
		!isDot &&
		css`
			border: 1px solid ${colors.light.gray[50]};
		`}
	${getBadgeDeviceStyles}

	/* Стили для Typography внутри */
	> * {
		font-size: ${({ device }) => {
			switch (device) {
				case 'mobile':
					return '0.875rem' // 14px
				case 'tablet':
					return '0.9375rem' // 15px
				case 'desktop':
				default:
					return '1rem' // 16px
			}
		}};
	}
`

export const Avatar: React.FC<AvatarProps> = ({
	src,
	alt = 'User avatar',
	letter,
	badge,
	showDot = false,
	variant = 'circle',
	'aria-label': ariaLabel,
	className,
	device = 'desktop',
}) => {
	const theme = useTheme() as Theme
	const hasBadgeOrDot = Boolean(badge) || showDot

	const displayLetter = React.useMemo(() => {
		if (letter) return letter.charAt(0).toUpperCase()
		if (ariaLabel) return ariaLabel.charAt(0).toUpperCase()
		return src ? '' : 'A'
	}, [letter, ariaLabel, src])

	return (
		<AvatarRoot
			theme={theme}
			className={className}
			aria-label={ariaLabel}
			device={device}
		>
			<AvatarActualContainer theme={theme} variant={variant} device={device}>
				{src ? (
					<AvatarImage src={src} alt={alt} />
				) : (
					<LetterContainer device={device}>
						<Typography
							variant="bodyLargeBold"
							color="black"
							style={{
								width: '100%',
								height: '100%',
							}}
						>
							{displayLetter}
						</Typography>
					</LetterContainer>
				)}
				{hasBadgeOrDot && (
					<Badge theme={theme} isDot={showDot} device={device}>
						{!showDot && badge && (
							<Typography
								variant="label"
								style={{ color: colors.light.gray[50] }}
							>
								{badge}
							</Typography>
						)}
					</Badge>
				)}
			</AvatarActualContainer>
		</AvatarRoot>
	)
}
