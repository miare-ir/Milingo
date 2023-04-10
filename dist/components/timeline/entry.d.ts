import * as React from 'react';
import './styles.scss';
export interface TimelineEntryProps extends React.HTMLProps<HTMLDivElement> {
    time?: string | JSX.Element;
    description: string | JSX.Element;
    loading?: boolean;
    noBorder?: boolean;
    clickable?: boolean;
}
declare const TimelineEntry: React.SFC<TimelineEntryProps>;
export default TimelineEntry;
