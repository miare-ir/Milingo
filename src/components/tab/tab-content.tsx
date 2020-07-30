import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TabContentProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: JSX.Element[] | JSX.Element;
  selectedtab: number | string;
}

export interface TabContentState {
  children: JSX.Element | string;
}

class TabContent extends React.Component<TabContentProps, TabContentState> {
  state = { children: null };

  handleActiveTab(props: TabContentProps): void {
    for (const child of props.children as JSX.Element[]) {
      if (child.props.tabId === props.selectedtab) {
        this.setState({ children: child });
        break;
      }
    }
  }

  componentDidMount(): void {
    this.handleActiveTab(this.props);
  }

  componentDidUpdate(prevProps: TabContentProps): void {
    if (prevProps.selectedtab !== this.props.selectedtab) {
      this.handleActiveTab(this.props);
    }
  }

  render(): React.ReactNode {
    const { className, children, ...props } = this.props;
    const componentClassName = classNames('tab-content-wrapper', className);
    return (
      <div className={componentClassName} {...props}>
        {this.state.children}
      </div>
    );
  }
}

export default TabContent;
