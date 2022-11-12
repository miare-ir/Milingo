type ResizeOptions = {
  newSizeOrScale: number;
  sizeOrScale: 'size' | 'scale';
  target: 'width' | 'height';
};

type ImageSizes = {
  width: number;
  height: number;
};

class Img {
  static resize = async (
    image: File | string,
    scaleOrCustom: ResizeOptions = {
      newSizeOrScale: 0.5,
      sizeOrScale: 'scale',
      target: 'width',
    },
    onError?: (error?: ProgressEvent<FileReader> | Error) => void,
  ): Promise<string> => {
    const resize = async (): Promise<string | null> =>
      // eslint-disable-next-line no-async-promise-executor
      new Promise(async (resolve, reject) => {
        const _image =
          typeof image === 'string' ? image : await Img.toBase64(image, reject);
        if (!_image) {
          return null;
        }

        const sizes = await Img.getSizes(_image, reject);
        if (!sizes) {
          return;
        }

        const { width: defaultWidth, height: defaultHeight } = sizes;
        const { width: newWidth, height: newHeight } = Img.calculateSize(
          defaultWidth,
          defaultHeight,
          scaleOrCustom,
        );
        const canvas = document.createElement('canvas');

        canvas.width = newWidth;
        canvas.height = newHeight;

        const context = canvas.getContext('2d');
        if (!context) {
          return;
        }

        const img = await Img.base64ToImage(_image, reject);
        if (!img) {
          return;
        }

        context.drawImage(img, 0, 0, newWidth, newHeight);
        resolve(canvas.toDataURL());
      });

    try {
      return await resize();
    } catch (error) {
      onError?.(error as ProgressEvent<FileReader> | Error);
      return null;
    }
  };

  static decreaseToFixedWeight = async (
    image: File | string,
    maxSize: number,
    decreaseSteps?: number,
    fileName?: string,
  ): Promise<{ image: string; file: File }> => {
    const isFile = typeof image !== 'string';
    const { width } = await Img.getSizes(image);
    decreaseSteps = decreaseSteps || 100;

    if (isFile && !fileName) {
      fileName = ((image as unknown) as File).name;
    }

    const originalFile = isFile
      ? image
      : await Img.base64ToFile((image as unknown) as string, fileName);

    if (((originalFile as unknown) as File).size <= maxSize) {
      return {
        image: ((isFile
          ? await Img.toBase64((image as unknown) as File)
          : image) as unknown) as string,
        file: (originalFile as unknown) as File,
      };
    }

    const compressedBase64 = await Img.resize(image, {
      newSizeOrScale: width - decreaseSteps,
      sizeOrScale: 'size',
      target: 'width',
    });

    const compressedFile = await Img.base64ToFile(compressedBase64, fileName);

    if (compressedFile.size > maxSize) {
      return Img.decreaseToFixedWeight(
        compressedBase64,
        maxSize,
        decreaseSteps,
        fileName,
      );
    }

    return {
      image: compressedBase64,
      file: compressedFile,
    };
  };

  static toBase64 = async (
    imageFile: File,
    onError?: (error: ProgressEvent<FileReader>) => void,
  ): Promise<string> => {
    const toBase64 = (): Promise<string | null> =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onload = () => resolve(reader.result as string | null);
        reader.onerror = reject;
      });

    try {
      return await toBase64();
    } catch (error) {
      onError?.(error as ProgressEvent<FileReader>);
      return null;
    }
  };

  static base64ToImage = async (
    base64: string,
    onError?: (error?: Error) => void,
  ): Promise<HTMLImageElement | null> => {
    const getImage = (): Promise<HTMLImageElement | null> =>
      new Promise((resolve, reject) => {
        const image = new Image();
        image.src = base64;
        image.onload = () => resolve(image);
        image.onerror = (_0, _1, _2, _3, error) => reject(error);
      });

    try {
      return await getImage();
    } catch (error) {
      onError?.(error as Error | undefined);
      return null;
    }
  };

  static base64ToFile = async (
    base64: string,
    fileName: string,
  ): Promise<File> => {
    const res: Response = await fetch(base64);
    const blob: Blob = await res.blob();
    return new File([blob], fileName, { type: 'image/png' });
  };

  static getSizes = async (
    image: File | string,
    onError?: (error?: Error | undefined | ProgressEvent<FileReader>) => void,
  ): Promise<ImageSizes> => {
    const base64Image =
      typeof image === 'string' ? image : await Img.toBase64(image, onError);
    if (!base64Image) {
      return null;
    }

    const getSizes = (): Promise<ImageSizes | null> =>
      new Promise(function (resolve, reject) {
        const newImage = new Image();
        newImage.onload = () => resolve(newImage);
        newImage.onerror = (_0, _1, _2, _3, error) => reject(error);
        newImage.src = base64Image;
      });

    try {
      return await getSizes();
    } catch (error) {
      onError?.(error as Error | undefined);
      return null;
    }
  };

  private static calculateSize = (
    defaultWidth: number,
    defaultHeight: number,
    scaleOrCustom: ResizeOptions,
  ): ImageSizes => {
    const { newSizeOrScale, sizeOrScale, target } = scaleOrCustom;
    let width = defaultWidth;
    let height = defaultHeight;

    switch (sizeOrScale) {
      case 'scale': {
        width = defaultWidth / newSizeOrScale;
        height = defaultHeight / newSizeOrScale;
        break;
      }

      case 'size': {
        if (target === 'width') {
          if (defaultWidth > newSizeOrScale) {
            width = newSizeOrScale;
            height = (defaultHeight * newSizeOrScale) / defaultWidth;
          }
        } else {
          if (defaultHeight > newSizeOrScale) {
            height = newSizeOrScale;
            width = (defaultWidth * newSizeOrScale) / defaultHeight;
          }
        }
        break;
      }
    }

    return { width, height };
  };
}

export default Img;
