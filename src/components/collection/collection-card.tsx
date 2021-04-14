import * as React from 'react';
import * as classNames from 'classnames';

// import PersianNumber from '../utils/persian-number';
import './styles.scss';

export interface CollectionCardProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  hasSubset?: boolean;
  footer?: number | string;
  disabled?: boolean;
  disabledMessage?: string;
  selected?: boolean;
}

class CollectionCard extends React.Component<CollectionCardProps, {}> {
  render(): React.ReactNode {
    const {
      className,
      children,
      hasSubset,
      footer,
      disabled,
      selected,
      disabledMessage,
      ...props
    } = this.props;
    const componentClassName = classNames('card-container', className, {
      disabled,
      selected,
    });

    return (
      <div className={componentClassName} {...props}>
        <p className="card-title">{children}</p>
        {disabled ? (
          <span className="disabled-message">
            {disabledMessage ? disabledMessage : 'تمام شده'}
          </span>
        ) : (
          <div className="price">{footer}</div>
          // <PersianNumber
          //   value={price}
          //   component="label"
          //   // currencyType="ریال"
          //   className="price"
          //   includesPrice
          // />
        )}
        {hasSubset && <label className="subset-dot" />}
      </div>
    );
  }
}

export default CollectionCard;
