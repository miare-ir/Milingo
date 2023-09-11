import * as React from 'react';

import { ProgressBar } from '.';

export default {
  title: 'ProgressBar',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Sizes: React.FC = () => (
  <div>
    <ProgressBar
      primaryColor="#4A90E2"
      secondaryColor="#F3B229"
      range={[0, 100]}
      current={20}
      title="عنوان پروگرس‌بار"
    />

    <br />
    <br />
    <br />

    <ProgressBar
      primaryColor="#4A90E2"
      secondaryColor="#F3B229"
      range={[20, 100]}
      current={50}
    />
  </div>
);
