import React from 'react';
import type { FC } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles,
} from '@material-ui/core';
import type { Theme } from 'src/theme';

interface HeroProps {
  className?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 400,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 120,
      paddingBottom: 60,
    },
  },
  technologyIcon: {
    height: 40,
    margin: theme.spacing(1),
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      transform: 'rotateY(-35deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16],
    },
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
    },
  },
}));

const Hero: FC<HeroProps> = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <section className={clsx(classes.root, className)} {...rest}>
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
                Introducing
              </Typography>
              <Typography color="textPrimary" variant="h2">
                Welcome to resume
              </Typography>
              <Box mt={3}>
                <Typography color="textSecondary" variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                  deleniti aut dolores veritatis, sit quam architecto? Libero,
                  accusamus quasi. Illo sit molestiae fuga autem at accusantium
                  itaque natus minus sapiente?
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
