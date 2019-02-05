import * as React from 'react';
import './styles.scss';
export interface DialogContentProps extends React.HTMLProps<HTMLDivElement> {
    children?: JSX.Element;
    actions?: JSX.Element[];
    title: string;
    className?: string;
    primary?: boolean;
    secondary?: boolean;
}
declare class DialogContent extends React.Component<DialogContentProps, {}> {
    componentWillMount(): void;
    render(): JSX.Element;
}
export default DialogContent;
