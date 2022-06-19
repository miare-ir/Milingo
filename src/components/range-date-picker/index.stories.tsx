import moment from 'moment';
import * as React from 'react';
import RangePicker, { RangeDatePickerProps, DateRange } from '.';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Date Picker',
  component: RangePicker,
  decorators: [story => <div className="story-container">{story()}</div>],
} as ComponentMeta<typeof RangePicker>;

const Template: ComponentStory<typeof RangePicker> = args => {
  const [value, setValue] = React.useState<DateRange>(args.defaultValue);
  return <RangePicker {...args} defaultValue={value} onChangeDate={setValue} />;
};

export const RangeDatePicker = Template.bind({});

RangeDatePicker.args = {
  title: 'انتخاب تاریخ',
  onChangeDate: () => {},
  defaultValue: [moment()],
  isSelectable: date =>
    date.isSameOrBefore(moment()) || date.isSameOrAfter(moment()),
} as RangeDatePickerProps;
