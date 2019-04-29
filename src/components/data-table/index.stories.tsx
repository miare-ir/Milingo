import * as React from 'react';
import * as moment from 'moment-jalaali';
import { storiesOf } from '@storybook/react';

import Tag from '../tag';
import { Table, Th, Tr, Td } from '.';
import PersianNumber from '../persian-number';

const JFORMAT: string = 'ddd jD jMMMM، jYYYY';

const extractDate = date => {
  if (date.isSame(moment(), 'day')) {
    return 'امروز، ' + date.format(JFORMAT);
  }
  return date.format(JFORMAT);
};

storiesOf('Data Table', module)
  .addDecorator(story => <div style={{ direction: 'rtl' }}>{story()}</div>)
  .addWithJSX('Default table with tagline', () => (
    <div
      style={{
        width: '80%',
        backgroundColor: '#ffffff',
        padding: '10px',
      }}>
      <Table tagline={<PersianNumber value={extractDate(moment())} />}>
        <Tr>
          <Th>فیش</Th>
          <Th>زمان ثبت اولیه</Th>
          <Th>مبلغ (ریال)</Th>
          <Th>وضعیت</Th>
          <Th />
        </Tr>
        <Tr>
          <Td>۱</Td>
          <Td>۱۲:۳۰</Td>
          <Td>۵۶۰٫۰۰۰</Td>
          <Td>
            <Tag warning>تسویه نشده</Tag>
          </Td>
          <Td>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                direction: 'ltr',
                display: 'flex',
                color: '#1E6DC8',
              }}>
              جزییات بیشتر
            </a>
          </Td>
        </Tr>
        <Tr>
          <Td>۲</Td>
          <Td>۱۲:۰۷</Td>
          <Td>۲۳۰٫۰۰۰</Td>
          <Td>
            <Tag>تسویه نشده</Tag>
          </Td>
          <Td>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                direction: 'ltr',
                display: 'flex',
                color: '#1E6DC8',
              }}>
              جزییات بیشتر
            </a>
          </Td>
        </Tr>
      </Table>
    </div>
  ))
  .addWithJSX('Default table', () => (
    <div
      style={{
        width: '80%',
        backgroundColor: '#ffffff',
        padding: '10px',
      }}>
      <Table>
        <Tr>
          <Th>فیش</Th>
          <Th>زمان ثبت اولیه</Th>
          <Th>مبلغ (ریال)</Th>
          <Th>وضعیت</Th>
          <Th />
        </Tr>
        <Tr>
          <Td>۱</Td>
          <Td>۱۲:۳۰</Td>
          <Td>۵۶۰٫۰۰۰</Td>
          <Td>
            <Tag warning>تسویه نشده</Tag>
          </Td>
          <Td>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                direction: 'ltr',
                display: 'flex',
                color: '#1E6DC8',
              }}>
              جزییات بیشتر
            </a>
          </Td>
        </Tr>
        <Tr>
          <Td>۲</Td>
          <Td>۱۲:۰۷</Td>
          <Td>۲۳۰٫۰۰۰</Td>
          <Td>
            <Tag>تسویه نشده</Tag>
          </Td>
          <Td>
            <a
              href="#"
              style={{
                textDecoration: 'none',
                direction: 'ltr',
                display: 'flex',
                color: '#1E6DC8',
              }}>
              جزییات بیشتر
            </a>
          </Td>
        </Tr>
      </Table>
    </div>
  ));
