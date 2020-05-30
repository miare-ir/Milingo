import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FoodCardListProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

class FoodCardList extends React.Component<FoodCardListProps, {}> {
  render(): React.ReactNode {
    const { className, children, title, ...props } = this.props;
    const componentClassName = classNames(
      'food-card-list-container',
      className,
    );

    return (
      <div className={componentClassName} {...props}>
        <div className="header">{title}</div>
        <div className="card-list">{children}</div>
      </div>
    );
  }
}

export default FoodCardList;
