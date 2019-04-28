import * as React from 'react';
import { storiesOf } from '@storybook/react';

import DataTable from '.';

storiesOf('Data Table', module)
  .addDecorator(story => <div style={{ direction: 'rtl' }}>{story()}</div>)
  .addWithJSX('With Title', () => (
    <div
      style={{
        width: '80%',
        backgroundColor: '#ffffff',
        padding: '10px',
      }}>
      <DataTable />
    </div>
  ))
  .addWithJSX('Without Title', () => (
    <div
      style={{
        width: '80%',
        backgroundColor: '#ffffff',
        padding: '10px',
      }}
    />
  ));
