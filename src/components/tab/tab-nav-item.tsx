import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabNavItemProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
  active?: boolean;
}

class TabNavItem extends React.Component<TabNavItemProps, {}> {
  render(): React.ReactNode {
    const { className, children, active, ...props } = this.props;
    const componentClassName = classNames('tab-nav-item', className, {
      active,
    });
    return (
      <div className={componentClassName} {...props}>
        <label>{children}</label>
      </div>
    );
  }
}

export default TabNavItem;
