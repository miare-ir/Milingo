import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabContentItemProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
  tabId: number | string;
}

export interface TabContentItemState {}

class TabContentItem extends React.Component<
  TabContentItemProps,
  TabContentItemState
> {
  render() {
    const { className, children, ...props } = this.props;
    const componentClassName = classNames(className);
    return (
      <div className={componentClassName} {...props}>
        {children}
      </div>
    );
  }
}

export default TabContentItem;
