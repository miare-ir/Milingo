import * as React from 'react';
import './styles.scss';
export interface PointerProps extends React.HTMLAttributes<HTMLSpanElement> {
    size?: 'small' | 'normal' | 'large';
}
declare const Pointer: React.FC<PointerProps>;
export default Pointer;
