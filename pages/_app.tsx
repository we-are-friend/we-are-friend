import type { AppProps } from 'next/app';
import React from 'react';
import { SettingsProvider } from 'src/contexts/SettingsContext';
import MuiThemeWrapper from '@/theme/MuiThemeWrapper';
// import 'src/__mocks__';
import { Provider as NextAuthProvider } from 'next-auth/client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SettingsProvider>
      <MuiThemeWrapper>
        <NextAuthProvider session={pageProps.session}>
          <Component {...pageProps} />
        </NextAuthProvider>
      </MuiThemeWrapper>
    </SettingsProvider>
  );
}
export default MyApp;
