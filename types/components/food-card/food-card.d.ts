import * as React from 'react';
import './styles.scss';
export interface FoodGroupProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
    hasTopping?: boolean;
    price: number | string;
    isOutOfOrder?: boolean;
    outOfOrderMessage?: string;
}
declare class FoodCard extends React.Component<FoodGroupProps, {}> {
    render(): JSX.Element;
}
export default FoodCard;
