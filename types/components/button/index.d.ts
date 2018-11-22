import * as React from 'react';
import './styles.scss';
export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
    primary?: boolean;
    danger?: boolean;
    ghost?: boolean;
    link?: boolean;
    tiny?: boolean;
    small?: boolean;
    regular?: boolean;
    large?: boolean;
}
declare class Button extends React.Component<ButtonProps, {}> {
    render(): JSX.Element;
}
export default Button;
