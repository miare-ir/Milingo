import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FormGroupProps {
  className?: string;
  children?: React.ReactNode;
  singleRow?: boolean;
  title?: string | JSX.Element;
}

class FormGroup extends React.Component<FormGroupProps, {}> {
  render() {
    const { className, children, singleRow, title } = this.props;
    const componentClassName = classNames('form-group-container', className, {
      'single-row': singleRow,
    });

    return (
      <div className={componentClassName}>
        {title && <div className="form-group-title">{title}</div>}
        {children}
      </div>
    );
  }
}

export default FormGroup;
