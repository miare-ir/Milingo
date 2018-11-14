import * as React from 'react';
import './styles.scss';
export interface NavbarProps {
    children?: JSX.Element | JSX.Element[];
}
declare const Navbar: React.SFC<NavbarProps>;
export default Navbar;
export { default as NavbarItem } from './navbar-item';
