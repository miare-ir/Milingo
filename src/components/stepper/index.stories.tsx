import * as React from 'react';
import Stepper from '.';

export default {
  title: 'Stepper',
  decorators: [story => <div className="story-container">{story()}</div>],
};

const steps = [
  {
    title: 'مسیر 1',
    status: 2,
  },
  {
    title: 'مسیر 2',
    status: 2,
  },
  {
    title: 'مسیر 3',
    status: 2,
  },
  {
    title: 'مسیر 4',
    status: 1,
  },
  {
    title: 'مسیر 5',
    status: 0,
  },
  {
    title: 'مسیر 6',
    status: 0,
  },
];

export const Normal = () => (
  <div>
   <Stepper steps={steps}></Stepper>
  </div>
);
