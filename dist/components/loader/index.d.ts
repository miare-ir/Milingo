import * as React from 'react';
import './styles.scss';
export interface LoaderProps {
    primary?: boolean;
    disabled?: boolean;
    danger?: boolean;
}
declare const Loader: React.FC<LoaderProps>;
export default Loader;
