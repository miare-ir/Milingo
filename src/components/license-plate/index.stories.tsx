import * as React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import LicensePlate, { LicensePlateProps } from '.';
import './style.stories.scss';

export default {
  title: 'License plate',
  component: LicensePlate,
} as ComponentMeta<typeof LicensePlate>;

const Template: ComponentStory<typeof LicensePlate> = props => (
  <div className="license-plates">
    <LicensePlate {...props} />
    <LicensePlate
      {...props}
      oldStyle
      value={[props?.value?.[1], props?.value?.[0]]}
    />
  </div>
);

export const EditableLicensePlate = Template.bind({});
EditableLicensePlate.args = {
  editable: true,
} as LicensePlateProps;

export const ReadonlyLicensePlate = Template.bind({});
ReadonlyLicensePlate.args = {
  editable: false,
  value: [123, 45678],
} as LicensePlateProps;
