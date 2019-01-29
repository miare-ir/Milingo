import * as React from 'react';
import { storiesOf } from '@storybook/react';

import Select, { Option } from '.';

const options: Option[] = [
  { value: '1', label: 'گزینه ۱' },
  { value: '2', label: 'گزینه ۲' },
  { value: '3', label: 'گزینه ۳' },
  { value: '4', label: 'گزینه ۴' },
  { value: '5', label: 'گزینه ۵' },
];

storiesOf('Select', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('Normal', () => (
    <div
      style={{
        width: '350px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        padding: '40px',
      }}>
      <Select name="test1" options={options} />
      <br />
      <Select
        name="test2"
        value={{ value: '2', label: 'گزینه ۲' }}
        options={options}
      />
    </div>
  ))
  .addWithJSX('With 5 rows', () => (
    <div
      style={{
        width: '350px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        padding: '40px',
      }}>
      <Select name="test1" options={options} showedItem={5} />
    </div>
  ));
