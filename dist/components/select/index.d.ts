import * as React from 'react';
import './styles.scss';
export interface Option {
    label: string;
    value: string | number;
    className?: string;
}
export interface SelectProps {
    name?: string;
    options: Option[];
    className?: string;
    disabled?: boolean;
    onChange?: (arg: Option) => void;
    onFocus?: (arg: boolean) => void;
    value?: Option;
    placeholder?: string;
    showedItem?: number;
    errorMessage?: string;
    errorMessagePosition?: 'top' | 'bottom';
    forceDisplayError?: boolean;
    validate?: () => boolean;
    lightTheme?: boolean;
}
interface SelectState {
    selected: Option;
    isOpen: boolean;
    mounted: boolean;
}
declare class SelectComponent extends React.Component<SelectProps, SelectState> {
    private selectElement;
    private node;
    constructor(props: any);
    UNSAFE_componentWillReceiveProps(newProps: SelectProps): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleMouseDown(event: any): void;
    setValue(value: any, label: any): void;
    handleChange(newState: any): void;
    renderOption(option: any): React.ReactNode;
    renderSelectsOption(): React.ReactNode;
    buildMenu(): React.ReactNode;
    handleDocumentClick(event: any): void;
    render(): React.ReactNode;
}
export default SelectComponent;
