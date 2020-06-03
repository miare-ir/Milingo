import * as React from 'react';

import { FoodGroup, FoodGroupList } from '.';

export default {
  title: 'Food group',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const All = () => (
  <div
    style={{
      width: '400px',
      height: '400px',
      maxWidth: '100%',
      backgroundColor: '#ffffff',
      padding: '30px',
    }}>
    <FoodGroupList>
      <FoodGroup>محبوب‌ترین‌ها</FoodGroup>
      <FoodGroup selected>برگر</FoodGroup>
      <FoodGroup>پیتزا</FoodGroup>
      <FoodGroup>سالاد و پیش غذا و قیمه و ماست و قرمه سبزی</FoodGroup>
      <FoodGroup>محبوب‌ترین‌ها</FoodGroup>
      <FoodGroup>برگر</FoodGroup>
      <FoodGroup>پیتزا</FoodGroup>
      <FoodGroup>سالاد و پیش غذا و قیمه و ماست و قرمه سبزی</FoodGroup>
    </FoodGroupList>
  </div>
);
