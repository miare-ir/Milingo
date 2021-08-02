import * as React from 'react';
import Modal from '.';
import Button from '../button';
import { useState } from 'react';
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

      <Modal onClose={() => setShowMediumModal(false)} show={showMediumModal}>
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

      {/* <div style={{marginTop:"2rem"}}> */}
      {/*  <Button danger onClick={() => setShowLargeModal(true)}>نشان دادن مدال بزرگ</Button>*/}

      {/*  <Modal onClose={() => setShowLargeModal(false)} show={showLargeModal} />*/}
      {/* </div> */}
    </div>
  );
};
