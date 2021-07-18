import React from 'react';
import TodosList from './TodosList';
import TodoForm from './TodoForm';

const ExampleView = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: '50% 50%',
    }}
  >
    <TodoForm />
    <TodosList />
  </div>
);

export default ExampleView;
