import * as React from 'react';
import './styles.scss';
export interface DialogContentProps extends React.HTMLProps<HTMLDivElement> {
    onClose?: () => void;
    children?: JSX.Element;
    actions?: JSX.Element | JSX.Element[];
    title: string;
    titleDescription?: string;
    className?: string;
    primary?: boolean;
    secondary?: boolean;
}
declare class DialogContent extends React.Component<DialogContentProps, {}> {
    componentDidMount(): void;
    render(): React.ReactNode;
}
export default DialogContent;
