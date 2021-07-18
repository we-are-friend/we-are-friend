import React from 'react';
import type { FC } from 'react';

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Header;
