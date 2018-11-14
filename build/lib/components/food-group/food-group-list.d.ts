import * as React from 'react';
import './styles.scss';
export interface FormProps {
    className?: string;
    children?: React.ReactNode;
}
declare class Form extends React.Component<FormProps, {}> {
    render(): JSX.Element;
}
export default Form;
