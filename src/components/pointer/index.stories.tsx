import * as React from 'react';

import Pointer from '.';
import './styles.stories.scss';

export default {
  title: 'Pointer',
  decorators: [
    story => <div className="story-container pointers">{story()}</div>,
  ],
};

export const Sizes: React.FC = () => (
  <>
    <Pointer size="small" />
    <Pointer size="normal" />
    <Pointer size="large" />
  </>
);
