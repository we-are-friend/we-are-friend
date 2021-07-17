import React, { useCallback, useRef } from 'react';
import type { FC } from 'react';
import useTodos from '@/stores/useTodo';
import ExampleUnOrderList from '@/components/ExampleUnOrderList';
import Heading from './Heading';
import Button from './Button';

const TodoForm: FC = () => {
  const { todos, addTodo, removeTodo } = useTodos((state) => state);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      addTodo(newTodoRef.current.value);
      newTodoRef.current.value = '';
    }
  }, [addTodo]);

  return (
    <div>
      <Heading title="Todos" />
      <ExampleUnOrderList
        itemClick={(item) => alert(item.id)}
        items={todos}
        render={(todo) => (
          <>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Remove</button>
          </>
        )}
      />
      <div>
        <input ref={newTodoRef} type="text" />
        <Button onClick={handleAddTodo}>Add Todo</Button>
      </div>
    </div>
  );
};

export default TodoForm;
