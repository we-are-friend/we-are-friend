import TestToggleThemeButton from '@/components/TestToggleThemeButton';
import { contentfulConfig } from '@/config/env';
import RecipeCard from '@/components/RecipeCard';
import Head from 'next/head';
import React from 'react';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import { IRecipe, IRecipeFields } from '~/@types/generated/contentful';

export const getStaticProps: GetStaticProps = async () => {
  const client = createClient({
    space: contentfulConfig.space,
    accessToken: contentfulConfig.accessKey,
  });

  const res = await client.getEntries<IRecipeFields>({
    content_type: 'recipe',
  });

  return {
    props: {
      recipes: res.items,
    },
  };
};

export default function Home({ recipes }: { recipes: IRecipe[] }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta content="Generated by create next app" name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe.fields} />
      ))}
      <TestToggleThemeButton />
    </div>
  );
}
