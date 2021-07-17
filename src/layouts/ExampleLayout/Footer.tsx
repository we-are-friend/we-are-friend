import React from 'react';
import type { FC } from 'react';

interface FooterProps {
  title?: string;
}

const Footer: FC<FooterProps> = ({ title }) => {
  return <h1>{title}</h1>;
};

export default Footer;
