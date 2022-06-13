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
          label="سلام دنیا"
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
        />
      </div>

      <div style={{ margin: '16px 0' }}>
        <ToggleButton
          name="checked-switch"
          label="سلام دنیا"
          onToggle={null}
          checked={false}
          disabled
          id={'checked-switch'}
        />
      </div>

      <div>
        <ToggleButton
          name="checked-switch"
          label="سلام دنیا"
          onToggle={null}
          checked={false}
          loading
          id={'loading-switch'}
        />
      </div>

      <div style={{ margin: '16px 0' }}>
        <ToggleButton
          name="checked-switch"
          label="سلام دنیا"
          onToggle={null}
          checked
          loading
          id={'loading-switch'}
        />
      </div>

      <div>
        <ToggleButton
          name="ltr-switch"
          label="سلام دنیا"
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
          ltr={true}
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
          label="سلام دنیا"
          large
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
        />
      </div>

      <div style={{ margin: '16px 0' }}>
        <ToggleButton
          name="checked-switch"
          label="سلام دنیا"
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
          label="سلام دنیا"
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
          label="سلام دنیا"
          onToggle={null}
          checked
          loading
          large
          id={'loading-switch'}
        />
      </div>

      <div>
        <ToggleButton
          name="large-ltr-switch"
          label="سلام دنیا"
          large
          onToggle={() => setToggle(!toggle)}
          checked={toggle}
          ltr={true}
        />
      </div>
    </>
  );
};
