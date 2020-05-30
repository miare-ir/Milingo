import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabContentItemProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
  tabId: number | string;
}

class TabContentItem extends React.Component<TabContentItemProps, {}> {
  render(): React.ReactNode {
    const { className, children, tabId, ...props } = this.props;
    const componentClassName = classNames('tab-content-item', className);
    return (
      <div className={componentClassName} {...props}>
        {children}
      </div>
    );
  }
}

export default TabContentItem;
