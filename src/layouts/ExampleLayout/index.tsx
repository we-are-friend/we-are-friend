import Header from './Header';
import Footer from './Footer';
import React, { ReactNode } from 'react';
import type { FC } from 'react';

interface ExampleLayoutProps {
  children?: ReactNode;
}

const ExampleLayout: FC<ExampleLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header title="Header Layout" />
      {children}
      <Footer title="Footer Layout" />
    </div>
  );
};

export default ExampleLayout;
