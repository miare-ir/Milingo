import * as React from 'react';
import { useState } from 'react';

import Modal from '../modal';

export interface ThumbnailProps {
  thumbnailSrc: string;
  originalSrc: string;
  thumbnailAlt?: string;
  originalAlt?: string;
}

const Thumbnail = (props: ThumbnailProps): JSX.Element => {
  const [isOpen, toggleModal] = useState<boolean>(false);

  return (
    <>
      <img
        src={props.thumbnailSrc}
        alt={props.thumbnailAlt}
        onClick={() => toggleModal(true)}
      />

      <Modal isOpen={isOpen} onClose={() => toggleModal(false)}>
        <img src={props.originalSrc} alt={props.originalAlt} />
      </Modal>
    </>
  );
};

export default Thumbnail;
