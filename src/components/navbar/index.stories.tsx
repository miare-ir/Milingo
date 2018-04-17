import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { withViewport } from '@storybook/addon-viewport';
import Navbar, { NavbarItem } from '.';


class NavbarSample extends React.Component<{}, { selected: number }> {
  state = {
    selected: 0,
  };

  render() {
    return (
      <Navbar>
        <NavbarItem
          selected={this.state.selected === 0}
          onClick={() => this.setState({ selected: 0 })}
          icon="home"
          text="میاره" />
        <NavbarItem
          selected={this.state.selected === 1}
          onClick={() => this.setState({ selected: 1 })}
          icon="show_chart"
          text="امور مالی" />
        <NavbarItem
          selected={this.state.selected === 2}
          onClick={() => this.setState({ selected: 2 })}
          icon="access_time"
          text="سفرهای گذشته" />
      </Navbar>
    );
  }
}

storiesOf('Navbar', module)
  // .addDecorator(withViewport('iphone6'))
  .addDecorator(story => (
    <div className="story-container navbar-story">
      {story()}
    </div>
  ))
  .addWithJSX('Desktop', () => (
    <NavbarSample />
  ))
  .addWithJSX('Mobile', () => (
    <NavbarSample />
  ));
