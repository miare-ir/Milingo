import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Form } from '.';

storiesOf('Form', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .addWithJSX('Single row', () => (
    <div
      style={{
        width: '550px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        padding: '30px',
      }}>
      <Form title="عنوان فرم" description="توضیحات فرم">
        {' '}
        sdfsdfsdfsdf{' '}
      </Form>
    </div>
  ));
