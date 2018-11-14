import * as React from 'react';
import './styles.scss';
export interface NavbarItemProps extends React.HTMLProps<HTMLDivElement> {
    icon: string | JSX.Element;
    text: string | JSX.Element;
    selected?: boolean;
}
declare const NavbarItem: React.SFC<NavbarItemProps>;
export default NavbarItem;
