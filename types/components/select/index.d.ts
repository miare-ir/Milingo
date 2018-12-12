import * as React from 'react';
import './styles.scss';
export interface Option {
    label: string;
    value: string;
    className?: string;
}
interface SelectProps {
    options: (Option | string)[];
    baseClassName?: string;
    className?: string;
    disabled?: boolean;
    onChange?: (arg: Option) => void;
    onFocus?: (arg: boolean) => void;
    value?: Option;
    placeholder?: string;
    showedItem?: number;
}
interface SelectState {
    selected: Option;
    isOpen: boolean;
    mounted: boolean;
}
declare class Select extends React.Component<SelectProps, SelectState> {
    constructor(props: any);
    componentWillReceiveProps(newProps: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleMouseDown(event: any): void;
    setValue(value: any, label: any): void;
    handleChange(newState: any): void;
    renderOption(option: any): JSX.Element;
    buildMenu(): JSX.Element | JSX.Element[];
    handleDocumentClick(event: any): void;
    render(): JSX.Element;
}
export default Select;
