import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import FileInputWrapper, { FileInputWrapperProps } from '.';

export default {
  title: 'File input wrapper',
  component: FileInputWrapper,
} as ComponentMeta<typeof FileInputWrapper>;

const Template: ComponentStory<typeof FileInputWrapper> = args => (
  <FileInputWrapper {...args} />
);

export const _FileInputWrapper = Template.bind({});

_FileInputWrapper.args = {
  wrapperTitle: 'عکس پروفایل',
  description: 'یک عکس برای پروفایل خود انتخاب کنید.',
  maxFileSize: 2 * 1000 * 1000,
  hint: {
    children: 'content',
    title: 'راهنمای عکاسی',
  },
  displayClear: true,
  forceDisplayError: true,
} as FileInputWrapperProps;
