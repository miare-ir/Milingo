import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { TabNav, TabNavItem } from '.';

class TabSample extends React.Component<{}, { selected: number }> {
  state = {
    selected: 0,
  };

  render() {
    return (
      <TabNav>
        <TabNavItem> انتخاب غذا</TabNavItem>
        <TabNavItem> اطلاعات مشتری</TabNavItem>
        <TabNavItem active>نوع سفارش</TabNavItem>
        <TabNavItem>پرداخت</TabNavItem>
        <TabNavItem>سایر</TabNavItem>
      </TabNav>
    );
  }
}

storiesOf('Tab', module)
  .addDecorator(story => (
    <div
      className="story-container tab-story"
      style={{ width: '80%', height: '500px', backgroundColor: 'white' }}>
      {story()}
    </div>
  ))
  .addWithJSX('All', () => <TabSample />);
