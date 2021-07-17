import React from 'react';
import type { FC } from 'react';
import ExampleView from '@/views/ExampleView';
import ExampleLayout from '@/layouts/ExampleLayout';

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
