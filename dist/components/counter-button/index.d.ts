import * as React from 'react';
import './styles.scss';
export interface CounterButtonProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    onIncrease?: () => void;
    onDecrease?: () => void;
}
declare class CounterButton extends React.Component<CounterButtonProps, {}> {
    handleDecrease(): void;
    handleIncrease(): void;
    render(): React.ReactNode;
}
export default CounterButton;
