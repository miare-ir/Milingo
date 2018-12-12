import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface CheckboxProps extends React.HTMLProps<HTMLButtonElement> {
  component?: string;
  primary?: boolean;
  warning?: boolean;
}

export interface CheckboxState {
  checked: boolean;
}

class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
  render() {
    const {
      children,
      className,
      primary,
      warning,
      ...props
    }: CheckboxProps = this.props;

    const componentClassName = classNames('tag-wrapper', className, {
      primary,
      warning,
    });

    return React.createElement(
      this.props.component || 'span',
      { className: componentClassName, ...props },
      children,
    );
  }
}

export default Checkbox;
