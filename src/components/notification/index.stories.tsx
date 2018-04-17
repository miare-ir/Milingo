import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Notification from '.';

import './styles.stories.scss';

storiesOf('Notifications', module)
  .addDecorator(story => (
    <div className="story-container">
      {story()}
    </div>
  ))
  .addWithJSX('All', () => (
    <div>
      <div className="notification-container">
        <Notification message="سلام دنیا" />
      </div>
      <div className="notification-container">
        <Notification warning message="سلام دنیا" />
      </div>
    </div>
  ));
