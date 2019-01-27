import * as React from 'react';
import './styles.scss';
export interface Option {
    label: string;
    value: string;
    className?: string;
}
export interface SelectProps {
    name: string;
    options: (Option)[];
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
declare class SelectComponent extends React.Component<SelectProps, SelectState> {
    private selectElement;
    constructor(props: any);
    componentWillReceiveProps(newProps: SelectProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleMouseDown(event: any): void;
    setValue(value: any, label: any): void;
    handleChange(newState: any): void;
    renderOption(option: any): JSX.Element;
    renderSelectsOption(): JSX.Element[];
    buildMenu(): JSX.Element | JSX.Element[];
    handleDocumentClick(event: any): void;
    render(): JSX.Element;
}
export default SelectComponent;
