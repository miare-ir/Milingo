import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FormProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  className?: string;
  children?: React.ReactNode;
  title?: React.ReactNode;
  description?: string;
  formProps?: React.ComponentProps<'form'>;
}

class Form extends React.Component<FormProps, {}> {
  render(): React.ReactNode {
    const { className, children, title, description, formProps, ...props } =
      this.props;
    const componentClassName = classNames('form-container', className);

    return (
      <form {...formProps}>
        <div className={componentClassName} {...props}>
          <h4 className="form-title">{title}</h4>
          <p className="form-description">{description}</p>
          {children}
        </div>
      </form>
    );
  }
}

export default Form;
