import * as React from 'react';
import './styles.scss';
export interface FormProps extends React.HTMLProps<HTMLFormElement> {
    className?: string;
    children?: React.ReactNode;
    title?: string;
    description?: string;
}
declare class Form extends React.Component<FormProps, {}> {
    render(): JSX.Element;
}
export default Form;
