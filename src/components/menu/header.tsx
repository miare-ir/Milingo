import * as React from 'react';

import './styles.scss';

export interface MenuHeaderProps {
  title: string;
  image?: JSX.Element;
  action?: JSX.Element;
}

const MenuHeader: React.FC<MenuHeaderProps> = (props: MenuHeaderProps) => (
  <div className="menu-header">
    {!!props.image && <div className="menu-header-image">{props.image}</div>}
    <div className="menu-header-title">{props.title}</div>
    {!!props.action && <div className="menu-header-action">{props.action}</div>}
  </div>
);

export default MenuHeader;
