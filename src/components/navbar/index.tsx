import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface NavbarProps {
  children?: JSX.Element | JSX.Element[];
  horizontally?: boolean;
}

const Navbar: React.SFC<NavbarProps> = (props: NavbarProps) => {
  const navbarClassNames = classNames('navbar', {
    horizontally: props.horizontally,
  });

  return <div className={navbarClassNames}>{props.children}</div>;
};

export default Navbar;
export { default as NavbarItem } from './navbar-item';
