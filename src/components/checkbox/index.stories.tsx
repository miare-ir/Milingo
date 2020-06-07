import * as React from 'react';
import Checkbox from '.';

export default {
  title: 'Checkbox',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Normal = () => (
  <div>
    <Checkbox>سلام دنیا</Checkbox>
    <Checkbox disabled>سلام دنیا</Checkbox>
  </div>
);

export const Checked = () => (
  <div>
    <Checkbox checked>سلام دنیا</Checkbox>
    <Checkbox checked disabled>
      سلام دنیا
    </Checkbox>
  </div>
);
