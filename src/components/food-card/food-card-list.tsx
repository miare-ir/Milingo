import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FormProps {
  className?: string;
  children?: React.ReactNode;
}

class Form extends React.Component<FormProps, {}> {
  render() {
    const { className, children } = this.props;
    const componentClassName = classNames(
      'food-card-list-container',
      className,
    );

    return (
      <div className={componentClassName}>
        <div>{children}</div>
      </div>
    );
  }
}

export default Form;
