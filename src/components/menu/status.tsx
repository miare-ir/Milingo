import * as React from 'react';

export interface MenuStatusProps {
  title: string;
}

const MenuStatus: React.SFC<MenuStatusProps> = (props: MenuStatusProps) => (
  <div className="menu-status">
    <div className="menu-status-title">{props.title}</div>
  </div>
);

export default MenuStatus;
