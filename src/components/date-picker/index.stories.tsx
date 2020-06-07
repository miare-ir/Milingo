import * as React from 'react';
import DatePicker from '.';

export default {
  title: 'Date Picker',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const All = () => (
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
);
