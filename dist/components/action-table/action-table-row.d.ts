import * as React from 'react';
import './styles.scss';
export interface Action {
    title: string;
    name: string;
    className?: string;
    extraProps?: object;
}
export interface ActionTableRowProps extends React.HTMLProps<HTMLDivElement> {
    title?: string;
    extraTitle?: JSX.Element;
    actions?: Action[];
    id: string;
    object?: unknown;
    icon?: string;
    disable?: boolean;
    description?: string | JSX.Element;
    onAction?: (name: string, id: string, object?: unknown) => void;
}
export interface ActionTableRowStates {
    isOpen: boolean;
    mounted: boolean;
}
declare class ActionTableRow extends React.Component<ActionTableRowProps, ActionTableRowStates> {
    private node;
    constructor(props: any);
    toggleIsOpen(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleDocumentClick(event: any): void;
    renderButtonActions(): React.ReactNode;
    renderMenuActions(): React.ReactNode;
    render(): React.ReactNode;
}
export default ActionTableRow;
