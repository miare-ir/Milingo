import * as React from 'react';

import { CollectionCard, Collection } from '.';

export default {
  title: 'Collection',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const All = () => (
  <div
    style={{
      width: '600px',
      height: '400px',
      maxWidth: '100%',
      backgroundColor: '#f2f3f5',
      padding: '30px',
      direction: 'rtl',
    }}>
    <Collection title="پیتزا">
      <CollectionCard footer={'۳۴۰۰ ریال'}>پیتزا پپرونی</CollectionCard>
      <CollectionCard footer={'۱۵۰۰ ریال'} hasSubset>
        پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط
        پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط
        پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط
        پیتزا مخلوط
      </CollectionCard>
      <CollectionCard footer={'۱۵۰۰ ریال'} disabled>
        پیتزا مارگاریتا
      </CollectionCard>
    </Collection>
  </div>
);
