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
  description?: string;
  isActive?: boolean;
  isClose?: boolean;
  setIsClose?: () => void;
}

const Accordion = ({
  children,
  title,
  count,
  description,
  isActive,
  isClose,
  setIsClose,
  ...rest
}: AccordionProps): JSX.Element => {
  const [isActiveAccordion, setIsActiveAccordion] = useState(isActive || false);

  const componentClassNames = classNames(
    'accordion-container',
    isClose ? 'close' : '',
    isActiveAccordion ? 'active' : '',
    rest.className,
  );

  const renderIcon = (): JSX.Element =>
    setIsClose ? (
      <img src={closeIcon} onClick={setIsClose} />
    ) : (
      <img src={arrowIcon} />
    );

  return (
    <div {...rest} className={componentClassNames}>
      <div
        className={`accordion-header ${description ? 'with-description' : ''}`}
        onClick={() =>
          setIsActiveAccordion(currentIsActive => !currentIsActive)
        }>
        <div className="accordion-info">
          <div className="accordion-title">
            {title}
            {count ? <Tag success>{count}</Tag> : <></>}
          </div>
          {description && (
            <div className="accordion-description">{description}</div>
          )}
        </div>
        {renderIcon()}
      </div>
      <div className="accordion-content">{children}</div>
    </div>
  );
};

export default Accordion;
