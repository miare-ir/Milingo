import * as React from 'react';
import './styles.scss';
export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    displayClear?: boolean;
    onValueClear?: () => void;
    errorMessage?: string;
    forceDisplayError?: boolean;
    validate?: (value: boolean | string | number) => boolean;
    pre?: string;
    title?: string;
    ltr?: boolean;
}
export interface InputState {
    touched: boolean;
    value: any;
}
declare class Input extends React.Component<InputProps, InputState> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: InputProps): void;
    handleInput: (e: any) => void;
    clear: () => void;
    render(): JSX.Element;
}
export default Input;
