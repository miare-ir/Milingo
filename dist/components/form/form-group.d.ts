import * as React from 'react';
import './styles.scss';
export interface FormGroupProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    singleRow?: boolean;
    title?: string;
    extraTitle?: JSX.Element | string;
}
declare class FormGroup extends React.Component<FormGroupProps, {}> {
    render(): React.ReactNode;
}
export default FormGroup;
