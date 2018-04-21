import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Avatar from '../menu/avatar';
import Toolbar from '.';

storiesOf('Toolbar', module)
  .addDecorator(story => (
    <div className="story-container">
      {story()}
    </div>
  ))
  .addWithJSX('No actions and avatar', () => (
    <Toolbar
      avatar={<Avatar percentage={50} title="M1" />}
      description="در حال پیدا کردن نزدیک‌ترین کوریر..." />
  ))
  .addWithJSX('With title and actions', () => (
    <Toolbar
      avatar={<Avatar percentage={50} />}
      title="شهریار فدایی M1"
      description="در حال حرکت به سمت شما..."
      items={[
        {
          title: 'لغو',
          icon: 'close',
        }, {
          title: 'تماس',
          icon: 'phone',
        }, {
          title: 'ردیابی',
          icon: 'my_location',
        },
      ]} />
  ));
