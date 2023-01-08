import * as React from 'react';
import * as classNames from 'classnames';

import './styles/index.scss';

export interface AccordionItemProps {
  title: string;
  id: number;
  description?: string;
  className?: string;
  children?: JSX.Element;
}

const AccordionItem = (props: AccordionItemProps): JSX.Element => {
  const componentClassNames = classNames('accordion-item', props.className);

  return (
    <div className={componentClassNames} id={props.id.toString()}>
      <div className="accordion-item-info">
        <div className="accordion-item-title">{props.title}</div>
        <div className="accordion-item-description">{props.description}</div>
      </div>
      {props.children}
    </div>
  );
};

export default AccordionItem;
