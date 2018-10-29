import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FormGroupProps {
  className?: string;
  children?: React.ReactNode;
  singleRow?: boolean;
}

class FormGroup extends React.Component<FormGroupProps, {}> {
  render() {
    const { className, children, singleRow } = this.props;
    const componentClassName = classNames('form-group-container', className, {
      'single-row': singleRow,
    });

    return <div className={componentClassName}>{children}</div>;
  }
}

export default FormGroup;
