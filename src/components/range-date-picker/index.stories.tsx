import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as React from 'react';
import RangePicker, { RangeDatePickerProps } from '.';

export default {
  title: 'Date Picker',
  component: RangePicker,
  decorators: [story => <div className="story-container">{story()}</div>],
} as ComponentMeta<typeof RangePicker>;

const Template: ComponentStory<typeof RangePicker> = args => (
  <RangePicker {...args} />
);

export const RangeDatePicker = Template.bind({});

RangeDatePicker.args = {
  title: 'انتخاب تاریخ',
} as RangeDatePickerProps;
