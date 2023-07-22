import * as React from 'react';

import * as classnames from 'classnames';

import { Button } from '../..';
import './styles.scss';

export interface CountInputProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  min?: number;
  max?: number;
  value: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
  steps?: number;
}

const CountInput = React.forwardRef<HTMLDivElement, CountInputProps>(
  (
    {
      min = Number.MIN_SAFE_INTEGER,
      max = Number.MAX_SAFE_INTEGER,
      steps = 1,
      value,
      onChange,
      className,
      ...rest
    },
    ref,
  ) => {
    const classes = classnames('count-input', {
      [className]: !!className,
    });

    const handleChangeValue = (increase?: boolean) => () => {
      onChange(currentValue => {
        const newValue = increase ? currentValue + steps : currentValue - steps;
        return newValue <= max && newValue >= min ? newValue : currentValue;
      });
    };

    return (
      <div {...rest} ref={ref} className={classes}>
        <Button
          disabled={value <= min}
          primary
          className="action-button"
          onClick={handleChangeValue()}>
          <span className="material-icons button-icon">remove</span>
        </Button>

        <span className="value">{value}</span>

        <Button
          disabled={value >= max}
          primary
          className="action-button"
          onClick={handleChangeValue(true)}>
          <span className="material-icons button-icon">add</span>
        </Button>
      </div>
    );
  },
);

CountInput.displayName = 'CountInput';
export default CountInput;
