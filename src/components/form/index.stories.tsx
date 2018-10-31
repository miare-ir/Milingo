import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Form, FormGroup } from '.';
import Input from '../input';
import Textarea from '../textarea';
import Checkbox from '../checkbox';
import Radio from '../radiobutton';
import Button from '../button';

storiesOf('Form', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('Single column', () => (
    <div
      style={{
        width: '400px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        padding: '30px',
      }}>
      <Form title="عنوان فرم" description="توضیحات فرم">
        <FormGroup>
          <Input title="عنوان" />
        </FormGroup>
        <FormGroup>
          <Textarea title="عنوان" placeholder="متن" rows={4} />
        </FormGroup>
        <FormGroup title="عنوان">
          <Radio checked> رفت وبرگشت</Radio>
          <Radio> رفت وبرگشت</Radio>
        </FormGroup>
        <Button> انصراف</Button>
        <Button primary> ارسال</Button>
      </Form>
    </div>
  ))
  .addWithJSX('Couple column', () => (
    <div
      style={{
        width: '550px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        padding: '30px',
      }}>
      <Form title="عنوان فرم" description="توضیحات فرم">
        <FormGroup singleRow>
          <Input title="عنوان" />
          <Input title="عنوان" />
        </FormGroup>
        <FormGroup>
          <Textarea title="عنوان" placeholder="متن" rows={4} />
        </FormGroup>
        <FormGroup singleRow>
          <FormGroup title="عنوان">
            <Radio checked> رفت وبرگشت</Radio>
            <Radio> رفت وبرگشت</Radio>
          </FormGroup>
          <FormGroup title="عنوان">
            <Checkbox checked> رفت وبرگشت</Checkbox>
            <Checkbox> رفت وبرگشت</Checkbox>
          </FormGroup>
        </FormGroup>
        <Button> انصراف</Button>
        <Button primary> ارسال</Button>
      </Form>
    </div>
  ));
