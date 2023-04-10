import * as React from 'react';
import Button from '.';

import './styles.stories.scss';

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
