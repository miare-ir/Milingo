import * as React from 'react';
import './styles.scss';
export interface FormGroupProps {
    className?: string;
    children?: React.ReactNode;
    singleRow?: boolean;
    title?: string | JSX.Element;
}
declare class FormGroup extends React.Component<FormGroupProps, {}> {
    render(): JSX.Element;
}
export default FormGroup;
