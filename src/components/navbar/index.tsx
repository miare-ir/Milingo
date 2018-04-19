import * as React from 'react';

import './styles.scss';

export interface NavbarProps {
  children?: JSX.Element | JSX.Element[];
}

const Navbar: React.SFC<NavbarProps> = (props: NavbarProps) => (
  <div className="navbar">{props.children}</div>
);

export default Navbar;
export { default as NavbarItem } from './navbar-item';
