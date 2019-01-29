import * as React from 'react';
import './styles.scss';
export interface CheckboxProps extends React.HTMLProps<HTMLInputElement> {
}
export interface CheckboxState {
    checked: boolean;
}
declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    private checkboxElement;
    constructor(props: any);
    componentWillReceiveProps(nextProps: CheckboxProps): void;
    handleChange: (e: any) => void;
    render(): JSX.Element;
}
export default Checkbox;
