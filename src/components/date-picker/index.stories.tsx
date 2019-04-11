import * as React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from '.';

storiesOf('Date Picker', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('All', () => (
    <div>
      <div>
        <DatePicker title="انتخاب تاریخ" onChangeDate={() => {}} />
      </div>
    </div>
  ));
