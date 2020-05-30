import * as React from 'react';
import { storiesOf } from '@storybook/react';
import DatePicker from '.';

storiesOf('Date Picker', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .add('All', () => (
    <div>
      <DatePicker
        title="انتخاب تاریخ"
        inputButtonSize="tiny"
        onChangeDate={() => {}}
      />
      <br />
      <DatePicker
        title="انتخاب تاریخ"
        inputButtonSize="small"
        onChangeDate={() => {}}
      />
      <br />
      <DatePicker
        title="انتخاب تاریخ"
        inputButtonSize="regular"
        onChangeDate={() => {}}
      />
    </div>
  ));
