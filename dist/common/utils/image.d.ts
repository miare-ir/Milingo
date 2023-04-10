declare type ResizeOptions = {
    newSizeOrScale: number;
    sizeOrScale: 'size' | 'scale';
    target: 'width' | 'height';
};
declare type ImageSizes = {
    width: number;
    height: number;
};
declare class Img {
    static resize: (image: string | File, scaleOrCustom?: ResizeOptions, onError?: (error?: Error | ProgressEvent<FileReader>) => void) => Promise<string>;
    static decreaseToFixedWeight: (image: string | File, maxSize: number, decreaseSteps?: number, fileName?: string) => Promise<{
        image: string;
        file: File;
    }>;
    static toBase64: (imageFile: File, onError?: (error: ProgressEvent<FileReader>) => void) => Promise<string>;
    static base64ToImage: (base64: string, onError?: (error?: Error) => void) => Promise<HTMLImageElement>;
    static base64ToFile: (base64: string, fileName: string) => Promise<File>;
    static getSizes: (image: string | File, onError?: (error?: Error | ProgressEvent<FileReader>) => void) => Promise<ImageSizes>;
    private static calculateSize;
}
export default Img;
