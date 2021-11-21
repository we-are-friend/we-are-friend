import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import type { FC } from 'react';
import type { Theme } from 'src/theme';

interface RecipeDetailProps {
  className?: string;
}

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  }),
);

const RecipeDetail: FC<RecipeDetailProps> = ({ className }) => {
  const classes = useStyles();
  return <div className={clsx(classes.root, className)}>FK</div>;
};

export default RecipeDetail;
