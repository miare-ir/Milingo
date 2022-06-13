import * as React from 'react';
import { useState } from 'react';

import './styles.scss';

import Modal from '../modal';

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
  loading?: 'lazy' | 'eager';
}

const Image = ({
  src,
  alt,
  thumbnailInfo,
  ...rest
}: ImageProps): JSX.Element => {
  const [isOpen, toggleModal] = useState<boolean>(false);

  const onLoad = (event): void => event.target.classList.add('image-loaded');

  const onError = (event): void =>
    event.target.classList.add('image-has-error');

  const onImageClick = (): void => {
    if (thumbnailInfo.originalSrc) {
      return toggleModal(true);
    }
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
        onClick={onImageClick}
        loading="lazy"
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
