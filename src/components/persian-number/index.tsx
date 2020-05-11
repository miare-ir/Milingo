import * as React from 'react';

export interface PersianNumberProps {
  value: string | number;
  className?: string;
  from?: string;
  includesPrice?: boolean;
  includesTime?: boolean;
  component?: string;
  currencyType?: string;
  applyZeroForPrice?: boolean;
}

class PersianNumber extends React.Component<PersianNumberProps, {}> {
  public static defaultProps: Partial<PersianNumberProps> = {
    from: 'english',
    className: '',
  };

  private static ARABIC_NUMBERS: string[] = [
    '١',
    '٢',
    '٣',
    '٤',
    '٥',
    '٦',
    '٧',
    '٨',
    '٩',
    '٠',
  ];

  private static ENGLISH_NUMBERS: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
  ];

  private static PERSIAN_NUMBERS: string[] = [
    '۱',
    '۲',
    '۳',
    '۴',
    '۵',
    '۶',
    '۷',
    '۸',
    '۹',
    '۰',
  ];

  private arabicToPersian(input: string | number): string {
    input = input.toString();

    for (let i = 0, j = PersianNumber.ARABIC_NUMBERS.length; i < j; i++) {
      input = input.replace(
        new RegExp(PersianNumber.ARABIC_NUMBERS[i], 'g'),
        PersianNumber.PERSIAN_NUMBERS[i],
      );
    }
    return input;
  }

  private englishToPersian(input: string | number): string {
    input = input.toString();

    for (let i = 0, j = PersianNumber.ENGLISH_NUMBERS.length; i < j; i++) {
      input = input.replace(
        new RegExp(PersianNumber.ENGLISH_NUMBERS[i], 'g'),
        PersianNumber.PERSIAN_NUMBERS[i],
      );
    }
    return input;
  }

  static formatPrice(text, applyZeroForPrice): string {
    text = text + '';
    let result: string = text;

    const prices = (text.match(/[0-9]+/g) || []).map((price: string) => {
      price = price.trim();
      const leftPad = 3 - ((price.length + (applyZeroForPrice ? 1 : 0)) % 3);
      if (leftPad !== 3) {
        for (let i = 0; i < leftPad; i++) {
          price = ' ' + price;
        }
      }

      const tmp: string[] = [];
      for (let i = 0, j = 3; j <= price.length + 1; i += 3, j += 3) {
        tmp.push(price.slice(i, j));
      }

      return [price.trim(), tmp.join('٫').trim()];
    });

    prices.forEach(([original, formatted], i) => {
      if (original !== '0' && applyZeroForPrice) {
        result = result.replace(original, formatted + '0');
      } else {
        result = result.replace(original, formatted);
      }
    });

    return result;
  }

  static formatTime(text: string | number): string {
    if (`${text}`.length === 1) {
      return '0' + text;
    }

    return `${text}`;
  }

  private applyFormats(): string {
    if (this.props.includesPrice) {
      return PersianNumber.formatPrice(
        this.props.value,
        this.props.applyZeroForPrice,
      );
    }

    if (this.props.includesTime) {
      return PersianNumber.formatTime(this.props.value);
    }

    return this.props.value + '';
  }

  render() {
    const { className, component, currencyType, from } = this.props;
    const value: string = this.applyFormats();
    let convertedValue: string =
      from === 'arabic'
        ? this.arabicToPersian(value)
        : this.englishToPersian(value);

    if (currencyType) {
      convertedValue = `${convertedValue} ${currencyType}`;
    }

    return React.createElement(
      component || 'span',
      { className },
      convertedValue,
    );
  }
}

export default PersianNumber;
