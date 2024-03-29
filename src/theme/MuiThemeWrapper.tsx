import { createTheme } from 'src/theme';
import useSettings from '@/hooks/useSettings';
import React, { ReactNode, useEffect } from 'react';
import { StylesProvider, ThemeProvider, CssBaseline } from '@material-ui/core';
import { NextComponentType, NextPageContext } from 'next';
import type { FC } from 'react';

interface MuiThemeWrapperProps {
  className?: string;
  children?: NextComponentType<NextPageContext, any, {}> | ReactNode;
}

const MuiThemeWrapper: FC<MuiThemeWrapperProps> = ({ children }) => {
  const { settings } = useSettings();

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme,
  });

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <CssBaseline />
        {children}
      </StylesProvider>
    </ThemeProvider>
  );
};

export default MuiThemeWrapper;
