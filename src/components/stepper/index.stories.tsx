import * as React from 'react';
import Stepper, { Step, StepStatus } from '.';

export default {
  title: 'Stepper',
  decorators: [story => <div className="story-container">{story()}</div>],
};

const steps: Step[] = [
  {
    title: 'مسیر 1',
    status: StepStatus.Done,
  },
  {
    title: 'مسیر 2',
    status: StepStatus.Done,
  },
  {
    title: 'مسیر 3',
    status: StepStatus.Done,
  },
  {
    title: 'مسیر 4',
    status: StepStatus.Doing,
  },
  {
    title: 'مسیر 5',
    status: StepStatus.ToDo,
  },
  {
    title: 'مسیر 6',
    status: StepStatus.ToDo,
  },
];

export const Normal = (): JSX.Element => (
  <div>
    <Stepper steps={steps}></Stepper>
  </div>
);
