import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FormGroupProps
  extends Omit<React.HTMLProps<HTMLDivElement>, 'title'> {
  className?: string;
  children?: React.ReactNode;
  singleRow?: boolean;
  title?: React.ReactNode;
  extraTitle?: JSX.Element | string;
}

class FormGroup extends React.Component<FormGroupProps, {}> {
  render(): React.ReactNode {
    const {
      className,
      children,
      singleRow,
      extraTitle,
      title,
      ...props
    } = this.props;
    const componentClassName = classNames('form-group-container', className, {
      'single-row': singleRow,
    });

    return (
      <div className={componentClassName} {...props}>
        {extraTitle ? (
          extraTitle
        ) : title ? (
          <div className="form-group-title">{title}</div>
        ) : null}
        {children}
      </div>
    );
  }
}

export default FormGroup;
