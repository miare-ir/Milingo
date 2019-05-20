import * as React from 'react';
import * as classNames from 'classnames';

import CloseSvg from './close-generator';

import './styles.scss';

const warningIcon = require('../../assets/icon/notification-warning.svg');
const errorIcon = require('../../assets/icon/notification-error.svg');
const infoIcon = require('../../assets/icon/notification-hint.svg');
const successIcon = require('../../assets/icon/notification-success.svg');

const ICON_SELECTOR = {
  info: infoIcon,
  success: successIcon,
  error: errorIcon,
  warning: warningIcon,
};

export interface BannerProps extends React.HTMLProps<HTMLDivElement> {
  warning?: boolean;
  className?: string;
  show?: boolean;
  type?: 'error' | 'warning' | 'info' | 'success';
  onClose?: () => void;
}

const defaultProps: Partial<BannerProps> = {
  show: true,
  type: 'info',
};

const Banner: React.SFC<BannerProps> = ({
  className,
  show,
  warning,
  type,
  children,
  onClose,
  ...restOfProps
}: BannerProps) => {
  if (!show) {
    return null;
  }

  const componentClassName = classNames('banner-wrapper', className, {
    [type]: true,
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