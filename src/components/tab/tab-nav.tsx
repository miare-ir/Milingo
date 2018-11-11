import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabNavProps {
  className?: string;
}

export interface TabNavState {}

class TabNav extends React.Component<TabNavProps, TabNavState> {
  render() {
    const { className } = this.props;
    const componentClassName = classNames('tab-nav-wrapper', className);
    return <div className={componentClassName} />;
  }
}

export default TabNav;
