import * as React from 'react';
import * as classNames from 'classnames';

import PersianNumber from '../persian-number';
import './styles.scss';

export interface FoodGroupProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  hasTopping?: boolean;
  price: number | string;
}

class FoodCard extends React.Component<FoodGroupProps, {}> {
  render() {
    const { className, children, hasTopping, price } = this.props;
    const componentClassName = classNames('food-card-container', className);

    return (
      <div className={componentClassName}>
        <p className="food-title">{children}</p>
        <PersianNumber
          value={price}
          component="label"
          currencyType="ریال"
          className="price"
          includesPrice
        />
        {hasTopping && <label className="topping-dot" />}
      </div>
    );
  }
}

export default FoodCard;
