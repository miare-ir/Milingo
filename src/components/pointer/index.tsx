import * as React from 'react';

import * as classnames from 'classnames';

import './styles.scss';

export interface PointerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'small' | 'normal' | 'large';
}

const Pointer: React.FC<PointerProps> = ({
  size = 'normal',
  className,
  ...rest
}) => {
  const classes = classnames('milingo-pointer', {
    [className]: !!className,
    [size]: true,
  });

  return <span {...rest} className={classes} />;
};

export default Pointer;
