import * as React from 'react';
import './styles.scss';
export interface CountInputProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    min?: number;
    max?: number;
    value: number;
    onChange: React.Dispatch<React.SetStateAction<number>>;
    steps?: number;
}
declare const CountInput: React.ForwardRefExoticComponent<CountInputProps & React.RefAttributes<HTMLDivElement>>;
export default CountInput;
