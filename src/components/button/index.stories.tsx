import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '.';

import './styles.stories.scss';

storiesOf('Button', module)
  .addDecorator(story => <div className="story-container">{story()}</div>)
  .add('Primary', () => (
    <div>
      <Button primary>سلام دنیا</Button>
      <Button primary disabled>
        سلام دنیا
      </Button>
    </div>
  ))
  .add('Danger', () => (
    <div>
      <Button danger>سلام دنیا</Button>
      <Button danger disabled>
        سلام دنیا
      </Button>
    </div>
  ))
  .add('Ghost', () => (
    <div>
      <Button ghost>سلام دنیا</Button>
      <Button ghost disabled>
        سلام دنیا
      </Button>
    </div>
  ))
  .add('Link', () => <Button link>سلام دنیا</Button>)
  .add('Tiny', () => (
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
  ))
  .add('Small', () => (
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
  ))
  .add('Regular', () => (
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
  ))
  .add('Large', () => (
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
  ));
