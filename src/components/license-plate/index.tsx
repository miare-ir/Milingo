import * as React from 'react';

import Input from '../input';

import iranFlag from '../../assets/icon/iran-flag.svg';
import iranPlateSign from '../../assets/icon/iran-plate-sign.svg';

import './styles.scss';

type LicensePlateValue = [number, number?];

export interface LicensePlateProps {
  editable?: boolean;
  onInput?: (value: LicensePlateValue) => void;
  value?: LicensePlateValue;
}

const LicensePlate: React.FC<LicensePlateProps> = ({
  editable,
  onInput,
  value,
}: LicensePlateProps): JSX.Element => {
  const [
    plateNumberSectionOneValue,
    setPlateNumberSectionOneValue,
  ] = React.useState(value?.[0]);
  const [
    plateNumberSectionTwoValue,
    setPlateNumberSectionTwoValue,
  ] = React.useState(value?.[1]);

  const plateNumberSectionOneRef = React.useRef<HTMLInputElement>(null);
  const plateNumberSectionTwoRef = React.useRef<HTMLInputElement>(null);

  const MAX_PLATE_NUMBER_LENGTH_SECTION_ONE = 3;
  const MAX_PLATE_NUMBER_LENGTH_SECTION_TWO = 5;

  const getPlateNumberPlaceholder = (length: number): string =>
    Array.from(Array(length))
      .map(() => '0')
      .join('');

  const getPlateNumberMaxValue = (length: number): number =>
    +Array.from(Array(length))
      .map(() => '9')
      .join('');

  const handlePlateNumberSectionOneInput = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    const inputValue = e.currentTarget.value;
    if (inputValue.length > MAX_PLATE_NUMBER_LENGTH_SECTION_ONE) {
      return;
    }
    if (inputValue.length >= MAX_PLATE_NUMBER_LENGTH_SECTION_ONE) {
      plateNumberSectionTwoRef.current?.focus();
    }

    const accurateInputValue = inputValue ? +inputValue : null;
    setPlateNumberSectionOneValue(accurateInputValue);
    onInput?.([accurateInputValue, plateNumberSectionTwoValue]);
  };

  const handlePlateNumberSectionTwoInput = (
    e: React.FormEvent<HTMLInputElement>,
  ): void => {
    const inputValue = e.currentTarget.value;
    if (inputValue.length > MAX_PLATE_NUMBER_LENGTH_SECTION_TWO) {
      return;
    }
    if (inputValue.length === 0) {
      plateNumberSectionOneRef.current?.focus();
    }

    const accurateInputValue = inputValue ? +inputValue : null;
    setPlateNumberSectionTwoValue(accurateInputValue);
    onInput?.([plateNumberSectionOneValue, accurateInputValue]);
  };

  return (
    <div className="license-plate">
      <div className="iran-flag">
        <img src={iranFlag} alt="Iran flag" className="flag" />
        <img src={iranPlateSign} alt="Iran plate sign" className="plate-sign" />
      </div>

      <Input
        placeholder={getPlateNumberPlaceholder(
          MAX_PLATE_NUMBER_LENGTH_SECTION_ONE,
        )}
        className="plate-number section-1"
        max={getPlateNumberMaxValue(MAX_PLATE_NUMBER_LENGTH_SECTION_ONE)}
        onInput={handlePlateNumberSectionOneInput}
        htmlInputRef={plateNumberSectionOneRef}
        disabled={!editable}
        value={plateNumberSectionOneValue ?? undefined}
        type="number"
      />
      <Input
        placeholder={getPlateNumberPlaceholder(
          MAX_PLATE_NUMBER_LENGTH_SECTION_TWO,
        )}
        className="plate-number section-2"
        max={getPlateNumberMaxValue(MAX_PLATE_NUMBER_LENGTH_SECTION_TWO)}
        onInput={handlePlateNumberSectionTwoInput}
        htmlInputRef={plateNumberSectionTwoRef}
        disabled={!editable}
        value={plateNumberSectionTwoValue ?? undefined}
        type="number"
      />
    </div>
  );
};

export default LicensePlate;
