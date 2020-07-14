import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface TimelineEntryProps extends React.HTMLProps<HTMLDivElement> {
  time?: string;
  title: string;
  noBorder?: boolean;
  clickable?: boolean;
}

const TimelineEntry: React.SFC<TimelineEntryProps> = ({
  time,
  title,
  noBorder,
  clickable,
  children,
  ...props
}: TimelineEntryProps) => (
  <div
    className={classNames('timeline', {
      clickable: clickable,
      clicked: !!time && clickable,
    })}
    {...props}>
    <div className="entry-title-container">
      <div className="entry-time-container">
        <div className="entry-time">{time}</div>
      </div>
      <h4 className="entry-title">{title}</h4>
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
