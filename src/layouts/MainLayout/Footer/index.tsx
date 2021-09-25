import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { animated, useSpring } from 'react-spring';
import Typography from '@material-ui/core/Typography';
import type { FC } from 'react';
import type { Theme } from 'src/theme';

interface FooterProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      zIndex: 1,
      position: 'relative',
      marginTop: -80,
      borderTopLeftRadius: theme.spacing(8),
      [theme.breakpoints.down('md')]: {
        paddingTop: 180,
        paddingBottom: 80,
      },
      height: 400,
    },
  }),
);

const Footer: FC<FooterProps> = ({ className }) => {
  const classes = useStyles();
  const styles = useSpring({
    config: { frequency: 1, duration: 4000 },
    loop: true,
    reverse: true,
    from: {
      opacity: 1,
      background:
        'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,153,184,1) 100%)',
    },
    to: [
      {
        opacity: 1,
        background:
          'linear-gradient(90deg, rgba(10,9,95,1) 0%, rgba(37,13,130,1) 38%, rgba(82,54,159,1) 100%)',
      },
      {
        opacity: 1,
        background:
          'linear-gradient(90deg, rgba(3,46,7,1) 0%, rgba(13,89,20,1) 50%, rgba(81,159,54,1) 100%)',
      },
      {
        opacity: 1,
        background:
          'linear-gradient(90deg, rgba(10,9,95,1) 0%, rgba(37,13,130,1) 38%, rgba(82,54,159,1) 100%)',
      },
      {
        opacity: 1,
        background:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,153,184,1) 100%)',
      },
    ],
  });

  return (
    <animated.div className={clsx(classes.root, className)} style={styles}>
      <Container>
        <Grid container style={{ paddingTop: 100 }}>
          <Grid item xs={3}>
            <Typography variant="h2">RESUME</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">ourproduct</Typography>
            <Typography variant="h6">We-are-resume</Typography>
            <Typography variant="h6">We-are-blog</Typography>
            <Typography variant="h6">RESUME</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body2">ourproduct</Typography>
            <Typography variant="h6">We-are-resume</Typography>
            <Typography variant="h6">We-are-blog</Typography>
            <Typography variant="h6">RESUME</Typography>
          </Grid>
          <Grid item xs={3}>
            <Paper
              style={{
                height: 200,
                background: 'rgba(255,255,255,0.8)',
                boxShadow: '20px 20px 40px -6px rgba(255,255,255,0.3)',
                backdropFilter: 'blur(4.5px)',
                // -webkit-backdrop-filter: 'blur(4.5px)',
                WebkitBackdropFilter: 'blur(4.5px)',
              }}
            >
              ref our message
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </animated.div>
  );
};

export default Footer;