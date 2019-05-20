import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from '.';

storiesOf('Banners', module)
  .addDecorator(story => (
    <div
      className="story-container"
      style={{
        width: '40%',
        backgroundColor: '#ffffff',
        padding: '40px',
      }}>
      {story()}
    </div>
  ))
  .addWithJSX('With dismiss Icon', () => (
    <div>
      <Banner onClose={() => {}} type="error">
        ایمیل وارد شده قبلا ثبت شده است.
      </Banner>
      <br />
      <Banner onClose={() => {}} type="warning">
        تا ۲۳ روز دیگر منقضی می‌شود.
      </Banner>
      <br />
      <Banner onClose={() => {}} type="info">
        از نام‌های کوتاه استفاده کنید.
      </Banner>
      <br />
      <Banner onClose={() => {}} type="success">
        {' '}
        درخواست ۴۱۳ با موفقیت انجام شد.
      </Banner>
    </div>
  ))
  .addWithJSX('Without dismiss Icon', () => (
    <div>
      <Banner type="error">ایمیل وارد شده قبلا ثبت شده است.</Banner>
      <br />
      <Banner type="warning">تا ۲۳ روز دیگر منقضی می‌شود.</Banner>
      <br />
      <Banner type="info">از نام‌های کوتاه استفاده کنید.</Banner>
      <br />
      <Banner type="success"> درخواست ۴۱۳ با موفقیت انجام شد.</Banner>
    </div>
  ))
  .addWithJSX('Multiple line', () => (
    <div>
      <Banner type="error">ایمیل وارد شده قبلا ثبت شده است.</Banner>
      <br />
      <Banner type="error">تا ۲۳ روز دیگر منقضی می‌شود.</Banner>
      <br />
      <Banner type="error">از نام‌های کوتاه استفاده کنید.</Banner>
      <br />
      <Banner type="error"> درخواست ۴۱۳ با موفقیت انجام شد.</Banner>
    </div>
  ));
