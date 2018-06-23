import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '.';

storiesOf('Radio', module)
  .addDecorator(story => (
    <div className="story-container">
      {story()}
    </div>
  ))
  .addWithJSX('Normal', () => (
    <div>
      <Radio>
        سلام دنیا
      </Radio>
      <Radio disabled>
        سلام دنیا
      </Radio>
    </div>
  ))
  .addWithJSX('Checked', () => (
    <div>
      <Radio checked>
        سلام دنیا
      </Radio>
      <Radio checked disabled>
        سلام دنیا
      </Radio>
    </div>
  ));
