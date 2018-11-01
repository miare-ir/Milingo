import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface NavbarItemProps extends React.HTMLProps<HTMLDivElement> {
  icon: string | JSX.Element;
  text: string | JSX.Element;
  selected?: boolean;
}

const NavbarItem: React.SFC<NavbarItemProps> = ({
  icon,
  text,
  selected,
  ...props
}: NavbarItemProps) => (
  <div className={classNames('navbar-item', { selected })} {...props}>
    <div className="navbar-item-icon">
      {typeof icon === 'string' ? (
        <span className="material-icons">{icon}</span>
      ) : (
        icon
      )}
    </div>
    <span className="navbar-item-title">{text}</span>
  </div>
);

export default NavbarItem;
