import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from '.';

storiesOf('Checkbox', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('Normal', () => (
    <div>
      <Checkbox>سلام دنیا</Checkbox>
      <Checkbox disabled>سلام دنیا</Checkbox>
    </div>
  ))
  .addWithJSX('Checked', () => (
    <div>
      <Checkbox checked>سلام دنیا</Checkbox>
      <Checkbox checked disabled>
        سلام دنیا
      </Checkbox>
    </div>
  ));
