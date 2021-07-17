import React from 'react';
import type { FC } from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title?: string;
}

const Button: FC<ButtonProps> = ({ title, children, style, ...rest }) => (
  <button
    {...rest}
    style={{
      ...style,
      backgroundColor: 'blue',
      color: 'white',
    }}
  >
    {title ?? children}
  </button>
);

export default Button;
