import * as React from 'react';
import './styles.scss';
export interface TabNavProps {
    className?: string;
    children: JSX.Element[] | JSX.Element;
}
export interface TabNavState {
}
declare class TabNav extends React.Component<TabNavProps, TabNavState> {
    render(): JSX.Element;
}
export default TabNav;
