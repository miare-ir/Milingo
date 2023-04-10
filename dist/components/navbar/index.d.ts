import * as React from 'react';
import './styles.scss';
export interface NavbarProps {
    children?: JSX.Element | JSX.Element[];
    horizontally?: boolean;
}
declare const Navbar: React.FC<NavbarProps>;
export default Navbar;
export { default as NavbarItem } from './navbar-item';
