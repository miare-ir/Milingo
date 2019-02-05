import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FormProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

class Form extends React.Component<FormProps, {}> {
  render() {
    const { className, children, ...props } = this.props;
    const componentClassName = classNames('fdg-list-container', className);

    return (
      <div className={componentClassName} {...props}>
        <div>{children}</div>
      </div>
    );
  }
}

export default Form;
