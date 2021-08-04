import * as React from 'react';
import { useEffect, useState } from 'react';

import './styles.scss';

const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

export interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  styles?: React.CSSProperties;
  id?: string;
}

const Image = ({ src, alt, ...rest }: ImageProps): JSX.Element => {
  const [imageSrc, setImageSrc] = useState<string>(placeHolder);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>();

  const onLoad = (event): void => event.target.classList.add('image-loaded');

  const onError = (event): void =>
    event.target.classList.add('image-has-error');

  useEffect(() => {
    let observer;
    let didCancel = false;

    if (imageRef && imageSrc !== src) {
      if (IntersectionObserver) {
        observer = new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              if (
                !didCancel &&
                (entry.intersectionRatio > 0 || entry.isIntersecting)
              ) {
                setImageSrc(src);
                observer.unobserve(imageRef);
              }
            });
          },
          {
            threshold: 0.01,
            rootMargin: '75%',
          },
        );
        observer.observe(imageRef);
      } else {
        setImageSrc(src);
      }
    }
    return () => {
      didCancel = true;

      if (observer && observer.unobserve) {
        observer.unobserve(imageRef);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <img
      ref={setImageRef}
      src={imageSrc}
      alt={alt}
      onLoad={onLoad}
      onError={onError}
      {...rest}
    />
  );
};

export default Image;
