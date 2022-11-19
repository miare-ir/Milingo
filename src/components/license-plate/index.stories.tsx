import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LicensePlate, { LicensePlateProps } from '.';
import './style.stories.scss';

export default {
  title: 'License plate',
  component: LicensePlate,
} as ComponentMeta<typeof LicensePlate>;

const Template: ComponentStory<typeof LicensePlate> = (
  props: LicensePlateProps,
) => (
  <div className="license-plates">
    <h1>Editable</h1>
    <LicensePlate {...props} value={undefined} editable />

    <h1>Readonly</h1>
    <LicensePlate {...props} value={props.value} />
  </div>
);

export const NewStyle = Template.bind({});
NewStyle.args = {
  value: [123, 45678],
} as LicensePlateProps;

export const OldStyle = Template.bind({});
OldStyle.args = {
  value: [123, 45678],
  oldStyle: true,
} as LicensePlateProps;
