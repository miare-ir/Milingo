import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FormGroupProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  singleRow?: boolean;
  title?: string;
}

class FormGroup extends React.Component<FormGroupProps, {}> {
  render() {
    const { className, children, singleRow, title, ...props } = this.props;
    const componentClassName = classNames('form-group-container', className, {
      'single-row': singleRow,
    });

    return (
      <div className={componentClassName} {...props}>
        {title && <div className="form-group-title">{title}</div>}
        {children}
      </div>
    );
  }
}

export default FormGroup;
