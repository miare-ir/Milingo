import * as React from 'react';
import './styles.scss';
export interface FoodGroupProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler;
    selected?: boolean;
}
declare class FormGroup extends React.Component<FoodGroupProps, {}> {
    render(): React.ReactNode;
}
export default FormGroup;
