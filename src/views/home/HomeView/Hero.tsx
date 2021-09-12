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
      backgroundColor: theme.palette.background.dark,
      paddingTop: 200,
      paddingBottom: 100,
      borderBottomLeftRadius: theme.spacing(8),
      borderBottomRightRadius: theme.spacing(8),
      [theme.breakpoints.down('md')]: {
        paddingTop: 180,
        paddingBottom: 80,
        borderBottomLeftRadius: theme.spacing(4),
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
