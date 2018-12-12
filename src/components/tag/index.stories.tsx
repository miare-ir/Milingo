import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from '.';

storiesOf('Tag', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('Normal', () => (
    <div>
      <Tag style={{ marginLeft: '15px' }} warning>
        سلام دنیا
      </Tag>
      <Tag primary>سلام دنیا</Tag>
    </div>
  ));
