import * as React from 'react';

import CounterButton from '.';

export default {
  title: 'Counter Button',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const All = () => (
  <div
    style={{
      width: '40px',
      maxWidth: '100%',
      backgroundColor: '#ffffff',
      padding: '30px',
    }}>
    <CounterButton />
  </div>
);
