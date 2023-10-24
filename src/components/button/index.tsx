import * as React from 'react';
import * as classNames from 'classnames';

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
  purplePrimary?: boolean;
  purpleGhost?: boolean;
  purpleLink?: boolean;
}

class Button extends React.Component<ButtonProps, {}> {
  render(): JSX.Element {
    const {
      primary,
      ghost,
      link,
      text,
      tiny,
      small,
      regular,
      large,
      danger,
      shouldRender,
      purplePrimary,
      purpleGhost,
      purpleLink,
      ...props
    }: ButtonProps & React.HTMLProps<HTMLButtonElement> = this.props;

    if (shouldRender === false) {
      return null;
    }

    const className: string = classNames(
      'milingo-btn-wrapper',
      props.className,
      {
        primary,
        danger,
        ghost: (ghost || (!primary && !link)) && !danger,
        link,
        text,
        tiny,
        small,
        regular,
        large,
        purplePrimary,
        purpleGhost,
        purpleLink,
      },
    );

    return <button {...props} className={className} />;
  }
}

export default Button;
