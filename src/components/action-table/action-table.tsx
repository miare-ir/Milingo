import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface ActionTableProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
}

const ActionTable: React.FC<ActionTableProps> = (props: ActionTableProps) => {
  const { title, ...restOfProps } = props;

  return (
    <div
      {...restOfProps}
      className={classNames('action-table', props.className)}>
      {props.title && (
        <div className="title">
          <span>{props.title}</span>
        </div>
      )}
      <div className="rows">{props.children}</div>
    </div>
  );
};

export default ActionTable;
