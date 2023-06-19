import * as React from 'react';

import CountInput from '.';

export default {
  title: 'Count input',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Basic = (): JSX.Element => {
  const [value, setValue] = React.useState(0);
  return <CountInput value={value} onChange={setValue} />;
};

export const MinAndMaxValue = (): JSX.Element => {
  const [value, setValue] = React.useState(15);
  return <CountInput min={10} max={20} value={value} onChange={setValue} />;
};

export const Steps = (): JSX.Element => {
  const [value, setValue] = React.useState(15);
  return <CountInput steps={1.5} value={value} onChange={setValue} />;
};
