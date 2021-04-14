import * as React from 'react';

import { Tab, TabColumn } from '.';

export default {
  title: 'Tab column',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Normal = (): JSX.Element => (
  <div
    style={{
      width: '400px',
      height: '400px',
      maxWidth: '100%',
      backgroundColor: '#ffffff',
      padding: '30px',
    }}>
    <TabColumn>
      <Tab>محبوب‌ترین‌ها</Tab>
      <Tab selected>برگر</Tab>
      <Tab>پیتزا</Tab>
      <Tab>سالاد و پیش غذا و قیمه و ماست و قرمه سبزی</Tab>
      <Tab>محبوب‌ترین‌ها</Tab>
      <Tab>برگر</Tab>
      <Tab>پیتزا</Tab>
      <Tab>سالاد و پیش غذا و قیمه و ماست و قرمه سبزی</Tab>
    </TabColumn>
  </div>
);

export const FullWidth = (): JSX.Element => (
  <div
    style={{
      width: '400px',
      height: '400px',
      maxWidth: '100%',
      backgroundColor: '#ffffff',
      padding: '30px',
    }}>
    <TabColumn fullWidth>
      <Tab>محبوب‌ترین‌ها</Tab>
      <Tab selected>برگر</Tab>
      <Tab>پیتزا</Tab>
      <Tab>سالاد و پیش غذا و قیمه و ماست و قرمه سبزی</Tab>
      <Tab>محبوب‌ترین‌ها</Tab>
      <Tab>برگر</Tab>
      <Tab>پیتزا</Tab>
      <Tab>سالاد و پیش غذا و قیمه و ماست و قرمه سبزی</Tab>
    </TabColumn>
  </div>
);
