import * as React from 'react';

import Timeline from './index';
import TimelineEntry from './entry';

import './styles.stories.scss';

export default {
  title: 'Timeline',

  decorators: [
    story => (
      <div className="story-container timeline-story-container">{story()}</div>
    ),
  ],
};

export const WithSingleEntry = () => (
  <Timeline>
    <TimelineEntry noBorder time="14:30" title="درخواست کوریر دادید." />
  </Timeline>
);

WithSingleEntry.story = {
  name: 'With single entry',
};

export const WithTwoEntries = () => (
  <Timeline>
    <TimelineEntry time="14:30" title="درخواست کوریر دادید." />
    <TimelineEntry noBorder title="کوریر در حال حرکت به سمت شماست">
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

export const WithSeveralEntries = () => (
  <Timeline>
    <TimelineEntry time="14:30" title="درخواست کوریر دادید." />
    <TimelineEntry time="14:35" title="کوریر رسید." />
    <TimelineEntry time="14:40" title="کوریر از رستوران راه افتاد." />
    <TimelineEntry noBorder title="کوریر در حال حرکت به سمت شماست">
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
