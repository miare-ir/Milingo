import * as React from 'react';
import './styles.scss';
export interface BannerProps extends React.HTMLProps<HTMLDivElement> {
    className?: string;
    show?: boolean;
    type?: 'error' | 'warning' | 'info' | 'success';
    fullWidth?: boolean;
    onClose?: () => void;
}
declare const Banner: React.FC<BannerProps>;
export default Banner;
