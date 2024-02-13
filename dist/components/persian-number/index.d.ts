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
declare class PersianNumber extends React.Component<PersianNumberProps, {}> {
    static defaultProps: Partial<PersianNumberProps>;
    private static ARABIC_NUMBERS;
    private static ENGLISH_NUMBERS;
    private static PERSIAN_NUMBERS;
    static formatPrice(text: any, applyZeroForPrice: any): string;
    static formatTime(text: string | number): string;
    render(): React.ReactNode;
    private arabicToPersian;
    private englishToPersian;
    private applyFormats;
}
export default PersianNumber;
