import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Timeline from './index';
import TimelineEntry from './entry';

import './styles.stories.scss';

storiesOf('Timeline', module)
  .addDecorator(story => (
    <div className="story-container timeline-story-container">{story()}</div>
  ))
  .addWithJSX('With single entry', () => (
    <Timeline>
      <TimelineEntry noBorder time="14:30" title="درخواست کوریر دادید." />
    </Timeline>
  ))
  .addWithJSX('With two entries', () => (
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
  ))
  .addWithJSX('With several entries', () => (
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
  ));
