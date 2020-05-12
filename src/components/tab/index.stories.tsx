import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { TabNav, TabNavItem, TabContent, TabContentItem } from '.';

class TabSample extends React.Component<{}, { active: number }> {
  state = {
    active: 1,
  };

  toggle(tabID: number): void {
    this.setState({ active: tabID });
  }

  render(): React.ReactNode {
    return (
      <div>
        <TabNav>
          <TabNavItem
            onClick={() => this.toggle(1)}
            active={this.state.active === 1}>
            انتخاب غذا
          </TabNavItem>
          <TabNavItem
            onClick={() => this.toggle(2)}
            active={this.state.active === 2}>
            اطلاعات مشتری
          </TabNavItem>
          <TabNavItem
            onClick={() => this.toggle(3)}
            active={this.state.active === 3}>
            نوع سفارش
          </TabNavItem>
          <TabNavItem
            onClick={() => this.toggle(4)}
            active={this.state.active === 4}>
            پرداخت
          </TabNavItem>
          <TabNavItem
            onClick={() => this.toggle(5)}
            active={this.state.active === 5}>
            سایر
          </TabNavItem>
        </TabNav>
        <TabContent selectedtab={this.state.active}>
          <TabContentItem tabId={1}>انتخاب غذا</TabContentItem>
          <TabContentItem tabId={2}>اطلاعات مشتری</TabContentItem>
          <TabContentItem tabId={3}>نوع سفارش</TabContentItem>
          <TabContentItem tabId={4}>پرداخت</TabContentItem>
          <TabContentItem tabId={5}>سایر</TabContentItem>
        </TabContent>
      </div>
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
  .add('All', () => <TabSample />);
