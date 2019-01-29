import * as React from 'react';
import './styles.scss';
export interface TabNavItemProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: string;
    active?: boolean;
}
export interface TabNavItemState {
}
declare class TabNavItem extends React.Component<TabNavItemProps, TabNavItemState> {
    render(): JSX.Element;
}
export default TabNavItem;
