import React from 'react';
import './styles.scss';

export enum StepsStatus {
  ToDo = 0,
  Doing = 1,
  Done = 2,
}

export interface StepperProps {
  steps: { title: string; status: number }[];
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

  const getStepIndex = (step): number => props.steps.indexOf(step);
  const isFirstStep = (step): boolean => getStepIndex(step) === 0;
  const isLastStep = (step): boolean =>
    getStepIndex(step) + 1 === props.steps.length;
  const isOnlyStep = (): boolean => props.steps.length === 1;

  const renderMobileStepper = (): JSX.Element => {
    const doingStep = props.steps.find(
      step => step.status === StepsStatus.Doing,
    );
    const doingStepIndex = getStepIndex(doingStep);
    const steps = props.steps.slice(doingStepIndex - 1, doingStepIndex + 2);
    return (
      <>
        {steps.map((step, index) => (
          <div
            className={`step-container not-in-desktop ${getClassName(
              step.status,
            )}`}
            key={index}>
            {!isFirstStep(step) && !isOnlyStep() && index === 0 && (
              <hr className="line" />
            )}
            <div className="step">{step.title}</div>
            {!isLastStep(step) && !isOnlyStep() && <hr className="line" />}
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="container">
      {props.steps.map((step, index) => (
        <div
          key={index}
          className={`step-container not-in-mobile ${getClassName(
            step.status,
          )}`}>
          <div className="step">{step.title}</div>
          {!isLastStep(index) && !isOnlyStep() && <hr className="line" />}
        </div>
      ))}
      {props.steps.length >= 3 && renderMobileStepper()}
    </div>
  );
};

export default Stepper;
