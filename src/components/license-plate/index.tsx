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
  const firstInputRef = React.useRef<HTMLInputElement>(null);
  const secondInputRef = React.useRef<HTMLInputElement>(null);

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
    const maxLength =
      part === 'one'
        ? oldStyle
          ? MAX_PLATE_NUMBER_LENGTH_PART_TWO
          : MAX_PLATE_NUMBER_LENGTH_PART_ONE
        : oldStyle
        ? MAX_PLATE_NUMBER_LENGTH_PART_ONE
        : MAX_PLATE_NUMBER_LENGTH_PART_TWO;

    const inputValue = e.currentTarget.value.substring(0, maxLength);
    e.currentTarget.value = inputValue;

    const accurateInputValue = inputValue ? +inputValue : null;

    if (part === 'one') {
      onInput?.([accurateInputValue, value?.[1]]);
    } else {
      onInput?.([value?.[0], accurateInputValue]);
    }
  };

  const ContainerClassNames = classnames('license-plate', {
    ['old-style']: oldStyle,
    [className]: !!className,
  });

  React.useEffect(() => {
    const { current: firstInput } = firstInputRef;
    const { current: secondInput } = secondInputRef;

    const firstValue = value?.[0]?.toString();
    const secondValue = value?.[1]?.toString();

    if (firstInput && secondInput) {
      firstInput.value = (oldStyle ? secondValue : firstValue) ?? '';
      secondInput.value = (oldStyle ? firstValue : secondValue) ?? '';
    }
  }, [value?.[0], value?.[1]]);

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
          onInput={e => handlePlateNumberInput(e, oldStyle ? 'two' : 'one')}
          disabled={!editable}
          type="number"
          tabIndex={oldStyle ? 2 : 1}
          inputRef={firstInputRef}
        />
      </div>

      <div className="bottom-section">
        <Input
          placeholder={getPlateNumberPlaceholder(
            MAX_PLATE_NUMBER_LENGTH_PART_TWO,
          )}
          className="plate-number"
          max={getPlateNumberMaxValue(MAX_PLATE_NUMBER_LENGTH_PART_TWO)}
          onInput={e => handlePlateNumberInput(e, oldStyle ? 'one' : 'two')}
          disabled={!editable}
          type="number"
          tabIndex={oldStyle ? 1 : 2}
          inputRef={secondInputRef}
        />
      </div>
    </div>
  );
};

export default LicensePlate;
