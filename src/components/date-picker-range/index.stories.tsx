import moment from 'moment';
import * as React from 'react';
import RangePicker, {
  DatePickerRangeProps,
  DateRange,
} from '../date-picker-range';

export default {
  title: 'Date Picker',
  decorators: [story => <div className="story-container">{story()}</div>],
};

const RangeDatePickerWithState: React.FC<Partial<
  DatePickerRangeProps
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
    <RangeDatePickerWithState inputButtonSize="tiny" />
    <br />
    <RangeDatePickerWithState inputButtonSize="small" />
    <br />
    <RangeDatePickerWithState inputButtonSize="regular" />
    <br />
    <RangeDatePickerWithState inputButtonSize="large" />
  </div>
);
