import * as React from 'react';
import * as classNames from 'classnames';

export interface MenuItemProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  avatar?: JSX.Element;
  description?: string | JSX.Element | JSX.Element[];
  selected?: boolean;
  time?: string;
}

const MenuItem: React.SFC<MenuItemProps> = ({
  avatar,
  description,
  selected,
  title,
  time,
  ...props
}: MenuItemProps) => (
  <div
    className={classNames('menu-item', {
      selected: selected,
      'has-avatar': !!avatar,
    })}
    {...props}>
    {avatar && (
      <div className="column avatar-container">
        <div className="menu-item-avatar">{avatar}</div>
      </div>
    )}
    <div className="column data-container">
      <div className="menu-item-title">{title}</div>
      {description && (
        <div className="menu-item-description">{description}</div>
      )}
    </div>
    {time && (
      <div className="column time-container">
        <div className="menu-item-time">{time}</div>
      </div>
    )}
  </div>
);

export default MenuItem;
