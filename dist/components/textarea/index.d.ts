import * as React from 'react';
import './styles.scss';
export interface InputProps extends React.HTMLProps<HTMLTextAreaElement> {
    errorMessage?: string;
    forceDisplayError?: boolean;
    validate?: (value: string) => boolean;
    title?: string;
    className?: string;
    value?: string;
}
export interface InputState {
    touched: boolean;
    value: string;
}
declare class Textarea extends React.Component<InputProps, InputState> {
    constructor(props: any);
    static getDerivedStateFromProps(nextProps: InputProps, prevState: InputState): {};
    handleInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    render(): React.ReactNode;
}
export default Textarea;
