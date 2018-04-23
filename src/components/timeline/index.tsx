import * as React from 'react';

import './styles.scss';

export interface TimelineProps {
  children?: JSX.Element | JSX.Element[];
}

const Timeline: React.SFC<TimelineProps> = (props: TimelineProps) => (
  <div className="timeline">{props.children}</div>
);

export default Timeline;
