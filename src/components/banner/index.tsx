import * as React from 'react';
import * as classNames from 'classnames';

import CloseSvg from './close-generator';

import './styles.scss';

import warningIcon from '../../assets/icon/notification-warning.svg';
import errorIcon from '../../assets/icon/notification-error.svg';
import infoIcon from '../../assets/icon/notification-hint.svg';
import successIcon from '../../assets/icon/notification-success.svg';

import whiteWarningIcon from '../../assets/icon/notification-warning-white.svg';
import whiteErrorIcon from '../../assets/icon/notification-error-white.svg';
import whiteInfoIcon from '../../assets/icon/notification-hint-white.svg';
import whiteSuccessIcon from '../../assets/icon/notification-success-white.svg';

const ICON_SELECTOR = {
  info: infoIcon,
  success: successIcon,
  error: errorIcon,
  warning: warningIcon,
};

const DARK_ICON_SELECTOR = {
  info: whiteInfoIcon,
  success: whiteSuccessIcon,
  error: whiteErrorIcon,
  warning: whiteWarningIcon,
};

export interface BannerProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  show?: boolean;
  type?: 'error' | 'warning' | 'info' | 'success';
  fullWidth?: boolean;
  dark?: boolean;
  header?: string;
  onClose?: () => void;
}

const defaultProps: Partial<BannerProps> = {
  show: true,
  type: 'info',
};

const Banner: React.FC<BannerProps> = ({
  className,
  show,
  type,
  children,
  onClose,
  fullWidth,
  dark,
  header,
  ...restOfProps
}: BannerProps) => {
  if (!show) {
    return null;
  }

  const componentClassName = classNames('banner-wrapper', className, {
    [type]: true,
    'full-width': fullWidth,
    dark: dark,
    header: header,
  });

  return (
    <div className={componentClassName} {...restOfProps}>
      <div className="icon">
        <img src={dark ? DARK_ICON_SELECTOR[type] : ICON_SELECTOR[type]} />
        {header && <p>{header}</p>}
        {header && onClose && (
          <div className="dismissal" onClick={() => onClose()}>
            <CloseSvg type={type} dark={dark} />
          </div>
        )}
      </div>
      <div className="content">{children}</div>
      {onClose && !header && (
        <div className="dismissal" onClick={() => onClose()}>
          <CloseSvg type={type} dark={dark} />
        </div>
      )}
    </div>
  );
};

Banner.defaultProps = defaultProps;

export default Banner;
