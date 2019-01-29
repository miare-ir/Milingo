import * as React from 'react';
import { storiesOf } from '@storybook/react';

import List from './list';
import ListSection from './section';
import ListTitle from './title';
import ListFooter from './footer';

const SimpleArrayOfLiElements = () => (
  <>
    <li
      style={{
        direction: 'rtl',
      }}>
      <span>مبلغ غذا</span>
      <span
        style={{
          color: '#258613',
          direction: 'ltr',
        }}>
        + ۲۰,۰۰۰
      </span>
    </li>
    <li
      style={{
        direction: 'rtl',
      }}>
      <span>حمل و نقل</span>
      <span
        style={{
          color: '#d73948',
          direction: 'ltr',
        }}>
        - ۳۰,۰۰۰
      </span>
    </li>
    <li
      style={{
        direction: 'rtl',
      }}>
      <span>کارمزد پرداخت</span>
      <span
        style={{
          color: '#d73948',
          direction: 'ltr',
        }}>
        - ۱۰,۰۰۰
      </span>
    </li>
  </>
);

storiesOf('List', module)
  .addDecorator(story => (
    <div
      className="story-container list-story-container"
      style={{
        width: '400px',
        backgroundColor: 'white',
        padding: '50px',
      }}>
      {story()}
    </div>
  ))
  .addWithJSX('All', () => (
    <List>
      <ListTitle title="فیش ۲۴" />
      <ListSection>
        <SimpleArrayOfLiElements />
      </ListSection>
      <ListTitle title="فیش ۲۵" />
      <ListSection>
        <SimpleArrayOfLiElements />
      </ListSection>
      <ListSection large seperator>
        <SimpleArrayOfLiElements />
      </ListSection>
      <ListFooter>
        <span>مجموع پرداخت</span>
        <span
          style={{
            color: '#d73948',
            direction: 'ltr',
          }}>
          - ۱۰,۰۰۰
        </span>
      </ListFooter>
    </List>
  ));
