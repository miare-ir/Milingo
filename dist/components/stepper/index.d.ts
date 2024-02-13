import './styles.scss';
export declare enum StepsStatus {
    ToDo = 0,
    Doing = 1,
    Done = 2
}
export interface StepperProps {
    steps: {
        title: string;
        status: number;
    }[];
}
declare const Stepper: (props: StepperProps) => JSX.Element;
export default Stepper;
