import * as React from 'react';
import './styles.scss';
export interface FoodGroupProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: any;
    selected?: boolean;
}
declare class FormGroup extends React.Component<FoodGroupProps, {}> {
    render(): JSX.Element;
}
export default FormGroup;
