import ExampleUnOrderList from '@/components/ExampleUnOrderList';
import useTodos from '@/stores/useTodo';
import React from 'react';

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
