import '@emotion/react';
import theme from './index';

type ThemeType = typeof theme;

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
