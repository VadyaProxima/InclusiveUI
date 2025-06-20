# InclusiveUI

InclusiveUI — это библиотека инклюзивных и доступных React-компонентов, созданная с упором на качество, производительность и соблюдение лучших практик веб-разработки. Компоненты разработаны с учетом принципов доступности, обеспечивая поддержку ARIA-меток, клавиатурной навигации и более широкую инклюзивность для всех пользователей.

## Особенности

- **Инклюзивный дизайн**: компоненты ориентированы на доступность, что позволяет использовать их всеми категориями пользователей.
- **Модульная архитектура**: проект разделен на логические части, каждая из которых обслуживает свою функциональность.
- **Storybook интеграция**: демонстрация компонентов представлена через `/.storybook` и истории в каталоге `./stories`.
- **Единый дизайн-токен**: стили и темы определены в `./src/tokens` и `./src/theme.ts` для обеспечения консистентности интерфейса.
- **Публикация на npm**: проект доступен для установки через npm, что облегчает интеграцию и использование в других проектах.

## Структура проекта

- `/.storybook` — Конфигурация и настройки для Storybook, предназначенные для визуальной демонстрации компонентов.
- `/src` — Исходный код компонентов, утилит и дизайн-токенов, обеспечивающих стили и тему.
- `/stories` — Истории для визуализации и тестирования компонентов в Storybook.

Проект выложен на npm, что позволяет легко подключать библиотеку в любые проекты.

## Установка

Установите библиотеку через npm:

```bash
npm install InclusiveUI
```

## Использование

Импортируйте и используйте компоненты в вашем проекте:

```jsx
import { Modal } from 'InclusiveUI'

function App() {
	return (
		<Modal isOpen={true} onClose={() => console.log('Модальное окно закрыто')}>
			<p>Пример использования модального окна</p>
		</Modal>
	)
}

export default App
```

## Доступность и инклюзивность

Каждый компонент разработан с учетом следующих принципов:

- Поддержка клавиатурной навигации и событий, таких как нажатие клавиши Escape для закрытия модальных окон.
- Использование ARIA-меток для улучшения взаимодействия с вспомогательными устройствами.
- Четкая и понятная визуальная и функциональная реализация, обеспечивающая удобство для всех пользователей.

## Дизайн и тема

Проект использует систему дизайн-токенов, позволяющую легко менять тему и стили компонентов. Все настройки находятся в `./src/tokens` и `./src/theme.ts`.

## Контрибуция

Мы приветствуем вклад сообщества! Ознакомьтесь с инструкциями по внесению изменений и отправке pull request, чтобы помочь улучшить библиотеку.

