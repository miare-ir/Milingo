import * as React from 'react';

import Avatar from '../menu/avatar';
import Toolbar from '.';

export default {
  title: 'Toolbar',

  decorators: [
    story => (
      <div
        className="story-container toolbar-story-container"
        style={{ width: '720px' }}>
        {story()}
      </div>
    ),
  ],
};

export const NoActionsAndAvatar = () => (
  <Toolbar
    avatar={<Avatar percentage={50} title="M1" />}
    description="در حال پیدا کردن نزدیک‌ترین کوریر..."
  />
);

NoActionsAndAvatar.story = {
  name: 'No actions and avatar',
};

export const WithTitleAndActions = () => (
  <Toolbar
    avatar={<Avatar percentage={50} />}
    title="شهریار فدایی M1"
    description="در حال حرکت به سمت شما..."
    items={[
      {
        title: 'لغو',
        icon: 'close',
      },
      {
        title: 'تماس',
        icon: 'phone',
      },
      {
        title: 'ردیابی',
        icon: 'my_location',
      },
    ]}
  />
);

WithTitleAndActions.story = {
  name: 'With title and actions',
};
