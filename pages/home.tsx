import MainLayout from '@/layouts/MainLayout';
import HomeView from '@/views/home/HomeView';
import React from 'react';
import type { FC } from 'react';

interface HomeProps {
  className?: string;
}

const HomePage: FC<HomeProps> = () => {
  return (
    <MainLayout>
      <HomeView />
    </MainLayout>
  );
};

export default HomePage;
