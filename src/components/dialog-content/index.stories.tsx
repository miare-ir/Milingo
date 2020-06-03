import * as React from 'react';

import DialogContent from '.';
import Button from '../button';

import './styles.stories.scss';

export default {
  title: 'Dialog Content',

  decorators: [
    story => <div className="story-container dialog-story">{story()}</div>,
  ],
};

export const PrimaryWithContent = () => (
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
);

PrimaryWithContent.story = {
  name: 'Primary with content',
};

export const SecondaryWithContent = () => (
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
);

SecondaryWithContent.story = {
  name: 'Secondary with content',
};

export const SecondaryWithoutContent = () => (
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
);

SecondaryWithoutContent.story = {
  name: 'Secondary without content',
};
