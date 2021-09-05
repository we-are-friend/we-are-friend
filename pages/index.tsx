import TestToggleThemeButton from '@/components/TestToggleThemeButton';
import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>

      <TestToggleThemeButton />
    </div>
  );
}
