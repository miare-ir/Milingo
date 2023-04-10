import * as React from 'react';
export interface MenuAvatarProps extends React.HTMLProps<HTMLDivElement> {
    avatar?: string | JSX.Element;
    percentage?: number;
    selected?: boolean;
    label?: string;
    largeText?: boolean;
    type?: 'warning';
}
declare const MenuAvatar: React.SFC<MenuAvatarProps>;
export default MenuAvatar;
