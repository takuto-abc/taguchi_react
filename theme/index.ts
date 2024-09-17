// theme/index.ts

import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5f5f5',
      100: '#e0e0e0',
      // 他のカラーを定義
    },
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  // 他のカスタマイズ
});

export default theme;
