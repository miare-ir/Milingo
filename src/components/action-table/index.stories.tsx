import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { ActionTable, ActionTableRow } from '.';
import { Action } from './action-table-row';
import Tag from '../tag';

const actions: Action[] = [
  { name: 'edit', title: 'ویرایش' },
  { name: 'out', title: 'اعلام اتمام' },
  {
    name: 'delete',
    title: 'حذف',
    extraProps: { danger: true },
    className: 'danger',
  },
];

storiesOf('Action Table', module)
  .addDecorator(story => <div style={{ direction: 'rtl' }}>{story()}</div>)
  .add('With Title', () => (
    <div
      style={{
        width: '80%',
        backgroundColor: '#ffffff',
        padding: '10px',
      }}>
      <ActionTable title="سلام دنیا">
        <ActionTableRow
          description={'۱,۲۳۰,۰۰۰'}
          id="1"
          title="چیزبرگر"
          actions={actions}
        />
        <ActionTableRow
          icon="home"
          id="2"
          description={'۱,۲۳۰,۰۰۰'}
          extraTitle={
            <div>
              همبرگر{'   '}
              <Tag warning>تمام شده</Tag>
            </div>
          }
          actions={actions}
        />
        <ActionTableRow
          description={'۱,۲۳۰,۰۰۰'}
          id="3"
          title="دوبل برگر"
          actions={actions}
          disable
        />
      </ActionTable>
    </div>
  ))
  .add('Without Title', () => (
    <div
      style={{
        width: '80%',
        backgroundColor: '#ffffff',
        padding: '10px',
      }}>
      <ActionTable>
        <ActionTableRow id="1" title="چیزبرگر" actions={actions} />
        <ActionTableRow id="2" title="برگر" actions={actions} />
        <ActionTableRow id="3" title="دوبل برگر" actions={actions} />
      </ActionTable>
    </div>
  ));
