import * as React from 'react';
import './styles.scss';
export interface TabNavItemProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children: string;
    active?: boolean;
}
declare class TabNavItem extends React.Component<TabNavItemProps, {}> {
    render(): React.ReactNode;
}
export default TabNavItem;
