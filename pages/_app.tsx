import { SettingsProvider } from 'src/contexts/SettingsContext';
import MuiThemeWrapper from '@/theme/MuiThemeWrapper';
import React from 'react';
import type { AppProps } from 'next/app';
import 'src/__mocks__';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <MuiThemeWrapper>
        <Component {...pageProps} />
      </MuiThemeWrapper>
    </SettingsProvider>
  );
}
export default MyApp;
