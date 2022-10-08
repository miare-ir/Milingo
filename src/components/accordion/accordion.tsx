import * as React from 'react';
import * as classNames from 'classnames';
import { useState } from 'react';

import Tag from '../tag';
import arrowIcon from '../../assets/icon/arrow.svg';
import './styles.scss';

export interface AccordionProps {
  children: JSX.Element[] | JSX.Element;
  title: string;
  count?: number;
  className?: string;
}

const Accordion = (props: AccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const componentClassNames = classNames(
    'accordion-container',
    isOpen ? 'active' : '',
    props.className,
  );

  return (
    <div className={componentClassNames}>
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="accordion-title">
          {props.title}
          {props.count && <Tag success>{props.count}</Tag>}
        </div>
        <img src={arrowIcon} />
      </div>
      <div className={'accordion-content'}>{props.children}</div>
    </div>
  );
};

export default Accordion;
