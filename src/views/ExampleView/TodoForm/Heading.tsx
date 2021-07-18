import React from 'react';
import type { FC } from 'react';

interface HeadingProps {
  title?: string;
}

const Heading: FC<HeadingProps> = ({ title }) => {
  return <h2>{title}</h2>;
};

export default Heading;
