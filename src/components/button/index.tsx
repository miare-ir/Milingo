import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface ButtonProps extends React.ComponentProps<'button'> {
  primary?: boolean;
  danger?: boolean;
  ghost?: boolean;
  link?: boolean;
  tiny?: boolean;
  small?: boolean;
  regular?: boolean;
  large?: boolean;
}

class Button extends React.Component<ButtonProps, {}> {
  render(): JSX.Element {
    const {
      primary,
      ghost,
      link,
      tiny,
      small,
      regular,
      large,
      danger,
      ...props
    }: ButtonProps & React.HTMLProps<HTMLButtonElement> = this.props;

    const className: string = classNames(
      'milingo-btn-wrapper',
      props.className,
      {
        primary,
        danger,
        ghost: (ghost || (!primary && !link)) && !danger,
        link,
        tiny,
        small,
        regular,
        large,
      },
    );

    return <button {...props} className={className} />;
  }
}

export default Button;
