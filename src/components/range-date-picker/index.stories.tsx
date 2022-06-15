import moment from 'moment';
import * as React from 'react';
import RangePicker, { RangeDatePickerProps, DateRange } from '.';

export default {
  title: 'Date Picker',
  decorators: [story => <div className="story-container">{story()}</div>],
};

const RangeDatePickerWithState: React.FC<Partial<
  RangeDatePickerProps
>> = props => {
  const [value, setValue] = React.useState<DateRange>([moment()]);

  return (
    <RangePicker
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

export const RangeDatePicker = (): JSX.Element => (
  <div>
    <RangeDatePickerWithState buttonProps={{ ghost: true }} />
    <br />
    <RangeDatePickerWithState buttonProps={{ ghost: true }} />
    <br />
    <RangeDatePickerWithState buttonProps={{ ghost: true }} />
    <br />
    <RangeDatePickerWithState buttonProps={{ ghost: true }} />
  </div>
);
