import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface FoodCardListProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
  className?: string;
  children?: React.ReactNode;
}

class FoodCardList extends React.Component<FoodCardListProps, {}> {
  render() {
    const { className, children, title } = this.props;
    const componentClassName = classNames(
      'food-card-list-container',
      className,
    );

    return (
      <div className={componentClassName}>
        <div className="header">{title}</div>
        <div className="card-list">{children}</div>
      </div>
    );
  }
}

export default FoodCardList;
