import * as React from 'react';
import './styles.scss';
export interface TabContentProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children?: JSX.Element[] | JSX.Element;
    selectedTab: number | string;
}
declare class TabContent extends React.Component<TabContentProps> {
    renderSelectedChild: () => JSX.Element;
    render(): React.ReactNode;
}
export default TabContent;
