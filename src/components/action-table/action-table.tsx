import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface ActionTableProps extends React.HTMLProps<HTMLDivElement> {
  title?: string;
}

const ActionTabel: React.SFC<ActionTableProps> = (props: ActionTableProps) => (
  <div className={classNames('action-table', props.className)}>
    {props.title && (
      <div className="title">
        <span>{props.title}</span>
      </div>
    )}
    <div className="rows">{props.children}</div>
  </div>
);

export default ActionTabel;
