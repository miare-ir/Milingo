import * as React from 'react';
import './styles.scss';
export interface ButtonProps extends React.ComponentProps<'button'> {
    primary?: boolean;
    danger?: boolean;
    ghost?: boolean;
    link?: boolean;
    text?: boolean;
    tiny?: boolean;
    small?: boolean;
    regular?: boolean;
    large?: boolean;
    shouldRender?: boolean;
    raised?: boolean;
    noBorder?: boolean;
    loading?: boolean;
}
declare class Button extends React.Component<ButtonProps, {}> {
    render(): JSX.Element;
}
export default Button;
