import Hero from './Hero';
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
    <div className={classes.root} title="Home">
      <Hero />
    </div>
  );
};

export default HomeView;
