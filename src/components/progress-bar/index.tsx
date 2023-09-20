import React, { FC, HTMLAttributes, ReactNode } from 'react';

import * as classnames from 'classnames';

import './styles.scss';

export interface ProgressBarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  range: [number, number];
  current: number;
  title?: ReactNode;
  secondaryMode?: boolean;
}

export const ProgressBar: FC<ProgressBarProps> = ({
  range,
  current,
  title,
  secondaryMode,
  ...rest
}) => {
  const min = range[0];
  const max = range[1];

  const classes = classnames('progress-bar-container', {
    [rest.className ?? '']: !!rest.className,
    'secondary-mode': !!secondaryMode,
  });

  const getIndicatorWidth = (): number => ((current - min) / (max - min)) * 100;

  return (
    <div className={classes}>
      {title && <div className="title">{title}</div>}

      <div className="progress-bar">
        <div
          className="indicators"
          style={{ width: `${getIndicatorWidth()}%` }}>
          <span className="primary-indicator" />
          <span className="secondary-indicator" />
        </div>
      </div>

      <div className="footer">
        <p className="value">{min}</p>
        <p className="value">{max}</p>
      </div>
    </div>
  );
};
