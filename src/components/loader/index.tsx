import * as React from 'react';

import * as classNames from 'classnames';

import './styles.scss';

export interface LoaderProps {
  primary?: boolean;
  disabled?: boolean;
  danger?: boolean;
}

const Loader: React.FC<LoaderProps> = ({
  primary,
  danger,
  disabled,
}: LoaderProps) => {
  const className: string = classNames('spinner', {
    'spinner-primary': primary,
    'spinner-danger': danger,
    'spinner-disabled': disabled,
  });

  return <span className={className} />;
};

export default Loader;
