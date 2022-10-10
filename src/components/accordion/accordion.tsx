import * as React from 'react';
import { useState } from 'react';

import * as classNames from 'classnames';

import arrowIcon from '../../assets/icon/arrow.svg';
import Tag from '../tag';
import './styles.scss';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
  count?: number;
}

const Accordion = ({
  children,
  title,
  count,
  ...rest
}: AccordionProps): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const componentClassNames = classNames(
    'accordion-container',
    isOpen ? 'active' : '',
    rest.className,
  );

  return (
    <div {...rest} className={componentClassNames}>
      <div
        className="accordion-header"
        onClick={() => setIsOpen(currentIsOpen => !currentIsOpen)}>
        <div className="accordion-title">
          {title}
          {count && <Tag success>{count}</Tag>}
        </div>
        <img src={arrowIcon} />
      </div>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

export default Accordion;
