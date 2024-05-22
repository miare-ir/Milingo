import './styles.scss';
export declare enum StepStatus {
    ToDo = 0,
    Doing = 1,
    Done = 2
}
export interface Step {
    title: string;
    status: number;
    onClick?: () => void;
}
export interface StepperProps {
    steps: Step[];
}
declare const Stepper: (props: StepperProps) => JSX.Element;
export default Stepper;
