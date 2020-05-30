import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Tag from '.';

storiesOf('Tag', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .add('Normal', () => (
    <div>
      <Tag style={{ marginLeft: '16px' }}>برچسب</Tag>
      <Tag style={{ marginLeft: '16px' }} primary>
        برچسب
      </Tag>
      <Tag style={{ marginLeft: '16px' }} success>
        برچسب
      </Tag>
      <Tag style={{ marginLeft: '16px' }} warning>
        برچسب
      </Tag>
      <Tag alert>برچسب</Tag>
    </div>
  ));
