import * as React from 'react';
import { storiesOf } from '@storybook/react';

import DialogContent from '.';
import Button from '../button';

import './styles.stories.scss';

storiesOf('Dialog Content', module)
  .addDecorator(story => (
    <div className="story-container dialog-story">{story()}</div>
  ))
  .addWithJSX('With content', () => (
    <DialogContent
      title="عنوان"
      actions={[
        <Button key="primary" primary>
          دکمه اصلی
        </Button>,
        <Button key="secondary">دکمه فرعی</Button>,
      ]}>
      <p>توضیحات</p>
    </DialogContent>
  ))
  .addWithJSX('Without content', () => (
    <DialogContent
      title="عنوان"
      actions={[
        <Button key="primary" primary>
          دکمه اصلی
        </Button>,
        <Button key="secondary">دکمه فرعی</Button>,
      ]}
    />
  ));
