import * as React from 'react';
import Notification from '.';

import './styles.stories.scss';

export default {
  title: 'Notifications',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const All = () => (
  <div>
    <div className="notification-container">
      <Notification message="سلام دنیا" />
    </div>
    <div className="notification-container">
      <Notification warning message="سلام دنیا" />
    </div>
  </div>
);
