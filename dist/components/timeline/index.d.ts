import * as React from 'react';
import TimelineEntry from './entry';
import './styles.scss';
export interface TimelineProps {
    children?: React.ReactNode;
}
declare const Timeline: React.SFC<TimelineProps>;
export { Timeline, TimelineEntry };
