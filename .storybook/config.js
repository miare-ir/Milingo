import { configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';

const req = require.context('../src', true, /\w+\.stories\.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setAddon(JSXAddon);
configure(loadStories, module);
