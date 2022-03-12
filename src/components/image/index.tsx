import * as React from 'react';
import { useEffect, useState } from 'react';

import './styles.scss';

import Modal from '../modal';

const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=';

export interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  id?: string;
  thumbnailInfo?: {
    originalSrc: string;
    originalAlt?: string;
  };
  rest?: unknown;
}

const observerOptions = {
  threshold: 0.01,
  rootMargin: '75%',
};

const Image = ({
  src,
  alt,
  thumbnailInfo,
  ...rest
}: ImageProps): JSX.Element => {
  const [imageSrc, setImageSrc] = useState<string>(placeHolder);
  const [didCancel, setDidCancel] = useState<boolean>(false);
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>();
  const [isOpen, toggleModal] = useState<boolean>(false);

  let observer;

  const onLoad = (event): void => event.target.classList.add('image-loaded');

  const onError = (event): void =>
    event.target.classList.add('image-has-error');

  const hasImage = (): boolean => imageRef && imageSrc !== src;

  const unobserve = (): void => {
    if (observer && observer.unobserve) {
      observer.unobserve(imageRef);
    }
  };

  const observeImage = (): void => {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (
          !didCancel &&
          (entry.intersectionRatio > 0 || entry.isIntersecting)
        ) {
          setImageSrc(src);
          unobserve();
        }
      });
    }, observerOptions);
    observer.observe(imageRef);
  };

  const onImageClick = (): void => {
    if (thumbnailInfo.originalSrc) {
      return toggleModal(true);
    }
  };

  useEffect(() => {
    if (hasImage()) {
      if (IntersectionObserver) {
        observeImage();
      } else {
        setImageSrc(src);
      }
    }
    return () => {
      setDidCancel(true);
      unobserve();
    };
  }, [src, imageSrc, imageRef]);

  return (
    <>
      <img
        ref={setImageRef}
        src={imageSrc}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
        onClick={onImageClick}
        {...rest}
      />
      <Modal isOpen={isOpen} onClose={() => toggleModal(false)}>
        <img
          src={thumbnailInfo?.originalSrc}
          alt={thumbnailInfo?.originalAlt}
        />
      </Modal>
    </>
  );
};

export default Image;
