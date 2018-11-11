import * as React from 'react';
import { storiesOf } from '@storybook/react';

import { TabNav } from '.';

class TabSample extends React.Component<{}, { selected: number }> {
  state = {
    selected: 0,
  };

  render() {
    return <TabNav className="ali" />;
  }
}

storiesOf('Tab', module)
  .addDecorator(story => (
    <div className="story-container navbar-story">{story()}</div>
  ))
  .addWithJSX('All', () => <TabSample />);
