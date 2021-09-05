import ExampleView from '@/views/ExampleView';
import ExampleLayout from '@/layouts/ExampleLayout';
import React from 'react';
import type { FC } from 'react';

interface ExampleProps {
  className?: string;
}

const Example: FC<ExampleProps> = () => {
  return (
    <div>
      <ExampleLayout>
        <ExampleView />
      </ExampleLayout>
    </div>
  );
};

export default Example;
