import * as React from 'react';
import Stepper from '.';

export default {
  title: 'Stepper',
  decorators: [story => <div className="story-container">{story()}</div>],
};

const steps = [
  {
    title: 'مسیر ۱',
    status: 2,
  },
  {
    title: 'مسیر ۲',
    status: 1,
  },
  {
    title: 'مسیر ۳',
    status: 0,
  },
];

export const Normal = () => (
  
  <div>
   <Stepper steps={steps}></Stepper>
  </div>
);
