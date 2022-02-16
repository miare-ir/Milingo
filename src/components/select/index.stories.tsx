import * as React from 'react';

import Select, { Option } from '.';

const options: Option[] = [
  { value: '1', label: 'گزینه ۱' },
  { value: '2', label: 'گزینه ۲' },
  { value: '3', label: 'گزینه ۳' },
  { value: '4', label: 'گزینه ۴' },
  { value: '5', label: 'گزینه ۵' },
];

export default {
  title: 'Select',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Normal = () => (
  <div
    style={{
      width: '350px',
      maxWidth: '100%',
      backgroundColor: '#ffffff',
      padding: '40px',
    }}>
    <Select
      name="test1"
      options={options}
      errorMessage=".انتخاب این مورد اجباری است"
      errorMessagePosition="bottom"
    />
    <br />
    <Select
      name="test2"
      value={{ value: '2', label: 'گزینه ۲' }}
      options={options}
    />
  </div>
);

export const With5Rows = () => (
  <div
    style={{
      width: '350px',
      maxWidth: '100%',
      backgroundColor: '#ffffff',
      padding: '40px',
    }}>
    <Select name="test1" options={options} showedItem={5} />
  </div>
);

With5Rows.story = {
  name: 'With 5 rows',
};
