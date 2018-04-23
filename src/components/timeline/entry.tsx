import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TimelineEntryProps extends React.HTMLProps<HTMLDivElement> {
  time?: string;
  title: string;
  noBorder?: boolean;
}

const TimelineEntry: React.SFC<TimelineEntryProps> = ({
  time,
  title,
  noBorder,
  children,
  ...props,
}: TimelineEntryProps) => (
  <div className="timeline-entry" {...props}>
    <div className="timeline-entry-title-container">
      <div className="timeline-entry-time-container">
        <div className="timeline-entry-time">{time}</div>
      </div>
      <h4 className="timeline-entry-title">{title}</h4>
    </div>
    <div className={classNames('timeline-entry-content', {
      empty: !children,
      'no-border': noBorder,
    })}>
      {children}
    </div>
  </div>
);

export default TimelineEntry;
