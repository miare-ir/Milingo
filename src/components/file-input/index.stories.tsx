import * as React from 'react';
import { storiesOf } from '@storybook/react';
import File from '.';

storiesOf('File input', module)
  .addDecorator(story => (
    <div className="story-container">
      {story()}
    </div>
  ))
  .addWithJSX('Normal', () => (
    <div style={{
      width: '450px',
      maxWidth: '100%',
      backgroundColor: '#ffffff',
      padding: '40px',
    }}>
      <File />

      <File multiple />
    </div>
  ));
