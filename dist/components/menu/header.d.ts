import * as React from 'react';
import './styles.scss';
export interface MenuHeaderProps {
    title: string;
    image?: JSX.Element;
    action?: JSX.Element;
}
declare const MenuHeader: React.FC<MenuHeaderProps>;
export default MenuHeader;
