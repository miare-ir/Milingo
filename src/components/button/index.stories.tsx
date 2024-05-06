import * as React from 'react';
import Button from '.';

import './styles.stories.scss';
import Checkbox from '../checkbox';

export default {
  title: 'Button',
  decorators: [story => <div className="story-container">{story()}</div>],
};

export const Primary = () => (
  <div>
    <Button primary>سلام دنیا</Button>
    <Button primary disabled>
      سلام دنیا
    </Button>
  </div>
);

export const Danger = () => (
  <div>
    <Button danger>سلام دنیا</Button>
    <Button danger disabled>
      سلام دنیا
    </Button>
  </div>
);

export const Ghost = () => (
  <div>
    <Button ghost>سلام دنیا</Button>
    <Button ghost disabled>
      سلام دنیا
    </Button>
  </div>
);

export const Link = () => <Button link>سلام دنیا</Button>;

export const Text = () => (
  <div>
    <Button text>سلام دنیا</Button>
  </div>
);

export const Purple = () => (
  <div>
    <Button purplePrimary>سلام دنیا</Button>
    <Button purpleGhost>سلام دنیا</Button>
    <Button purpleLink>سلام دنیا</Button>
    <Button purplePrimary disabled>
      سلام دنیا
    </Button>
  </div>
);

export const Tiny = () => (
  <div>
    <Button primary tiny>
      سلام دنیا
    </Button>
    <Button danger tiny>
      سلام دنیا
    </Button>
    <Button ghost tiny>
      سلام دنیا
    </Button>
    <Button link tiny>
      سلام دنیا
    </Button>
  </div>
);

export const Small = () => (
  <div>
    <Button primary small>
      سلام دنیا
    </Button>
    <Button danger small>
      سلام دنیا
    </Button>
    <Button ghost small>
      سلام دنیا
    </Button>
    <Button link small>
      سلام دنیا
    </Button>
  </div>
);

export const Regular = () => (
  <div>
    <Button primary regular>
      سلام دنیا
    </Button>
    <Button danger regular>
      سلام دنیا
    </Button>
    <Button ghost regular>
      سلام دنیا
    </Button>
    <Button link regular>
      سلام دنیا
    </Button>
  </div>
);

export const Large = () => (
  <div>
    <Button primary large>
      سلام دنیا
    </Button>
    <Button danger large>
      سلام دنیا
    </Button>
    <Button ghost large>
      سلام دنیا
    </Button>
    <Button link large>
      سلام دنیا
    </Button>
  </div>
);

export const Loading = () => {
  const [loading, setLoading] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);

  return (
    <div className="table-of-loading-buttons">
      <div>
        <label>
          <Checkbox
            checked={loading}
            onChange={e => setLoading(e.currentTarget.checked)}
          />
          <span>حالت لودینگ</span>
        </label>

        <label>
          <Checkbox
            checked={disabled}
            onChange={e => setDisabled(e.currentTarget.checked)}
          />
          <span>غیر فعال</span>
        </label>
      </div>

      <br />

      <table>
        <tbody>
          <tr>
            <th>primary</th>
            <td>
              <Button loading={loading} primary disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td />
            <td />
            <td />
          </tr>

          <tr>
            <th>danger</th>
            <td>
              <Button danger loading={loading} disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td />
            <td />
            <td />
          </tr>

          <tr>
            <th>ghost</th>
            <td>
              <Button ghost loading={loading} disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td />
            <td />
            <td />
          </tr>

          <tr>
            <th>link</th>
            <td>
              <Button loading={loading} link disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td />
            <td />
            <td />
          </tr>

          <tr>
            <th>text</th>
            <td>
              <Button loading={loading} text disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td />
            <td />
            <td />
          </tr>

          <tr>
            <th>purple</th>
            <td>
              <Button loading={loading} purplePrimary disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button loading={loading} purpleGhost disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button loading={loading} purpleLink disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td />
          </tr>

          <tr>
            <th>tiny</th>
            <td>
              <Button primary loading={loading} tiny disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button danger loading={loading} tiny disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button ghost loading={loading} tiny disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button link loading={loading} tiny disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
          </tr>

          <tr>
            <th>small</th>
            <td>
              <Button primary loading={loading} small disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button danger loading={loading} small disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button ghost loading={loading} small disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button link loading={loading} small disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
          </tr>

          <tr>
            <th>regular</th>
            <td>
              <Button primary loading={loading} regular disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button danger loading={loading} regular disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button ghost loading={loading} regular disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button link loading={loading} regular disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
          </tr>

          <tr>
            <th>large</th>
            <td>
              <Button primary loading={loading} large disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button danger loading={loading} large disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button ghost loading={loading} large disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
            <td>
              <Button loading={loading} link large disabled={disabled}>
                سلام دنیا
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
