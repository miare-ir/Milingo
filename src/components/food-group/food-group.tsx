import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FoodGroupProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: any;
  selected?: boolean;
}

class FormGroup extends React.Component<FoodGroupProps, {}> {
  render() {
    const { className, children, selected } = this.props;
    const componentClassName = classNames('fdg-container', className, {
      selected,
    });

    return <div className={componentClassName}>{children}</div>;
  }
}

export default FormGroup;
