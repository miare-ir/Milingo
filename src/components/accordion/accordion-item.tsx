import * as React from 'react';
import * as classNames from 'classnames';

import './styles/index.scss';

export interface AccordionItemProps {
  title: string;
  id: number;
  description?: string;
  className?: string;
  onClick: (id: number) => void;
  extraElement?: JSX.Element;
}

const AccordionItem = (props: AccordionItemProps): JSX.Element => {
  const componentClassNames = classNames(
    'accordion-item-container',
    props.className,
  );

  const handelClickItem = (e: React.SyntheticEvent<HTMLDivElement>): void =>
    props.onClick(props.id);

  return (
    <div className={componentClassNames} onClick={handelClickItem}>
      <div className="accordion-item-info">
        <div className="accordion-item-title">{props.title}</div>
        <div className="accordion-item-description">{props.description}</div>
      </div>
      {props.extraElement}
    </div>
  );
};

export default AccordionItem;
