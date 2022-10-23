import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface ListItemProps {
  title: string;
  id: number;
  description?: string;
  reporter_type?: string;
  isResolved?: boolean;
  className?: string;
  onClick: (id: number) => void;
  children?: JSX.Element;
}

const ListItem = (props: ListItemProps): JSX.Element => {
  const componentClassNames = classNames(
    'list-item-container',
    `${props.reporter_type}-issue`,
    props.className,
  );

  const handelClickItem = (e: React.SyntheticEvent<HTMLDivElement>): void =>
    props.onClick(props.id);

  return (
    <div className={componentClassNames} onClick={handelClickItem}>
      <div className="list-item-info">
        <div className="list-item-title">{props.title}</div>
        <div className="list-item-description">{props.description}</div>
      </div>
      <div className={`list-item-timer ${props.isResolved ? 'resolved' : ''}`}>
        {props.isResolved ? 'تکمیل شده' : props.children}
      </div>
    </div>
  );
};

export default ListItem;
