import React from 'react';
import type { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import Hero from './Hero';

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
