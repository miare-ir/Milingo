import * as React from 'react';

import Button from '../button';
import DialogContent from '../dialog-content';
import Modal from '../modal';

export interface UploadHintProps {
  children?: React.ReactNode;
  title?: string;
  cancelText?: string;
  selectText?: string;
  isHintModalOpen: boolean;
  setIsHintModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onSelect: () => void;
}

const UploadHint: React.FC<UploadHintProps> = ({
  children,
  title,
  cancelText,
  selectText,
  isHintModalOpen,
  setIsHintModalOpen,
  onSelect,
}: UploadHintProps): JSX.Element => (
  <Modal
    overlayClassName="file-input-hint-overlay"
    isOpen={isHintModalOpen}
    className="file-input-hint"
    onClose={() => setIsHintModalOpen(false)}>
    <DialogContent
      title={title}
      primary
      actions={[
        <Button primary small key={0} onClick={onSelect}>
          {selectText ?? 'انتخاب عکس'}
        </Button>,
        <Button ghost small key={1} onClick={() => setIsHintModalOpen(false)}>
          {cancelText ?? 'انصراف'}
        </Button>,
      ]}>
      <>{children}</>
    </DialogContent>
  </Modal>
);

export default UploadHint;
