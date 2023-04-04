import * as React from 'react';
import './styles.scss';
export interface FormProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    fullWidth?: boolean;
}
declare class Form extends React.Component<FormProps, {}> {
    render(): React.ReactNode;
}
export default Form;
