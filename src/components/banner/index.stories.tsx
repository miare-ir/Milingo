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
    <br />
    <Banner fullWidth onClose={() => {}} type="default">
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
    <br />
    <Banner type="default"> درخواست ۴۱۳ با موفقیت انجام شد.</Banner>
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
    <Banner type="error" onClose={() => {}} header="با موفقیت انجام شد">
      درخواست ۴۱۳ با موفقیت انجام شد.درخواست ۴۱۳ با موفقیت انجام شد.درخواست ۴۱۳
      با موفقیت انجام شد.درخواست ۴۱۳ با موفقیت انجام شد.
      <br />
      <Button danger small>
        دکمه‌ی یک
      </Button>
    </Banner>
    <br />
    <Banner type="default" onClose={() => {}} header="با موفقیت انجام شد">
      درخواست ۴۱۳ با موفقیت انجام شد.درخواست ۴۱۳ با موفقیت انجام شد.درخواست ۴۱۳
      با موفقیت انجام شد.درخواست ۴۱۳ با موفقیت انجام شد.
      <br />
      <Button ghost small>
        دکمه‌ی یک
      </Button>
    </Banner>
  </div>
);

MultipleLine.story = {
  name: 'Multiple line',
};

export const DarkWithDismissIcon = () => (
  <div
    style={{
      backgroundColor: '#212230',
      padding: '20px',
    }}>
    <Banner dark fullWidth onClose={() => {}} type="error">
      ایمیل وارد شده قبلا ثبت شده است.
    </Banner>
    <br />
    <Banner dark fullWidth onClose={() => {}} type="warning">
      تا ۲۳ روز دیگر منقضی می‌شود.
    </Banner>
    <br />
    <Banner dark fullWidth onClose={() => {}} type="info">
      از نام‌های کوتاه استفاده کنید.
    </Banner>
    <br />
    <Banner dark fullWidth onClose={() => {}} type="success">
      درخواست ۴۱۳ با موفقیت انجام شد.
    </Banner>
  </div>
);

DarkWithDismissIcon.story = {
  name: 'Dark with dismiss Icon',
};

export const DarkWithoutDismissIcon = () => (
  <div
    style={{
      backgroundColor: '#212230',
      padding: '20px',
    }}>
    <Banner dark type="error">
      ایمیل وارد شده قبلا ثبت شده است.
    </Banner>
    <br />
    <Banner dark type="warning">
      تا ۲۳ روز دیگر منقضی می‌شود.
    </Banner>
    <br />
    <Banner dark type="info">
      از نام‌های کوتاه استفاده کنید.
    </Banner>
    <br />
    <Banner dark type="success">
      {' '}
      درخواست ۴۱۳ با موفقیت انجام شد.
    </Banner>
  </div>
);

DarkWithoutDismissIcon.story = {
  name: 'Dark without dismiss Icon',
};

export const DarkMultipleLine = () => (
  <div
    style={{
      backgroundColor: '#212230',
      padding: '20px',
    }}>
    <Banner dark type="error" header="ایمیل وارد شده قبلا ثبت شده است">
      ایمیل وارد شده قبلا ثبت شده است.ایمیل وارد شده قبلا ثبت شده است.ایمیل وارد
      شده قبلا ثبت شده است.ایمیل وارد شده قبلا ثبت شده است.ایمیل وارد شده قبلا
      ثبت شده است.
    </Banner>
    <br />
    <Banner dark type="error" header="منقضی می‌شود">
      تا ۲۳ روز دیگر منقضی می‌شود.تا ۲۳ روز دیگر منقضی می‌شود.تا ۲۳ روز دیگر
      منقضی می‌شود.تا ۲۳ روز دیگر منقضی می‌شود.تا ۲۳ روز دیگر منقضی می‌شود.
    </Banner>
    <br />
    <Banner dark type="error" header="نام‌های کوتاه استفاده کنید">
      از نام‌های کوتاه استفاده کنید.از نام‌های کوتاه استفاده کنید.از نام‌های
      کوتاه استفاده کنید.از نام‌های کوتاه استفاده کنید.از نام‌های کوتاه استفاده
      کنید.
    </Banner>
    <br />
    <Banner dark type="error" onClose={() => {}} header="با موفقیت انجام شد">
      درخواست ۴۱۳ با موفقیت انجام شد.درخواست ۴۱۳ با موفقیت انجام شد.درخواست ۴۱۳
      با موفقیت انجام شد.درخواست ۴۱۳ با موفقیت انجام شد.
      <br />
      <Button link small>
        دکمه‌ی یک
      </Button>
    </Banner>
  </div>
);

DarkMultipleLine.story = {
  name: 'Dark multiple line',
};
