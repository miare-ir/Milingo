import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ButtonGroup from '.';
import Button from '../button';

class ButtonGroupSample extends React.Component<{}, { active: number }> {
  state = {
    active: 1,
  };

  toggle(stateID: number): void {
    this.setState({ active: stateID });
  }

  render(): React.ReactNode {
    return (
      <ButtonGroup name="test1">
        <Button
          onClick={() => this.toggle(1)}
          primary={this.state.active === 1}>
          سالن
        </Button>
        <Button
          onClick={() => this.toggle(2)}
          primary={this.state.active === 2}>
          حضوری
        </Button>
        <Button
          onClick={() => this.toggle(3)}
          primary={this.state.active === 3}>
          بیرون بر
        </Button>
        <Button
          onClick={() => this.toggle(4)}
          primary={this.state.active === 4}>
          آنلاین
        </Button>
      </ButtonGroup>
    );
  }
}

storiesOf('Button group', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .add('Normal', () => (
    <div
      style={{
        width: '450px',
        maxWidth: '100%',
        backgroundColor: '#ffffff',
        padding: '40px',
      }}>
      <ButtonGroupSample />
    </div>
  ));
