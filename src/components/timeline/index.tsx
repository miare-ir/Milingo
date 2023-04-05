import * as React from 'react';

import TimelineEntry from './entry';

import './styles.scss';

export interface TimelineProps {
  children?: React.ReactNode;
}

const Timeline: React.FC<TimelineProps> = (props: TimelineProps) => (
  <div className="timeline-wrapper">{props.children}</div>
);

export { Timeline, TimelineEntry };
