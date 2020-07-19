import * as React from 'react';

import TimelineEntry from './entry';

import './styles.scss';

export interface TimelineProps {
  children?: React.ReactNode;
}

const Timeline: React.SFC<TimelineProps> = (props: TimelineProps) => (
  <div className="timeline">{props.children}</div>
);

export { Timeline, TimelineEntry };
