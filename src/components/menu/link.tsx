import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface MenuLinkProps {
  title: string;
  notificationCount?: number;
  selected?: boolean;
}

const MenuLink: React.SFC<MenuLinkProps> = (props: MenuLinkProps) => (
  <div className={classNames('menu-link', { selected: props.selected })}>
    <div className="menu-link-title">{props.title}</div>
    {props.notificationCount && (
      <div className="menu-link-notification-count">
        {props.notificationCount}
      </div>
    )}
  </div>
);

export default MenuLink;
