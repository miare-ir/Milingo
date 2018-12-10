import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Dropdown, { Option } from '.';

const options: Option[] = [
  { value: '1', label: 'گزینه ۱' },
  { value: '2', label: 'گزینه ۲' },
  { value: '3', label: 'گزینه ۳' },
  { value: '4', label: 'گزینه ۴' },
  { value: '5', label: 'گزینه ۵' },
];

storiesOf('Dropdown', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('Normal', () => (
    <div
      style={{
        width: '350px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        padding: '40px',
      }}>
      <Dropdown options={options} />
    </div>
  ));
