import NavContent from './NavContent';
import NavbarContainer from '@/layouts/MainLayout/NavbarContainer';
import React, { ReactNode } from 'react';
import clsx from 'clsx';
import { createStyles, makeStyles } from '@material-ui/core';
import type { FC } from 'react';
import type { Theme } from 'src/theme';

interface MainLayoutProps {
  className?: string;
  children?: ReactNode;
}

const useStyles = makeStyles((_: Theme) =>
  createStyles({
    root: {},
  }),
);

const MainLayout: FC<MainLayoutProps> = ({ className, children }) => {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)}>
      <NavbarContainer>
        <NavContent />
      </NavbarContainer>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
