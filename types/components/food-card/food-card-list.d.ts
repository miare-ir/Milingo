import * as React from 'react';
import './styles.scss';
export interface FoodCardListProps extends React.HTMLProps<HTMLDivElement> {
    title?: string;
    className?: string;
    children?: React.ReactNode;
}
declare class FoodCardList extends React.Component<FoodCardListProps, {}> {
    render(): JSX.Element;
}
export default FoodCardList;
