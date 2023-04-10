import * as React from 'react';
import './styles.scss';
declare type LicensePlateValue = [number, number?];
export interface LicensePlateProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onInput'> {
    editable?: boolean;
    oldStyle?: boolean;
    onInput?: (value: LicensePlateValue) => void;
    value?: LicensePlateValue;
}
declare const LicensePlate: React.FC<LicensePlateProps>;
export default LicensePlate;
