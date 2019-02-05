import * as React from 'react';
import './styles.scss';
export interface CounterButtonProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    onIncrease?: () => void;
    onDecrease?: () => void;
    onCountUpdate?: (newCount: number) => {};
    acceptNegative?: boolean;
    startValue?: number;
}
export interface CounterButtonStates {
    count: number;
}
declare class CounterButton extends React.Component<CounterButtonProps, CounterButtonStates> {
    state: {
        count: number;
    };
    componentDidMount(): void;
    updateCount(count: any): void;
    handleDecrease(): void;
    handleIncrease(): void;
    render(): JSX.Element;
}
export default CounterButton;
