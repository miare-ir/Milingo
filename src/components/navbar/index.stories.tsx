import * as React from 'react';
// import { withViewport } from '@storybook/addon-viewport';
import Navbar, { NavbarItem } from '.';

class NavbarSample extends React.Component<
  { horizontally?: boolean },
  { selected: number }
> {
  state = {
    selected: 0,
  };

  render(): React.ReactNode {
    return (
      <Navbar horizontally={this.props.horizontally}>
        <NavbarItem
          selected={this.state.selected === 0}
          onClick={() => this.setState({ selected: 0 })}
          icon="home"
          text="میاره"
        />
        <NavbarItem
          selected={this.state.selected === 1}
          onClick={() => this.setState({ selected: 1 })}
          icon="show_chart"
          text="امور مالی"
        />
        <NavbarItem
          selected={this.state.selected === 2}
          onClick={() => this.setState({ selected: 2 })}
          icon="access_time"
          text="سفرهای گذشته"
        />
      </Navbar>
    );
  }
}

export default {
  title: 'Navbar',

  decorators: [
    story => <div className="story-container navbar-story">{story()}</div>,
  ],
};

export const Desktop = () => <NavbarSample />;
export const Mobile = () => <NavbarSample horizontally />;
