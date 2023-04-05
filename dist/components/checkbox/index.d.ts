import * as React from 'react';
import './styles.scss';
export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
    loading?: boolean;
}
export interface CheckboxState {
    checked: boolean;
}
declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    private checkboxElement;
    constructor(props: any);
    static getDerivedStateFromProps(nextProps: CheckboxProps, prevState: CheckboxState): {};
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    render(): React.ReactNode;
}
export default Checkbox;
