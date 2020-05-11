import * as React from 'react';
import * as classNames from 'classnames';

import PersianNumber from '../persian-number';
import './styles.scss';

export interface FoodGroupProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  hasTopping?: boolean;
  price: number | string;
  isOutOfOrder?: boolean;
  outOfOrderMessage?: string;
}

class FoodCard extends React.Component<FoodGroupProps, {}> {
  render(): React.ReactNode {
    const {
      className,
      children,
      hasTopping,
      price,
      isOutOfOrder,
      outOfOrderMessage,
      ...props
    } = this.props;
    const componentClassName = classNames('food-card-container', className, {
      'out-of-order': isOutOfOrder,
    });

    return (
      <div className={componentClassName} {...props}>
        <p className="food-title">{children}</p>
        {isOutOfOrder ? (
          <span className="out-of-order-message">
            {outOfOrderMessage ? outOfOrderMessage : 'تمام شده'}
          </span>
        ) : (
          <PersianNumber
            value={price}
            component="label"
            currencyType="ریال"
            className="price"
            includesPrice
          />
        )}
        {hasTopping && <label className="topping-dot" />}
      </div>
    );
  }
}

export default FoodCard;
