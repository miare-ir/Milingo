import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FormProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

class Form extends React.Component<FormProps, {}> {
  render(): React.ReactNode {
    const { className, children, fullWidth, ...props } = this.props;
    const componentClassName = classNames('tab-column-container', className, {
      'full-width': fullWidth,
    });

    return (
      <div className={componentClassName} {...props}>
        <div>{children}</div>
      </div>
    );
  }
}

export default Form;
