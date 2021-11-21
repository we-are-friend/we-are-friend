import React from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import type { Theme } from 'src/theme';
import type { FC } from 'react';
import { IRecipeFields } from '~/@types/generated/contentful';

interface RecipeCardProps {
  className?: string;
  recipe: IRecipeFields;
}

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }),
);

const RecipeCard: FC<RecipeCardProps> = ({ className, recipe }) => {
  const classes = useStyles();
  const { title, slug, cookingTime } = recipe;
  return (
    <Card className={clsx(classes.root, className)} variant="outlined">
      <CardContent>
        <Typography
          gutterBottom
          className={classes.title}
          color="textSecondary"
        >
          {title}
        </Typography>
        <Typography component="h2" variant="h5">
          {slug}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {cookingTime}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/recipes/${slug}`}>Learn More</Link>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;
