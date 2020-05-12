import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabNavProps {
  className?: string;
  children: JSX.Element[] | JSX.Element;
}

class TabNav extends React.Component<TabNavProps, {}> {
  render(): React.ReactNode {
    const { className, children } = this.props;
    const componentClassName = classNames('tab-nav-wrapper', className);
    return <div className={componentClassName}> {children}</div>;
  }
}

export default TabNav;
