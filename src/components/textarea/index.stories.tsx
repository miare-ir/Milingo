import * as React from 'react';
import Textarea from '.';

export default {
  title: 'Textarea',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Normal = () => (
  <div style={{ width: '350px', maxWidth: '100%' }}>
    <Textarea rows={3} />
    <Textarea title="عنوان" rows={3} />
    <Textarea title="عنوان" rows={3} placeholder="متن" />
    <Textarea
      title="عنوان"
      placeholder="متن"
      errorMessage="این جایگاه نمی‌تواند خالی بماند"
      validate={value => !!value}
      rows={3}
    />
    <Textarea
      title="عنوان"
      placeholder="متن"
      errorMessage="این جایگاه نمی‌تواند خالی بماند"
      validate={value => !!value}
      rows={3}
    />
    <Textarea
      title="عنوان"
      placeholder="متن"
      errorMessage="این جایگاه نمی‌تواند خالی بماند"
      validate={value => !!value}
      forceDisplayError
      rows={3}
    />
  </div>
);

export const Disabled = () => (
  <div style={{ width: '350px', maxWidth: '100%' }}>
    <Textarea disabled />
    <Textarea disabled title="عنوان" />
    <Textarea disabled title="عنوان" placeholder="متن" />
  </div>
);
