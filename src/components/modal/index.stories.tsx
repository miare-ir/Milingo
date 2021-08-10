import * as React from 'react';
import { useState } from 'react';
import Modal from '.';
import Button from '../button';
import DialogContent from '../dialog-content';

export default {
  title: 'Modal',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const All = (): JSX.Element => {
  const [showMediumModal, setShowMediumModal] = useState<boolean>(false);

  return (
    <div style={{ width: '350px', maxWidth: '100%' }}>
      <Button primary onClick={() => setShowMediumModal(true)}>
        نشان دادن مدال
      </Button>

      <Modal onClose={() => setShowMediumModal(false)} isOpen={showMediumModal}>
        <DialogContent
          primary
          title="عنوان"
          actions={[
            <Button
              key="primary"
              small
              primary
              onClick={() => setShowMediumModal(false)}>
              ثبت
            </Button>,
            <Button
              key="secondary"
              small
              onClick={() => setShowMediumModal(false)}>
              انصراف
            </Button>,
          ]}>
          <p>توضیحات</p>
        </DialogContent>
      </Modal>
    </div>
  );
};
