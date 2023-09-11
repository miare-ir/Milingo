import * as React from 'react';

import { ProgressBar } from '.';

export default {
  title: 'ProgressBar',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Sizes: React.FC = () => (
  <div>
    <ProgressBar range={[0, 100]} current={20} title="پروگرس‌بار عنوان دار" />

    <br />
    <br />
    <br />

    <ProgressBar range={[20, 100]} current={50} />

    <br />
    <br />
    <br />

    <ProgressBar
      range={[150, 200]}
      current={185}
      secondaryMode
      title="پروگرس‌بار در حالت ثانویه"
    />
  </div>
);
