import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FormProps {
  className?: string;
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

class Form extends React.Component<FormProps, {}> {
  render() {
    const { className, children, title, description } = this.props;
    const componentClassName = classNames('form-container', className);

    return (
      <div className={componentClassName}>
        <h4 className="form-title">{title}</h4>
        <p className="form-description">{description}</p>
        {children}
      </div>
    );
  }
}

export default Form;
