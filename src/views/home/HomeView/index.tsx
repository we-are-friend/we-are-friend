import Hero from './Hero';
import ShowCase from './ShowCase';
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core';
import type { FC } from 'react';

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
  }),
);

const HomeView: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero />
      <ShowCase />
    </div>
  );
};

export default HomeView;
