import * as React from 'react';
import './styles.scss';
export interface ToolbarProps {
    avatar: JSX.Element;
    title?: string;
    description: string;
    items?: (React.HTMLProps<HTMLDivElement> & {
        title: string;
        icon: string | JSX.Element;
    })[];
}
declare const Toolbal: React.FC<ToolbarProps>;
export default Toolbal;
