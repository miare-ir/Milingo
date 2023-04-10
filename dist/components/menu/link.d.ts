import * as React from 'react';
import './styles.scss';
export interface MenuLinkProps {
    title: string;
    notificationCount?: number;
    selected?: boolean;
}
declare const MenuLink: React.FC<MenuLinkProps>;
export default MenuLink;
