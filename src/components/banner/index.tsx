import * as React from 'react';
import * as classNames from 'classnames';

import CloseSvg from './close-generator';

import './styles.scss';

import warningIcon from '../../assets/icon/notification-warning.svg';
import errorIcon from '../../assets/icon/notification-error.svg';
import infoIcon from '../../assets/icon/notification-hint.svg';
import successIcon from '../../assets/icon/notification-success.svg';

const ICON_SELECTOR = {
  info: infoIcon,
  success: successIcon,
  error: errorIcon,
  warning: warningIcon,
};

export interface BannerProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  show?: boolean;
  type?: 'error' | 'warning' | 'info' | 'success';
  fullWidth?: boolean;
  onClose?: () => void;
}

const defaultProps: Partial<BannerProps> = {
  show: true,
  type: 'info',
};

const Banner: React.SFC<BannerProps> = ({
  className,
  show,
  type,
  children,
  onClose,
  fullWidth,
  ...restOfProps
}: BannerProps) => {
  if (!show) {
    return null;
  }

  const componentClassName = classNames('banner-wrapper', className, {
    [type]: true,
    'full-width': fullWidth,
  });

  return (
    <div className={componentClassName} {...restOfProps}>
      <div className="icon">
        <img src={ICON_SELECTOR[type]} />
      </div>
      <div className="content">{children}</div>
      {onClose && (
        <div className="dismissal" onClick={() => onClose()}>
          <CloseSvg type={type} />
        </div>
      )}
    </div>
  );
};

Banner.defaultProps = defaultProps;

export default Banner;
