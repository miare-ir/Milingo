import * as React from 'react';
import './styles.scss';
export interface MenuLinkProps {
    title: string;
    notificationCount?: number;
    selected?: boolean;
}
declare const MenuLink: React.SFC<MenuLinkProps>;
export default MenuLink;
