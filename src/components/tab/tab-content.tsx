import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabContentProps {
  className: string;
}

export interface TabContentState {}

class TabContent extends React.Component<TabContentProps, TabContentState> {
  render() {
    const { className } = this.props;
    const componentClassName = classNames(className);
    return <div className={componentClassName} />;
  }
}

export default TabContent;
