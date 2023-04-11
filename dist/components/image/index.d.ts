import './styles.scss';
export interface ImageProps {
    src: string;
    alt?: string;
    className?: string;
    id?: string;
    thumbnailInfo?: {
        originalSrc?: string;
        originalAlt?: string;
    };
    rest?: unknown;
    loading?: 'lazy' | 'eager';
}
declare const Image: ({ src, alt, thumbnailInfo, ...rest }: ImageProps) => JSX.Element;
export default Image;
