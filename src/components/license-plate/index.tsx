import * as React from 'react';

import * as classnames from 'classnames';

import Input from '../input';
import './styles.scss';

import iranFlag from '../../assets/icon/iran-flag.svg';
import iranPlateSign from '../../assets/icon/iran-plate-sign.svg';
import stripesPattern from '../../assets/patterns/stripes.svg';

type LicensePlateValue = [number, number?];

export interface LicensePlateProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onInput'> {
  editable?: boolean;
  oldStyle?: boolean;
  onInput?: (value: LicensePlateValue) => void;
  value?: LicensePlateValue;
}

const LicensePlate: React.FC<LicensePlateProps> = ({
  editable,
  onInput,
  value,
  oldStyle,
  className,
  ...rest
}: LicensePlateProps): JSX.Element => {
  const [plateNumberPartOneValue, setPlateNumberPartOneValue] = React.useState(
    oldStyle ? value?.[1] : value?.[0],
  );
  const [plateNumberPartTwoValue, setPlateNumberPartTwoValue] = React.useState(
    oldStyle ? value?.[0] : value?.[1],
  );

  const MAX_PLATE_NUMBER_LENGTH_PART_ONE = 3;
  const MAX_PLATE_NUMBER_LENGTH_PART_TWO = 5;

  const getPlateNumberPlaceholder = (length: number): string =>
    Array.from(Array(length))
      .map(() => '0')
      .join('');

  const getPlateNumberMaxValue = (length: number): number =>
    +Array.from(Array(length))
      .map(() => '9')
      .join('');

  const handlePlateNumberInput = (
    e: React.FormEvent<HTMLInputElement>,
    part: 'one' | 'two',
  ): void => {
    const inputValue = e.currentTarget.value;
    const maxLength =
      part === 'one'
        ? MAX_PLATE_NUMBER_LENGTH_PART_ONE
        : MAX_PLATE_NUMBER_LENGTH_PART_TWO;

    if (inputValue.length > maxLength) {
      return;
    }

    const accurateInputValue = inputValue ? +inputValue : null;

    if (part === 'one') {
      setPlateNumberPartOneValue(accurateInputValue);

      if (oldStyle) {
        onInput?.([plateNumberPartTwoValue, accurateInputValue]);
      } else {
        onInput?.([accurateInputValue, plateNumberPartTwoValue]);
      }
    } else {
      setPlateNumberPartTwoValue(accurateInputValue);

      if (oldStyle) {
        onInput?.([accurateInputValue, plateNumberPartOneValue]);
      } else {
        onInput?.([plateNumberPartOneValue, accurateInputValue]);
      }
    }
  };

  const ContainerClassNames = classnames('license-plate', {
    ['old-style']: oldStyle,
    [className]: !!className,
  });

  return (
    <div {...rest} className={ContainerClassNames}>
      <div className="top-section">
        {oldStyle ? (
          <span className="plate-city">
            <img src={stripesPattern} alt="Pattern" />
          </span>
        ) : (
          <div className="iran-flag">
            <img src={iranFlag} alt="Iran flag" className="flag" />
            <img
              src={iranPlateSign}
              alt="Iran plate sign"
              className="plate-sign"
            />
          </div>
        )}

        <Input
          placeholder={getPlateNumberPlaceholder(
            MAX_PLATE_NUMBER_LENGTH_PART_ONE,
          )}
          className="plate-number"
          max={getPlateNumberMaxValue(MAX_PLATE_NUMBER_LENGTH_PART_ONE)}
          onInput={e => handlePlateNumberInput(e, 'one')}
          disabled={!editable}
          value={plateNumberPartOneValue ?? undefined}
          type="number"
        />
      </div>

      <div className="bottom-section">
        <Input
          placeholder={getPlateNumberPlaceholder(
            MAX_PLATE_NUMBER_LENGTH_PART_TWO,
          )}
          className="plate-number"
          max={getPlateNumberMaxValue(MAX_PLATE_NUMBER_LENGTH_PART_TWO)}
          onInput={e => handlePlateNumberInput(e, 'two')}
          disabled={!editable}
          value={plateNumberPartTwoValue ?? undefined}
          type="number"
        />
      </div>
    </div>
  );
};

export default LicensePlate;
