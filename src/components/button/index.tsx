import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  primary?: boolean;
  ghost?: boolean;
  link?: boolean;
  tiny?: boolean;
  small?: boolean;
  regular?: boolean;
  large?: boolean;
}

class Button extends React.Component<ButtonProps, void> {
  render (): JSX.Element {
    const {
      primary,
      ghost,
      link,
      tiny,
      small,
      regular,
      large,
      ...props,
    }: ButtonProps & React.HTMLProps<HTMLButtonElement> = this.props;

    const className: string = classNames(props.className || '', {
      primary,
      ghost: ghost || (!primary && !link),
      link,
      tiny,
      small,
      regular,
      large,
    });

    return (
      <button {...props} className={className} />
    );
  }
}

export default Button;
