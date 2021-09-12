import NavContent from './NavContent';
import NavbarContainer from './NavbarContainer';
import React, { Fragment } from 'react';
import type { FC } from 'react';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <Fragment>
      <NavbarContainer>
        <NavContent />
      </NavbarContainer>
    </Fragment>
  );
};

export default Navbar;
