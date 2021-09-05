import React, { ReactElement } from 'react';
import type { FC } from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';

interface HideOnScrollProps {
  children: ReactElement;
}

const HideOnScroll: FC<HideOnScrollProps> = ({ children }) => {
  const onScrollTrigger = useScrollTrigger({ threshold: 200 });
  return (
    <Slide appear={false} direction="down" in={!onScrollTrigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
