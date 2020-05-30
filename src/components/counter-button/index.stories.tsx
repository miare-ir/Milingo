import * as React from 'react';
import { storiesOf } from '@storybook/react';

import CounterButton from '.';

storiesOf('Counter Button', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .add('All', () => (
    <div
      style={{
        width: '40px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        padding: '30px',
      }}>
      <CounterButton />
    </div>
  ));
