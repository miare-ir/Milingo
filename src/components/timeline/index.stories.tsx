import * as React from 'react';

import { Timeline, TimelineEntry } from './index';

import './styles.stories.scss';

export default {
  title: 'Timeline',

  decorators: [
    story => (
      <div className="story-container timeline-story-container">{story()}</div>
    ),
  ],
};

export const WithSingleEntry = (): React.ReactNode => (
  <Timeline>
    <TimelineEntry noBorder time="14:30" description="درخواست کوریر دادید." />
  </Timeline>
);

WithSingleEntry.story = {
  name: 'With single entry',
};

export const WithTwoEntries = (): React.ReactNode => (
  <Timeline>
    <TimelineEntry time="14:30" description="درخواست کوریر دادید." />
    <TimelineEntry noBorder description="کوریر در حال حرکت به سمت شماست">
      <div
        style={{
          backgroundColor: '#eee',
          width: '400px',
          height: '300px',
          borderRadius: '5px',
        }}
      />
    </TimelineEntry>
  </Timeline>
);

WithTwoEntries.story = {
  name: 'With two entries',
};

export const WithSeveralEntries = (): React.ReactNode => (
  <Timeline>
    <TimelineEntry time="14:30" description="درخواست کوریر دادید." />
    <TimelineEntry clickable time="14:35" description="کوریر رسید." />
    <TimelineEntry
      loading
      time="14:40"
      description="کوریر از رستوران راه افتاد."
    />
    <TimelineEntry noBorder description="کوریر در حال حرکت به سمت شماست">
      <div
        style={{
          backgroundColor: '#eee',
          width: '400px',
          height: '300px',
          borderRadius: '5px',
        }}
      />
    </TimelineEntry>
  </Timeline>
);

WithSeveralEntries.story = {
  name: 'With several entries',
};
