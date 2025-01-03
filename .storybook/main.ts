module.exports = {
  // Путь к файлам с историями
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [// Добавляет навигацию между историями
  '@storybook/addon-links', // Набор полезных инструментов
  '@storybook/addon-essentials', // Анализ доступности компонентов
  '@storybook/addon-a11y', '@chromatic-com/storybook'],

  framework: {
    name: '@storybook/react-vite',
    options: {}
  },

  docs: {}
};
