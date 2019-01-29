import * as React from 'react';
import './styles.scss';
export interface TabContentProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children?: JSX.Element[] | JSX.Element;
    selectedtab: number | string;
}
export interface TabContentState {
    children: JSX.Element | string;
}
declare class TabContent extends React.Component<TabContentProps, TabContentState> {
    state: {
        children: any;
    };
    handleActiveTab(props: TabContentProps): void;
    componentWillMount(): void;
    componentWillReceiveProps(nextProps: TabContentProps): void;
    render(): JSX.Element;
}
export default TabContent;
