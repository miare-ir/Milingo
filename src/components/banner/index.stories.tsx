import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from '.';
import Button from '../button';

storiesOf('Banners', module)
  .addDecorator(story => (
    <div
      className="story-container"
      style={{
        width: '50%',
        backgroundColor: '#ffffff',
        padding: '40px',
      }}>
      {story()}
    </div>
  ))
  .add('With dismiss Icon', () => (
    <div>
      <Banner fullWidth onClose={() => {}} type="error">
        ایمیل وارد شده قبلا ثبت شده است.
      </Banner>
      <br />
      <Banner fullWidth onClose={() => {}} type="warning">
        تا ۲۳ روز دیگر منقضی می‌شود.
      </Banner>
      <br />
      <Banner fullWidth onClose={() => {}} type="info">
        از نام‌های کوتاه استفاده کنید.
      </Banner>
      <br />
      <Banner fullWidth onClose={() => {}} type="success">
        درخواست ۴۱۳ با موفقیت انجام شد.
      </Banner>
    </div>
  ))
  .add('Without dismiss Icon', () => (
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
  .add('Multiple line', () => (
    <div>
      <Banner type="error">
        ایمیل وارد شده قبلا ثبت شده است.ایمیل وارد شده قبلا ثبت شده است.ایمیل
        وارد شده قبلا ثبت شده است.ایمیل وارد شده قبلا ثبت شده است.ایمیل وارد شده
        قبلا ثبت شده است.
      </Banner>
      <br />
      <Banner type="error">
        تا ۲۳ روز دیگر منقضی می‌شود.تا ۲۳ روز دیگر منقضی می‌شود.تا ۲۳ روز دیگر
        منقضی می‌شود.تا ۲۳ روز دیگر منقضی می‌شود.تا ۲۳ روز دیگر منقضی می‌شود.
      </Banner>
      <br />
      <Banner type="error">
        از نام‌های کوتاه استفاده کنید.از نام‌های کوتاه استفاده کنید.از نام‌های
        کوتاه استفاده کنید.از نام‌های کوتاه استفاده کنید.از نام‌های کوتاه
        استفاده کنید.
      </Banner>
      <br />
      <Banner type="error" onClose={() => {}}>
        درخواست ۴۱۳ با موفقیت انجام شد.درخواست ۴۱۳ با موفقیت انجام شد.درخواست
        ۴۱۳ با موفقیت انجام شد.درخواست ۴۱۳ با موفقیت انجام شد.
        <br />
        <Button danger small>
          دکمه‌ی یک
        </Button>
      </Banner>
    </div>
  ));
