import * as React from 'react';
import Radio from '.';

export default {
  title: 'Radio',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Normal = () => (
  <div>
    <Radio name="customName">سلام دنیا</Radio>
    <Radio name="customName" disabled>
      سلام دنیا
    </Radio>
  </div>
);

export const Checked = () => (
  <div>
    <Radio name="test" value="1">
      سلام دنیا
    </Radio>
    <Radio name="test" value="2" checked>
      سلام دنیا
    </Radio>
    <Radio name="test" value="3">
      سلام دنیا
    </Radio>
    <Radio name="customName" checked disabled>
      سلام دنیا
    </Radio>
  </div>
);
