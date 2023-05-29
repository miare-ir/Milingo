import moment from 'moment';
import * as React from 'react';
import DatePicker, { DatePickerProps } from '.';

export default {
  title: 'Date Picker',
  decorators: [story => <div className="story-container">{story()}</div>],
};

const DatePickerWithState: React.FC<Partial<DatePickerProps>> = props => {
  const [value, setValue] = React.useState<moment.Moment>();
  return (
    <DatePicker
      title="انتخاب تاریخ"
      onChangeDate={setValue}
      defaultValue={value}
      isSelectable={date =>
        date.isSameOrBefore(moment()) || date.isSameOrAfter(moment())
      }
      {...props}
    />
  );
};

export const SingleDatePicker = (): JSX.Element => (
  <div>
    <DatePickerWithState inputButtonSize="tiny" />
    <br />
    <DatePickerWithState inputButtonSize="small" />
    <br />
    <DatePickerWithState inputButtonSize="regular" />
    <br />
    <DatePickerWithState inputButtonSize="large" />
  </div>
);
