import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { Form, FormGroup } from '.';
import Input from '../input';
import Textarea from '../textarea';

storiesOf('Form', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('Single row', () => (
    <div
      style={{
        width: '400px',
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
        <FormGroup />
      </Form>
    </div>
  ));
