import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface AccordionProps {
  title: string;
  id: number;
  description?: string;
  reporter_type?: string;
  timer?: number;
  isResolved?: boolean;
  className?: string;
}

const List = (props: AccordionProps): JSX.Element => {
  const componentClassNames = classNames(
    'accordion-list-container',
    `${props.reporter_type}-issue`,
    props.className,
  );

  return (
    <div className={componentClassNames} id={props.id.toString()}>
      <div className="accordion-list-info">
        <div className="accordion-list-title">{props.title}</div>
        <div className="accordion-list-description">{props.description}</div>
      </div>
      <div
        className={`accordion-list-timer ${
          props.isResolved ? 'resolved' : ''
        }`}>
        {props.isResolved ? 'تکمیل شده' : props.timer}
      </div>
    </div>
  );
};

export default List;
