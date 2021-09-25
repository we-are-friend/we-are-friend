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
      // backdropFilter: 'blur(20px)',
      // backgroundColor: 'rgba(0,0,0,0.38)',

      background: 'rgba(0,0,0,0.7)',
      boxShadow: '20px 20px 40px -6px rgba(0,0,0,0.3)',
      backdropFilter: 'blur(4.5px)',
      // -webkit-backdrop-filter: 'blur(4.5px)',
      WebkitBackdropFilter: 'blur(4.5px)',
      // boxShadow: theme.shadows[1],
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
      <AppBar className={classes.appbar}>
        <animated.div style={styles}>
          <Container>
            <HideOnScroll>
              <Toolbar className={classes.toolbar}>{children}</Toolbar>
            </HideOnScroll>
          </Container>
        </animated.div>
      </AppBar>
    </div>
  );
};

export default NavbarContainer;
