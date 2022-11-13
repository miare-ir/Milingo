import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabContentProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: JSX.Element[] | JSX.Element;
  selectedTab: number | string;
}
class TabContent extends React.Component<TabContentProps> {
  renderSelectedChild = (): JSX.Element => {
    for (const child of this.props.children as JSX.Element[]) {
      if (child.props.tabId === this.props.selectedTab) {
        return child;
      }
    }
    return <></>;
  };

  render(): React.ReactNode {
    const { className, children, selectedTab, ...props } = this.props;
    const componentClassName = classNames('tab-content-wrapper', className);

    return (
      <div className={componentClassName} {...props}>
        {this.renderSelectedChild()}
      </div>
    );
  }
}

export default TabContent;
