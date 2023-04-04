import * as React from 'react';
import './styles.scss';
export interface FormGroupProps extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
    className?: string;
    children?: React.ReactNode;
    singleRow?: boolean;
    title?: React.ReactNode;
    extraTitle?: JSX.Element | string;
}
declare class FormGroup extends React.Component<FormGroupProps, {}> {
    render(): React.ReactNode;
}
export default FormGroup;
