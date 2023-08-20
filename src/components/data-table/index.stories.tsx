import * as React from 'react';

import Tag from '../tag';
import { Table, LightTable, Th, Tr, Td } from '.';
import PersianNumber from '../persian-number';

export default {
  title: 'Data Table',
  decorators: [story => <div style={{ direction: 'rtl' }}>{story()}</div>],
};

export const DefaultTableWithTagline = () => (
  <div
    style={{
      width: '80%',
      backgroundColor: '#ffffff',
      padding: '10px',
    }}>
    <Table tagline={<PersianNumber value={'سه‌شنبه 30 اردیبهشت، 1399'} />}>
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
);

DefaultTableWithTagline.story = {
  name: 'Default table with tagline',
};

export const DefaultTable = () => (
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
);

DefaultTable.story = {
  name: 'Default table',
};

export const DefaultTableLight = () => (
  <LightTable>
      <Tr>
        <Th>فیش</Th>
        <Th>زمان ثبت اولیه</Th>
        <Th>مبلغ (ریال)</Th>
        <Th>وضعیت</Th>
      </Tr>
      <Tr>
        <Td>۱</Td>
        <Td>۱۲:۳۰</Td>
        <Td>۵۶۰٫۰۰۰</Td>
        <Td>
          تسویه نشده
        </Td>
      </Tr>
      <Tr>
        <Td>۲</Td>
        <Td>۱۲:۰۷</Td>
        <Td>۲۳۰٫۰۰۰</Td>
        <Td>
          تسویه نشده
        </Td>
      </Tr>
  </LightTable>
);

DefaultTableLight.story = {
  name: 'Default table light',
};
