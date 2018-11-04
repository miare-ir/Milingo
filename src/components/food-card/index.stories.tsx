import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { FoodCard, FoodCardList } from '.';

storiesOf('Food card', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('All', () => (
    <div
      style={{
        width: '600px',
        height: '400px',
        maxWidth: '100%',
        backgroundColor: '#f2f3f5',
        padding: '30px',
      }}>
      <FoodCardList>
        <FoodCard price={15000}>پیتزا پپرونی</FoodCard>
        <FoodCard price={17500} hasTopping>
          پیتزا مخلوط
        </FoodCard>
      </FoodCardList>
    </div>
  ));
