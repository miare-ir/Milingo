import * as React from 'react';
import './styles.scss';
export interface LoaderProps {
    primary?: boolean;
    disabled?: boolean;
    danger?: boolean;
}
declare const Loader: React.SFC<LoaderProps>;
export default Loader;
