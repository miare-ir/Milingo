import * as React from 'react';
export interface PersianNumberProps {
    value: string | number;
    className?: string;
    from?: string;
    includesPrice?: boolean;
    includesTime?: boolean;
    component?: string;
    currencyType?: string;
}
declare class PersianNumber extends React.Component<PersianNumberProps, {}> {
    static defaultProps: Partial<PersianNumberProps>;
    private static ARABIC_NUMBERS;
    private static ENGLISH_NUMBERS;
    private static PERSIAN_NUMBERS;
    private arabicToPersian;
    private englishToPersian;
    static formatPrice(text: any): string;
    static formatTime(text: string | number): string;
    private applyFormats;
    render(): React.ReactElement<{
        className: string;
    }>;
}
export default PersianNumber;
