import * as React from 'react';
export interface MenuItemProps extends React.HTMLProps<HTMLDivElement> {
    title: string;
    avatar?: JSX.Element;
    description?: string | JSX.Element | JSX.Element[];
    selected?: boolean;
    time?: string;
}
declare const MenuItem: React.SFC<MenuItemProps>;
export default MenuItem;
