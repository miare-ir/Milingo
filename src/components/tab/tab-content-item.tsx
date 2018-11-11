import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabContentItemProps {
  className: string;
}

export interface TabContentItemState {}

class TabContentItem extends React.Component<
  TabContentItemProps,
  TabContentItemState
> {
  render() {
    const { className } = this.props;
    const componentClassName = classNames(className);
    return <div className={componentClassName} />;
  }
}

export default TabContentItem;
