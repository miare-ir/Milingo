import * as React from 'react';
import { useState } from 'react';

import * as classNames from 'classnames';

import arrowIcon from '../../assets/icon/arrow.svg';
import closeIcon from '../../assets/icon/close.svg';
import Tag from '../tag';
import './styles/index.scss';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  title: string;
  count?: number;
  isOpen?: boolean;
  setIsOpen?: () => void;
}

const Accordion = ({
  children,
  title,
  count,
  isOpen,
  setIsOpen,
  ...rest
}: AccordionProps): JSX.Element => {
  const [isActive, setIsActive] = useState(false);

  const componentClassNames = classNames(
    'accordion-container',
    isOpen ? 'open' : '',
    isActive ? 'active' : '',
    rest.className,
  );

  return (
    <div {...rest} className={componentClassNames}>
      <div
        className="accordion-header"
        onClick={() => setIsActive(currentIsActive => !currentIsActive)}>
        <div className="accordion-title">
          {title}
          {count && <Tag success>{count}</Tag>}
        </div>
        {setIsOpen ? (
          <img src={closeIcon} onClick={setIsOpen} />
        ) : (
          <img src={arrowIcon} />
        )}
      </div>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

export default Accordion;
