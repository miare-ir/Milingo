import React from 'react';
import './styles.scss';

export enum StepsStatus {
  ToDo = 0,
  Doing = 1,
  Done = 2,
}

export interface StepperProps {
  steps : {title:string , status:number}[];
}

const Stepper = (props: StepperProps): JSX.Element => {

  const getClassName = (stepStatus: number): string => {
    switch (stepStatus) {
      case StepsStatus.ToDo:
        return 'todo';
      case StepsStatus.Doing:
        return 'doing';
      case StepsStatus.Done:
        return 'done';
      default:
        return '';
    }
  };

  return (
    <div className="container">
      {props.steps.map((step, index) => (
        <div
          key={index}
          className={`step-container ${getClassName(step.status)}`}>
          <div className="step">{step.title}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Stepper;
