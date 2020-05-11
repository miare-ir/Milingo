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

  handleActiveTab(props: TabContentProps) {
    for (const child of props.children as any) {
      if (child.props.tabId === props.selectedtab) {
        this.setState({ children: child });
        break;
      }
    }
  }

  componentWillMount() {
    this.handleActiveTab(this.props);
  }

  componentWillReceiveProps(nextProps: TabContentProps) {
    if (nextProps.selectedtab !== this.props.selectedtab) {
      this.handleActiveTab(nextProps);
    }
  }

  render() {
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
