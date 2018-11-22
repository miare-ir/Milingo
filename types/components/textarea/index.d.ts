import * as React from 'react';
import './styles.scss';
export interface InputProps extends React.HTMLProps<HTMLTextAreaElement> {
    errorMessage?: string;
    forceDisplayError?: boolean;
    validate?: (value: boolean | string | number) => boolean;
    title?: string;
    className?: string;
}
export interface InputState {
    touched: boolean;
    value: any;
}
declare class Textarea extends React.Component<InputProps, InputState> {
    constructor(props: any);
    componentWillReceiveProps(nextProps: InputProps): void;
    handleInput: (e: any) => void;
    render(): JSX.Element;
}
export default Textarea;
