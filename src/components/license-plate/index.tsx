import * as React from 'react';

import Input from '../input';

import iranFlag from '../../assets/icon/iran-flag.svg';
import iranPlateSign from '../../assets/icon/iran-plate-sign.svg';

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
    value?.[0],
  );
  const [plateNumberPartTwoValue, setPlateNumberPartTwoValue] = React.useState(
    value?.[1],
  );

  const plateNumberPartOneRef = React.useRef<HTMLInputElement>(null);
  const plateNumberPartTwoRef = React.useRef<HTMLInputElement>(null);

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
    if (inputValue.length >= MAX_PLATE_NUMBER_LENGTH_PART_ONE) {
      plateNumberPartTwoRef.current?.focus();
    }

    const accurateInputValue = inputValue ? +inputValue : null;
    setPlateNumberPartOneValue(accurateInputValue);
    onInput?.([accurateInputValue, plateNumberPartTwoValue]);
  };

  const handlePlateNumberPartTwoInput = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    const inputValue = e.currentTarget.value;
    if (inputValue.length > MAX_PLATE_NUMBER_LENGTH_PART_TWO) {
      return;
    }
    if (inputValue.length === 0) {
      plateNumberPartOneRef.current?.focus();
    }

    const accurateInputValue = inputValue ? +inputValue : null;
    setPlateNumberPartTwoValue(accurateInputValue);
    onInput?.([plateNumberPartOneValue, accurateInputValue]);
  };

  return (
    <div className="license-plate">
      <div className="top-section">
        <div className="iran-flag">
          <img src={iranFlag} alt="Iran flag" className="flag" />
          <img
            src={iranPlateSign}
            alt="Iran plate sign"
            className="plate-sign"
          />
        </div>

        <Input
          placeholder={getPlateNumberPlaceholder(
            MAX_PLATE_NUMBER_LENGTH_PART_ONE,
          )}
          className="plate-number"
          max={getPlateNumberMaxValue(MAX_PLATE_NUMBER_LENGTH_PART_ONE)}
          onInput={handlePlateNumberPartOneInput}
          htmlInputRef={plateNumberPartOneRef}
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
          htmlInputRef={plateNumberPartTwoRef}
          disabled={!editable}
          value={plateNumberPartTwoValue ?? undefined}
          type="number"
        />
      </div>
    </div>
  );
};

export default LicensePlate;
