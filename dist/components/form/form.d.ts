import * as React from 'react';
import './styles.scss';
export interface FormProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
    className?: string;
    children?: React.ReactNode;
    title?: React.ReactNode;
    description?: string;
}
declare class Form extends React.Component<FormProps, {}> {
    render(): React.ReactNode;
}
export default Form;
