import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabNavProps {
  className?: string;
  children: JSX.Element[];
}

export interface TabNavState {}

class TabNav extends React.Component<TabNavProps, TabNavState> {
  render() {
    const { className, children } = this.props;
    const componentClassName = classNames('tab-nav-wrapper', className);
    return <div className={componentClassName}> {children}</div>;
  }
}

export default TabNav;
