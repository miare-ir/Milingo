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
          label="تاگل باتن فعال"
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
        />
      </div>

      <div style={{ margin: '16px 0' }}>
        <ToggleButton
          name="checked-switch"
          label="تاگل باتن غیرفعال"
          onToggle={null}
          checked={false}
          disabled
          id={'checked-switch'}
        />
      </div>

      <div>
        <ToggleButton
          name="checked-switch"
          label="تاگل باتن لودینگ"
          onToggle={null}
          checked={false}
          loading
          id={'loading-switch'}
        />
      </div>

      <div style={{ margin: '16px 0' }}>
        <ToggleButton
          name="checked-switch"
          label="تاگل باتن چک شده در لودینگ"
          onToggle={null}
          checked
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
          label="تاگل باتن فعال"
          large
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
        />
      </div>

      <div style={{ margin: '16px 0' }}>
        <ToggleButton
          name="checked-switch"
          label="تاگل باتن غیرفعال"
          onToggle={null}
          checked={false}
          disabled
          large
          id={'checked-switch'}
        />
      </div>

      <div>
        <ToggleButton
          name="checked-switch"
          label="تاگل باتن لودینگ"
          onToggle={null}
          checked={false}
          loading
          large
          id={'loading-switch'}
        />
      </div>

      <div style={{ margin: '16px 0' }}>
        <ToggleButton
          name="checked-switch"
          label="تاگل باتن چک شده در لودینگ"
          onToggle={null}
          checked
          loading
          large
          id={'loading-switch'}
        />
      </div>
    </>
  );
};
