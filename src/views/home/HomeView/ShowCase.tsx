import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import type { FC } from 'react';
import type { Theme } from 'src/theme';

interface ShowCaseProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      height: 1000,
      zIndex: -1,
      marginTop: -80,
      backgroundColor: 'white',
      paddingTop: 200,
      paddingBottom: 100,
      borderBottomLeftRadius: theme.spacing(8),
      borderBottomRightRadius: theme.spacing(8),
      [theme.breakpoints.down('md')]: {
        paddingTop: 180,
        paddingBottom: 180,
        borderBottomLeftRadius: theme.spacing(4),
        borderBottomRightRadius: theme.spacing(4),
      },
    },
  }),
);

const ShowCase: FC<ShowCaseProps> = ({ className }) => {
  const classes = useStyles();
  return <div className={clsx(classes.root, className)}></div>;
};

export default ShowCase;
