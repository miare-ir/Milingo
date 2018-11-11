import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabNavItemProps {
  className?: string;
  children: string;
  active?: boolean;
}

export interface TabNavItemState {}

class TabNavItem extends React.Component<TabNavItemProps, TabNavItemState> {
  render() {
    const { className, children, active } = this.props;
    const componentClassName = classNames('tab-nav-item', className, {
      active,
    });
    return (
      <div className={componentClassName}>
        <label>{children}</label>
      </div>
    );
  }
}

export default TabNavItem;
