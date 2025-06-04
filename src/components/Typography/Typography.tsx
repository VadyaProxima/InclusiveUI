import { css, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Theme } from '../../theme' // Импортируем тип темы
import {
	fontFamily,
	fontSizes,
	fontWeights,
	lineHeights,
} from '../../tokens/Typography'

// 1. Определяем новый, четкий набор вариантов
export type TypographyVariant = keyof typeof typographyStyles

// 2. Определяем маппинг наших вариантов к токенам
// Это центральное место для настройки стилей каждого варианта
const typographyStyles = {
	heading1: { size: 'heading1', weight: 'heading1', lh: 'heading1' },
	heading2: { size: 'heading2', weight: 'heading2', lh: 'heading2' },
	heading3: { size: 'heading3', weight: 'heading3', lh: 'heading3' },
	heading4: { size: 'heading4', weight: 'heading4', lh: 'heading4' },
	heading5: { size: 'heading5', weight: 'heading5', lh: 'heading5' },
	heading6: { size: 'heading6', weight: 'heading6', lh: 'heading6' },
	bodyLarge: { size: 'bodyL', weight: 'body', lh: 'bodyL' },
	bodyLargeBold: { size: 'bodyL', weight: 'bodyBold', lh: 'bodyL' },
	bodyMedium: { size: 'bodyM', weight: 'body', lh: 'bodyM' },
	bodyMediumBold: { size: 'bodyM', weight: 'bodyBold', lh: 'bodyM' },
	bodySmall: { size: 'bodyS', weight: 'body', lh: 'bodyS' },
	bodySmallBold: { size: 'bodyS', weight: 'bodyBold', lh: 'bodyS' },
	paragraph: { size: 'paragraph', weight: 'paragraph', lh: 'paragraph' },
	paragraphBold: {
		size: 'paragraph',
		weight: 'paragraphBold',
		lh: 'paragraph',
	},
	paragraphLight: {
		size: 'paragraph',
		weight: 'paragraphLight',
		lh: 'paragraph',
	},
	label: { size: 'label', weight: 'label', lh: 'label' },
	labelBold: { size: 'label', weight: 'labelBold', lh: 'label' },
	labelLight: { size: 'label', weight: 'labelLight', lh: 'label' },
}

// Типы для ключей токенов (для строгости)
type FontSizeKey = keyof typeof fontSizes.desktop
type FontWeightKey = keyof typeof fontWeights
type LineHeightKey = keyof typeof lineHeights.desktop

// Определяем возможные теги
type ElementType =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'p'
	| 'span'
	| 'div'
	| 'label'

// 3. Обновляем пропсы компонента
export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
	/** Стилистический вариант текста (heading1, bodyMedium, labelBold и т.д.) */
	variant: TypographyVariant
	/** HTML-тег для рендеринга (если не указан, используется defaultElementMapping) */
	as?: ElementType
	/** Содержимое компонента */
	children: React.ReactNode
	/** Цвет текста (можно указать ключ из theme.colors.text или произвольный CSS цвет) */
	color?: keyof Theme['colors']['text'] | string
}

// 4. Обновляем маппинг вариантов на теги по умолчанию
const defaultElementMapping: Partial<Record<TypographyVariant, ElementType>> = {
	heading1: 'h1',
	heading2: 'h2',
	heading3: 'h3',
	heading4: 'h4',
	heading5: 'h5',
	heading6: 'h6',
	bodyLarge: 'p',
	bodyMedium: 'p',
	bodySmall: 'p',
	paragraph: 'p',
	label: 'span',
}

// Тип для пропсов StyledTypography, включая theme
interface StyledTypographyProps extends Omit<TypographyProps, 'color'> {
	theme: Theme
	textColor?: string // Цвет, который будет применен
}

// 5. Рефакторим StyledTypography
const StyledTypography = styled.p<StyledTypographyProps>`
	margin: 0;
	padding: 0;
	font-family: ${fontFamily.sans}; // Можно тоже вынести в тему
	color: ${props => props.textColor}; // Применяем вычисленный цвет

	${({ variant, theme }: StyledTypographyProps) => {
		const styles = typographyStyles[variant]
		if (!styles) {
			console.warn(`Typography: Invalid variant specified: ${variant}`)
			return '' // Возвращаем пустую строку или дефолтные стили
		}

		// Получаем ключи токенов из нашего маппинга
		const sizeKey = styles.size as FontSizeKey
		const weightKey = styles.weight as FontWeightKey
		const lhKey = styles.lh as LineHeightKey

		// Проверка существования ключей (на всякий случай)
		if (
			!(sizeKey in fontSizes.desktop) ||
			!(weightKey in fontWeights) ||
			!(lhKey in lineHeights.desktop)
		) {
			console.warn(`Typography: Token keys not found for variant: ${variant}`)
			return ''
		}

		// Применяем стили с медиа-запросами из темы
		return css`
			/* Стили по умолчанию (Mobile-first) */
			font-size: ${fontSizes.mobile[sizeKey]};
			font-weight: ${fontWeights[weightKey]};
			line-height: ${lineHeights.mobile[lhKey]};

			/* Tablet стили */
			@media (min-width: ${theme.breakpoints.tablet}) {
				font-size: ${fontSizes.tablet[sizeKey]};
				line-height: ${lineHeights.tablet[lhKey]};
				/* font-weight обычно не меняется */
			}

			/* Desktop стили */
			@media (min-width: ${theme.breakpoints.desktop}) {
				font-size: ${fontSizes.desktop[sizeKey]};
				line-height: ${lineHeights.desktop[lhKey]};
			}
		`
	}}
`

// 6. Рефакторим основной компонент
const Typography = ({
	as,
	variant,
	children,
	color,
	...props
}: TypographyProps) => {
	const theme = useTheme() // Получаем тему
	const Component = as || defaultElementMapping[variant] || 'span' // Определяем тег

	// Определяем финальный цвет
	let textColor: string | undefined
	if (color && color in theme.colors.text) {
		textColor = theme.colors.text[color as keyof Theme['colors']['text']]
	} else if (color) {
		textColor = color // Используем как есть, если это не ключ темы
	} else {
		textColor = theme.colors.text.Base // Цвет по умолчанию из темы
	}

	return (
		<StyledTypography
			as={Component}
			theme={theme} // Передаем тему для брейкпоинтов
			variant={variant}
			textColor={textColor}
			{...props}
		>
			{children}
		</StyledTypography>
	)
}

export default Typography
