import React from 'react';
import ExampleUnOrderList from '@/components/ExampleUnOrderList';
import useTodos from '@/stores/useTodo';

const TodosList = () => {
  const todos = useTodos((state) => state.todos);
  return (
    <ExampleUnOrderList
      itemClick={() => {}}
      items={todos}
      render={(todo) => <>{todo.text}</>}
    />
  );
};

export default TodosList;
