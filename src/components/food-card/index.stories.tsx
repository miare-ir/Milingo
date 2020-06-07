import * as React from 'react';

import { FoodCard, FoodCardList } from '.';

export default {
  title: 'Food card',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const All = () => (
  <div
    style={{
      width: '600px',
      height: '400px',
      maxWidth: '100%',
      backgroundColor: '#f2f3f5',
      padding: '30px',
    }}>
    <FoodCardList title="پیتزا">
      <FoodCard price={15000}>پیتزا پپرونی</FoodCard>
      <FoodCard price={17500} hasTopping>
        پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط
        پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط
        پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط
        پیتزا مخلوط
      </FoodCard>
      <FoodCard price={15000} isOutOfOrder>
        پیتزا مارگاریتا
      </FoodCard>
    </FoodCardList>
  </div>
);
