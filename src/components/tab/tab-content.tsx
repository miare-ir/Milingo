import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabContentProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: JSX.Element[] | JSX.Element;
  selectedtab: number | string;
}
class TabContent extends React.Component<TabContentProps> {
  render(): React.ReactNode {
    const { className, children, selectedtab, ...props } = this.props;
    const componentClassName = classNames('tab-content-wrapper', className);

    const renderSelectedChild = (): JSX.Element => {
      for (const child of children as JSX.Element[]) {
        if (child.props.tabId === selectedtab) {
          return child;
        }
      }
      return <></>;
    };

    return (
      <div className={componentClassName} {...props}>
        {renderSelectedChild()}
      </div>
    );
  }
}

export default TabContent;
