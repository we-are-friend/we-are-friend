import Hero from './Hero';
import React from 'react';
import { makeStyles } from '@material-ui/core';
import type { FC } from 'react';

const useStyles = makeStyles(() => ({
  root: {},
}));

const HomeView: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root} title="Home">
      <Hero />
      <Hero />
      <Hero />
    </div>
  );
};

export default HomeView;
