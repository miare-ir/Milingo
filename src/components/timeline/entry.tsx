import * as React from 'react';
import * as classNames from 'classnames';

import Loader from '../loader';
import './styles.scss';

export interface TimelineEntryProps extends React.HTMLProps<HTMLDivElement> {
  time?: string | JSX.Element;
  description: string | JSX.Element;
  loading?: boolean;
  noBorder?: boolean;
  clickable?: boolean;
}

const TimelineEntry: React.FC<TimelineEntryProps> = ({
  time,
  description,
  noBorder,
  clickable,
  children,
  loading,
  ...props
}: TimelineEntryProps) => (
  <div
    {...props}
    className={classNames(
      `timeline ${props.className ? props.className : ''}`,
      {
        clickable: clickable,
        clicked: !!time && clickable && !loading,
      },
    )}>
    <div className="entry-title-container">
      <div className="entry-time-container">
        <div className="entry-time">{loading ? <Loader disabled /> : time}</div>
      </div>
      <h4 className="entry-title">{description}</h4>
    </div>
    <div
      className={classNames('entry-content', {
        empty: !children,
        'no-border': noBorder,
      })}>
      {children}
    </div>
  </div>
);

export default TimelineEntry;
