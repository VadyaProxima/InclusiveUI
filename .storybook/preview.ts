import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;


//конфиг Для тем (js 
// import React from 'react';
// import { ThemeProvider } from '@emotion/react';
// import theme from '../src/styles/theme';

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <Story />
//     </ThemeProvider>
//   ),
// ];
