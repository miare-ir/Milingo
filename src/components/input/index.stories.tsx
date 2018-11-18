import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Input from '.';

storiesOf('Input', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('Normal', () => (
    <div style={{ width: '350px', maxWidth: '100%' }}>
      <Input />
      <Input title="عنوان" />
      <Input title="عنوان" placeholder="متن" />
      <Input
        title="عنوان"
        placeholder="متن"
        errorMessage="مقدار وارد شده صحیح نیست"
        validate={value => !!value}
        displayClear
      />
      <Input title="عنوان" placeholder="متن" type="number" pre="ریال" />
      <Input
        title="عنوان"
        placeholder="متن با دکمه‌ی ریست"
        errorMessage="مقدار وارد شده صحیح نیست"
        validate={value => !!value}
        displayClear
      />
      <Input
        title="عنوان"
        placeholder="متن چپ به راست"
        errorMessage="مقدار وارد شده صحیح نیست"
        validate={value => !!value}
        displayClear
        ltr
      />
      <Input
        title="عنوان"
        placeholder="متن"
        type="number"
        pre="ریال"
        displayClear
      />
      <Input
        title="عنوان"
        placeholder="متن"
        errorMessage="مقدار وارد شده صحیح نیست"
        validate={value => !!value}
        forceDisplayError
      />
      <Input
        title="عنوان"
        placeholder="متن"
        type="number"
        pre="ریال"
        errorMessage="مقدار وارد شده صحیح نیست"
        validate={value => !!value}
        forceDisplayError
      />
    </div>
  ))
  .addWithJSX('Disabled', () => (
    <div style={{ width: '350px', maxWidth: '100%' }}>
      <Input disabled />
      <Input disabled title="عنوان" />
      <Input disabled title="عنوان" placeholder="متن" />
      <Input
        disabled
        title="عنوان"
        placeholder="متن"
        pre="ریال"
        type="number"
      />
    </div>
  ));
