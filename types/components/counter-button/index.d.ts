import * as React from 'react';
import './styles.scss';
export interface CounterButtonProps extends React.HTMLProps<HTMLButtonElement> {
    className?: string;
    onIncrease?: () => void;
    onDecrease?: () => void;
    onCountUpdate?: (newCount: number) => {};
    acceptNegative?: boolean;
}
export interface CounterButtonStates {
    count: number;
}
declare class CounterButton extends React.Component<CounterButtonProps, CounterButtonStates> {
    state: {
        count: number;
    };
    updateCount(count: any): void;
    handleDecrease(): void;
    handleIncrease(): void;
    render(): JSX.Element;
}
export default CounterButton;
