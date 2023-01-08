import * as React from 'react';
import * as PropTypes from 'prop-types';
import './styles.scss';
export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    displayClear?: boolean;
    onClear?: () => void;
    errorMessage?: string;
    forceDisplayError?: boolean;
    validate?: (value: string | string[] | number) => boolean;
    pre?: string;
    icon?: string;
    title?: string;
    ltr?: boolean;
    extraTitle?: JSX.Element | string;
    small?: boolean;
}
export interface InputState {
    touched: boolean;
    value: string | string[] | number;
    isFocused: boolean;
    type: string;
}
declare class Input extends React.Component<InputProps, InputState> {
    static propTypes: {
        type: PropTypes.Requireable<string>;
    };
    constructor(props: any);
    static getDerivedStateFromProps(nextProps: InputProps, prevState: InputState): {};
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    clear: () => void;
    handleFocus(e: any): void;
    handleBlur(e: any): void;
    render(): React.ReactNode;
}
export default Input;
