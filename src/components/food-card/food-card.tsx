import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FoodGroupProps {
  className?: string;
  children?: React.ReactNode;
  hasTopping?: boolean;
  price: number;
}

class FormGroup extends React.Component<FoodGroupProps, {}> {
  render() {
    const { className, children, hasTopping, price } = this.props;
    const componentClassName = classNames('food-card-container', className);

    return (
      <div className={componentClassName}>
        <p className="food-title">{children}</p>
        <span className="price">{price}</span>
        {hasTopping && <label className="topping-dot" />}
      </div>
    );
  }
}

export default FormGroup;
