import * as React from 'react';
import './styles.scss';
export interface TabContentItemProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children?: JSX.Element[] | JSX.Element | string;
    tabId: number | string;
}
declare class TabContentItem extends React.Component<TabContentItemProps, {}> {
    render(): React.ReactNode;
}
export default TabContentItem;
