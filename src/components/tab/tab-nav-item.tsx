import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabNavItemProps {
  className: string;
}

export interface TabNavItemState {}

class TabNavItem extends React.Component<TabNavItemProps, TabNavItemState> {
  render() {
    const { className } = this.props;
    const componentClassName = classNames(className);
    return <div className={componentClassName} />;
  }
}

export default TabNavItem;
