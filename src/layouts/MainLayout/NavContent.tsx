import React from 'react';
import type { FC } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Typography } from '@material-ui/core';
import type { Theme } from 'src/theme';
import Grid from '@material-ui/core/Grid';
import RouterLink from '@/components/RouterLink';
import Box from '@material-ui/core/Box';
import ListRoundedIcon from '@material-ui/icons/ListRounded';

interface NavContentProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    textColor: {
      color: 'rgba(255,255,255,0.8)',
      '&:hover': {
        color: 'rgba(255,255,255,1)',
      },
    },
    startNav: {
      marginRight: theme.spacing(2),
    },
  }),
);

const NavContent: FC<NavContentProps> = ({ className }) => {
  const classes = useStyles();
  return (
    <Grid container className={clsx(classes.root, className)}>
      <Grid item xs={5}>
        <Box>
          <RouterLink
            className={clsx(classes.textColor, classes.startNav)}
            to="/"
          >
            <Typography display="inline" variant="subtitle2">
              Home
            </Typography>
          </RouterLink>
          <RouterLink className={classes.textColor} to="/">
            <Typography display="inline" variant="subtitle2">
              About us
            </Typography>
          </RouterLink>
        </Box>
      </Grid>

      <Grid item xs={2}>
        <Box display="flex" justifyContent="center">
          <RouterLink className={classes.textColor} to="/">
            <Typography display="inline" variant="h4">
              RESUME
            </Typography>
          </RouterLink>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Box alignItems="center" display="flex" justifyContent="flex-end">
          <RouterLink
            className={clsx(classes.textColor, classes.startNav)}
            to="/"
          >
            <Typography display="inline" variant="subtitle2">
              Contact
            </Typography>
          </RouterLink>

          <ListRoundedIcon />
        </Box>
      </Grid>
    </Grid>
  );
};

export default NavContent;
