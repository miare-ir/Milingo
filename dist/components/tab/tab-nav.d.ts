import * as React from 'react';
import './styles.scss';
export interface TabNavProps {
    className?: string;
    children: JSX.Element[] | JSX.Element;
}
declare class TabNav extends React.Component<TabNavProps, {}> {
    render(): React.ReactNode;
}
export default TabNav;
