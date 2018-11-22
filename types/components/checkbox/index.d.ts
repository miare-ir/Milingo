import * as React from 'react';
import './styles.scss';
export interface CheckboxProps extends React.HTMLProps<HTMLButtonElement> {
}
export interface CheckboxState {
    checked: boolean;
}
declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: CheckboxProps): void;
    handleChange: (e: any, toggle?: boolean) => void;
    render(): JSX.Element;
}
export default Checkbox;
