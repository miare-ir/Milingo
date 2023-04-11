import * as React from 'react';
import './styles.scss';
export interface TagProps extends React.HTMLProps<HTMLButtonElement> {
    component?: string;
    primary?: boolean;
    warning?: boolean;
    success?: boolean;
    alert?: boolean;
}
declare class Tag extends React.Component<TagProps, {}> {
    render(): React.ReactNode;
}
export default Tag;
