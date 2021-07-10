import React from 'react';
import type { FC } from 'react';

interface MyFirstComponentProps {
  className?: string;
}

const MyFirstComponent: FC<MyFirstComponentProps> = () => {
  return <div>Hello</div>;
};

export default MyFirstComponent;
