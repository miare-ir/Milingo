import * as React from 'react';

import * as classnames from 'classnames';

import Input from '../input';

import iranFlag from '../../assets/icon/iran-flag.svg';
import iranPlateSign from '../../assets/icon/iran-plate-sign.svg';
import stripesPattern from '../../assets/patterns/stripes.svg';

import './styles.scss';

type LicensePlateValue = [number, number?];

export interface LicensePlateProps {
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

  const handlePlateNumberPartOneInput = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    const inputValue = e.currentTarget.value;
    if (inputValue.length > MAX_PLATE_NUMBER_LENGTH_PART_ONE) {
      return;
    }

    const accurateInputValue = inputValue ? +inputValue : null;
    setPlateNumberPartOneValue(accurateInputValue);
    if (oldStyle) {
      onInput?.([plateNumberPartTwoValue, accurateInputValue]);
    } else {
      onInput?.([accurateInputValue, plateNumberPartTwoValue]);
    }
  };

  const handlePlateNumberPartTwoInput = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    const inputValue = e.currentTarget.value;
    if (inputValue.length > MAX_PLATE_NUMBER_LENGTH_PART_TWO) {
      return;
    }

    const accurateInputValue = inputValue ? +inputValue : null;
    setPlateNumberPartTwoValue(accurateInputValue);

    if (oldStyle) {
      onInput?.([accurateInputValue, plateNumberPartOneValue]);
    } else {
      onInput?.([plateNumberPartOneValue, accurateInputValue]);
    }
  };

  const ContainerClassNames = classnames('license-plate', {
    ['old-style']: oldStyle,
  });

  return (
    <div className={ContainerClassNames}>
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
          onInput={handlePlateNumberPartOneInput}
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
          onInput={handlePlateNumberPartTwoInput}
          disabled={!editable}
          value={plateNumberPartTwoValue ?? undefined}
          type="number"
        />
      </div>
    </div>
  );
};

export default LicensePlate;
