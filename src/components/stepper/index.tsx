import * as React from 'react';
import './styles.scss';

export enum StepStatus {
  ToDo ,
  Doing ,
  Done ,
}

export interface Step { title: string; status: number }
export interface StepperProps {
  steps: Step[];
}

const Stepper = (props: StepperProps): JSX.Element => {
  const getClassName = (status: StepStatus): string => Object.values(StepStatus)[status].toString().toLowerCase();
  const getStepIndex = (step:Step): number => props?.steps?.indexOf(step);
  const isFirstStep = (step:Step): boolean => getStepIndex(step) === 0;
  const isLastStep = (step:Step): boolean =>
    getStepIndex(step) + 1 === props?.steps?.length;
  const isSingleStep = (): boolean => props?.steps?.length === 1;

  const renderMobileStepper = (): JSX.Element => {
    const doingStep = props?.steps?.find(
      step => step.status === StepStatus.Doing,
    );
    const doingStepIndex = getStepIndex(doingStep);
    const steps =
      props?.steps && !isLastStep(doingStep) && !isFirstStep(doingStep)
        ? props.steps.slice(doingStepIndex - 1, doingStepIndex + 2)
        : isFirstStep(doingStep)
        ? props.steps.slice(doingStepIndex, doingStepIndex + 3)
        : isLastStep(doingStep) &&
          props.steps.slice(doingStepIndex - 2, doingStepIndex + 1);

    const isMoreThanThreeSteps = props?.steps?.length > 3;

    return (
      <>
        {isMoreThanThreeSteps
          ? steps.map((step, index) => (
              <div
                className={`step-container hide-on-desktop ${getClassName(
                  step.status,
                )}`}
                key={index}>
                {index === 0 && !isFirstStep(step) && (
                  <hr
                    className={`line start-line ${getClassName(
                      props?.steps[getStepIndex(step) - 1]?.status,
                    )}`}
                  />
                )}
                <div className="step">{step.title}</div>
                {!isLastStep(step) && (
                  <hr
                    className={`line ${
                      index === steps.length - 1 && 'end-line'
                    }`}
                  />
                )}
              </div>
            ))
          : !isMoreThanThreeSteps &&
            props?.steps?.map((step, index) => (
              <div
                key={index}
                className={`step-container  hide-on-desktop ${getClassName(
                  step.status,
                )}`}>
                <div className="step">{step.title}</div>
                {!isLastStep(step) && !isSingleStep() && <hr className="line" />}
              </div>
            ))}
      </>
    );
  };

  return (
    <div className="stepper-container ">
      {props?.steps?.map((step, index) => (
        <div
          key={index}
          className={`step-container ${getClassName(
            step.status,
          )} hide-on-mobile`}>
          <div className="step">{step.title}</div>
          {!isLastStep(step) && !isSingleStep() && <hr className="line" />}
        </div>
      ))}
      {renderMobileStepper()}
    </div>
  );
};

export default Stepper;
