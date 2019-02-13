import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '.';

storiesOf('Radio', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('Normal', () => (
    <div>
      <Radio name="customName">سلام دنیا</Radio>
      <Radio name="customName" disabled>
        سلام دنیا
      </Radio>
    </div>
  ))
  .addWithJSX('Checked', () => (
    <div>
      <Radio name="test" value="1">
        سلام دنیا
      </Radio>
      <Radio name="test" value="2" checked>
        سلام دنیا
      </Radio>
      <Radio name="test" value="3">
        سلام دنیا
      </Radio>
      <Radio name="customName" checked disabled>
        سلام دنیا
      </Radio>
    </div>
  ));
