type ResizeOptions = {
    newSizeOrScale: number;
    sizeOrScale: 'size' | 'scale';
    target: 'width' | 'height';
};
type ImageSizes = {
    width: number;
    height: number;
};
declare class Img {
    static resize: (image: File | string, scaleOrCustom?: ResizeOptions, onError?: (error?: ProgressEvent<FileReader> | Error) => void) => Promise<string>;
    static decreaseToFixedWeight: (image: File | string, maxSize: number, decreaseSteps?: number, fileName?: string) => Promise<{
        image: string;
        file: File;
    }>;
    static toBase64: (imageFile: File, onError?: (error: ProgressEvent<FileReader>) => void) => Promise<string>;
    static base64ToImage: (base64: string, onError?: (error?: Error) => void) => Promise<HTMLImageElement | null>;
    static base64ToFile: (base64: string, fileName: string) => Promise<File>;
    static getSizes: (image: File | string, onError?: (error?: Error | undefined | ProgressEvent<FileReader>) => void) => Promise<ImageSizes>;
    private static calculateSize;
}
export default Img;
