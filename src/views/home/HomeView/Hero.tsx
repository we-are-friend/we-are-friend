import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
  createStyles,
} from '@material-ui/core';
import type { FC } from 'react';
import type { Theme } from 'src/theme';

interface HeroProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      zIndex: 2,
      backgroundColor: theme.palette.background.dark,
      paddingTop: 200,
      paddingBottom: 80,
      borderBottomRightRadius: theme.spacing(8),
      [theme.breakpoints.down('md')]: {
        paddingTop: 180,
        paddingBottom: 80,
        borderBottomRightRadius: theme.spacing(4),
      },
    },
  }),
);

const Hero: FC<HeroProps> = ({ className }) => {
  const classes = useStyles();

  return (
    <section className={clsx(classes.root, className)}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Box
              display="flex"
              flexDirection="column"
              height="100%"
              justifyContent="center"
            >
              <Typography color="secondary" variant="overline">
                we are friend
              </Typography>
              <Typography color="textPrimary" variant="h1">
                THE RESUME
                <Typography
                  style={{
                    fontWeight: 'bold',
                    background: 'linear-gradient(to right, #007FFF, #0059B2)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                  variant="h1"
                >
                  PLATFORM
                </Typography>{' '}
                TO GET NEW JOB
              </Typography>
              <Box mt={3}>
                <Typography color="textSecondary" variant="body1">
                  Create easy resume and guide you to
                </Typography>
              </Box>
              <Box mt={3}>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography color="secondary" variant="h1">
                      20
                    </Typography>
                    <Typography color="textSecondary" variant="overline">
                      Sample
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="secondary" variant="h1">
                      UX
                    </Typography>
                    <Typography color="textSecondary" variant="overline">
                      Complete Flows
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography color="secondary" variant="h1">
                      200+
                    </Typography>
                    <Typography color="textSecondary" variant="overline">
                      Components
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
