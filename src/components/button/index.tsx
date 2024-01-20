import * as React from 'react';
import * as classNames from 'classnames';

import Loader from '../loader';

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
      loading,
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
        loading,
      },
    );

    return (
      <button {...props} className={className}>
        {loading && (
          <div className="loader-container">
            <Loader
              primary={link || text || ghost || purpleGhost || purpleLink}
            />
          </div>
        )}

        {props.children}
      </button>
    );
  }
}

export default Button;
