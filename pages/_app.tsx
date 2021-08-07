import type { AppProps } from 'next/app';
import React from 'react';
import { SettingsProvider } from 'src/contexts/SettingsContext';
import MuiThemeWrapper from '@/theme/MuiThemeWrapper';
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
