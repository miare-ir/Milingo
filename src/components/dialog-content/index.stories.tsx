import * as React from 'react';
import { storiesOf } from '@storybook/react';

import DialogContent from '.';
import Button from '../button';

import './styles.stories.scss';

storiesOf('Dialog Content', module)
  .addDecorator(story => (
    <div className="story-container dialog-story">{story()}</div>
  ))
  .addWithJSX('Primary with content', () => (
    <DialogContent
      primary
      title="عنوان"
      actions={[
        <Button key="primary" small primary>
          ثبت
        </Button>,
        <Button key="secondary" small>
          انصراف
        </Button>,
      ]}>
      <p>توضیحات</p>
    </DialogContent>
  ))
  .addWithJSX('Secondary with content', () => (
    <DialogContent
      secondary
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
  .addWithJSX('Secondary without content', () => (
    <DialogContent
      secondary
      title="عنوان"
      actions={[
        <Button key="primary" primary>
          دکمه اصلی
        </Button>,
        <Button key="secondary">دکمه فرعی</Button>,
      ]}
    />
  ));
