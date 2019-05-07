import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TagProps extends React.HTMLProps<HTMLButtonElement> {
  component?: string;
  primary?: boolean;
  warning?: boolean;
  success?: boolean;
  alert?: boolean;
}

class Tag extends React.Component <TagProps, {}> {
  render() {
    const {
      children,
      className,
      primary,
      warning,
      success,
      alert,
      ...props
    }: TagProps = this.props;

    const componentClassName = classNames('tag-wrapper', className, {
      primary,
      warning,
      success,
      alert,
    });

    return React.createElement(
      this.props.component || 'span',
      { className: componentClassName, ...props },
      children,
    );
  }
}

export default Tag;
