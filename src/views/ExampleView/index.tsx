import TodosList from './TodosList';
import TodoForm from './TodoForm';
import axios from '@/utils/axios';
import React, { useEffect } from 'react';

const getUserData = async () => {
  try {
    const response = await axios.get('/user');
    // eslint-disable-next-line no-console
    console.log(response.data);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
};

const ExampleView = () => {
  useEffect(() => {
    getUserData();
  }, []);
  return (
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
};

export default ExampleView;
