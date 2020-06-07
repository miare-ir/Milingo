import * as React from 'react';
import Banner from '.';
import Button from '../button';

export default {
  title: 'Banners',

  decorators: [
    story => (
      <div
        className="story-container"
        style={{
          width: '50%',
          backgroundColor: '#ffffff',
          padding: '40px',
        }}>
        {story()}
      </div>
    ),
  ],
};

export const WithDismissIcon = () => (
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
);

WithDismissIcon.story = {
  name: 'With dismiss Icon',
};

export const WithoutDismissIcon = () => (
  <div>
    <Banner type="error">ایمیل وارد شده قبلا ثبت شده است.</Banner>
    <br />
    <Banner type="warning">تا ۲۳ روز دیگر منقضی می‌شود.</Banner>
    <br />
    <Banner type="info">از نام‌های کوتاه استفاده کنید.</Banner>
    <br />
    <Banner type="success"> درخواست ۴۱۳ با موفقیت انجام شد.</Banner>
  </div>
);

WithoutDismissIcon.story = {
  name: 'Without dismiss Icon',
};

export const MultipleLine = () => (
  <div>
    <Banner type="error">
      ایمیل وارد شده قبلا ثبت شده است.ایمیل وارد شده قبلا ثبت شده است.ایمیل وارد
      شده قبلا ثبت شده است.ایمیل وارد شده قبلا ثبت شده است.ایمیل وارد شده قبلا
      ثبت شده است.
    </Banner>
    <br />
    <Banner type="error">
      تا ۲۳ روز دیگر منقضی می‌شود.تا ۲۳ روز دیگر منقضی می‌شود.تا ۲۳ روز دیگر
      منقضی می‌شود.تا ۲۳ روز دیگر منقضی می‌شود.تا ۲۳ روز دیگر منقضی می‌شود.
    </Banner>
    <br />
    <Banner type="error">
      از نام‌های کوتاه استفاده کنید.از نام‌های کوتاه استفاده کنید.از نام‌های
      کوتاه استفاده کنید.از نام‌های کوتاه استفاده کنید.از نام‌های کوتاه استفاده
      کنید.
    </Banner>
    <br />
    <Banner type="error" onClose={() => {}}>
      درخواست ۴۱۳ با موفقیت انجام شد.درخواست ۴۱۳ با موفقیت انجام شد.درخواست ۴۱۳
      با موفقیت انجام شد.درخواست ۴۱۳ با موفقیت انجام شد.
      <br />
      <Button danger small>
        دکمه‌ی یک
      </Button>
    </Banner>
  </div>
);

MultipleLine.story = {
  name: 'Multiple line',
};
