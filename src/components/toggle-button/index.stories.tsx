import * as React from 'react';
import ToggleButton from '.';

export default {
  title: 'ToggleButton',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Normal = (): JSX.Element => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <div>
        <ToggleButton
          name="normal-switch"
          label="درخواست خودکار"
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
        />
      </div>

      <div style={{ margin: '16px 0' }}>
        <ToggleButton
          name="checked-switch"
          label="درخواست خودکار غیرفعال"
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
          disabled
          id={'checked-switch'}
        />
      </div>

      <div>
        <ToggleButton
          name="checked-switch"
          label="درخواست خودکار لودینگ"
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
          loading
          id={'loading-switch'}
        />
      </div>
    </>
  );
};

export const Large = (): JSX.Element => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <div>
        <ToggleButton
          name="large-switch"
          label="درخواست خودکار"
          large
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
        />
      </div>

      <div style={{ margin: '16px 0' }}>
        <ToggleButton
          name="checked-switch"
          label="درخواست خودکار غیرفعال"
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
          disabled
          large
          id={'checked-switch'}
        />
      </div>

      <div>
        <ToggleButton
          name="checked-switch"
          label="درخواست خودکار لودینگ"
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
          loading
          large
          id={'loading-switch'}
        />
      </div>
    </>
  );
};
