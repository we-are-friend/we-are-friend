import React, { useState } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import { animated, useSpring } from 'react-spring';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import type { FC } from 'react';
import type { Theme } from 'src/theme';

interface ShowCaseProps {
  className?: string;
}

function LoopTrue({ state = true }) {
  const styles = useSpring({
    loop: state,
    cancel: false,
    // config: { duration: 5000 },
    from: { rotateZ: 0 },
    to: [{ rotateZ: 90 }, { rotateZ: 180 }, { rotateZ: 270 }, { rotateZ: 360 }],
  });

  const styles2 = useSpring({
    loop: state,
    // config: { duration: 5000 },
    from: { rotateZ: 0 },
    to: [
      { rotateZ: -90 },
      { rotateZ: -180 },
      { rotateZ: -270 },
      { rotateZ: -360 },
    ],
  });

  return (
    <>
      <animated.div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 500,
          height: 500,
          borderRadius: '50%',
          border: 'solid',
          transform: 'translate(50%, 50%)',
          ...styles,
        }}
      >
        <animated.div
          style={{
            position: 'absolute',
            transform: 'translate(50%, 50%)',
            backgroundColor: '#46e891',
            borderRadius: '25%',
            ...styles2,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            style={{
              // position: 'absolute',
              // transform: 'translate(50%,50%)',
              // backgroundColor: '#46e891',
              borderRadius: '25%',
              // ...styles,
            }}
          />
        </animated.div>
      </animated.div>
    </>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: 'hidden',
      position: 'relative',
      height: 1000,
      zIndex: 1,
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
  const [state, setState] = useState(true);
  return (
    <div className={clsx(classes.root, className)}>
      <Button
        style={{ zIndex: 20 }}
        onClick={() => {
          setState(false);
        }}
      >
        asdasd
      </Button>
      <LoopTrue state={state} />
    </div>
  );
};

export default ShowCase;
