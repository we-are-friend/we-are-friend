import HideOnScroll from './HideOnScroll';
import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useSpring, animated } from 'react-spring';
import Container from '@material-ui/core/Container';
import type { Theme } from 'src/theme';
import type { FC } from 'react';

interface NavbarContainerProps {
  children?: ReactNode;
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    appbar: {
      backgroundColor: 'transparent',
      boxShadow: theme.shadows[0],
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    toolbar: {
      backgroundColor: '#040710',
      boxShadow: theme.shadows[1],
      margin: theme.spacing(3, 0),
      borderRadius: theme.spacing(2),
    },
  }),
);

const NavbarContainer: FC<NavbarContainerProps> = ({ className, children }) => {
  const classes = useStyles();
  const onScrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  const styles = useSpring({
    width: onScrollTrigger ? '80%' : '100%',
  });

  return (
    <div className={clsx(classes.root, className)}>
      <HideOnScroll>
        <AppBar className={classes.appbar}>
          <animated.div style={styles}>
            <Container>
              <Toolbar className={classes.toolbar}>{children}</Toolbar>
            </Container>
          </animated.div>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default NavbarContainer;
