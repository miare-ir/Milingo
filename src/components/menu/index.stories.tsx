import * as React from 'react';
import { storiesOf } from '@storybook/react';

import MenuHeader from './header';
import MenuLink from './link';
import MenuAvatar from './avatar';
import MenuStatus from './status';
import MenuItem from './item';
import Button from '../button';

import './styles.story.scss';

storiesOf('Menu', module)
  .addDecorator(story => (
    <div className="story-container menu-story" style={{ width: '400px' }}>
      {story()}
    </div>
  ))
  .add('Header with title', () => <MenuHeader title="عنوان" />)
  .add('Header with title and button', () => (
    <MenuHeader title="عنوان" action={<Button primary>عنوان دکمه</Button>} />
  ))
  .add('Header with title and image', () => (
    <MenuHeader
      title="عنوان"
      image={
        <img
          src={
            'data:image/png;base64,' +
            'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+' +
            'PPvPwAF+QL7zC2IewAAAABJRU5ErkJggg=='
          }
        />
      }
    />
  ))
  .add('Link Without notifications', () => <MenuLink title="عنوان" />)
  .add('Link with notifications', () => (
    <MenuLink title="عنوان" notificationCount={7} />
  ))
  .add('Avatar with no image', () => (
    <div className="menu-avatar-container">
      <div className="column">
        <MenuAvatar percentage={0} />
        <MenuAvatar percentage={25} />
        <MenuAvatar percentage={50} />
        <MenuAvatar percentage={75} />
        <MenuAvatar percentage={100} />
      </div>
      <div className="column">
        <MenuAvatar selected percentage={0} />
        <MenuAvatar selected percentage={25} />
        <MenuAvatar selected percentage={50} />
        <MenuAvatar selected percentage={75} />
        <MenuAvatar selected percentage={100} />
      </div>
    </div>
  ))
  .add('Avatar with text as avatar', () => (
    <div className="menu-avatar-container">
      <div className="column">
        <MenuAvatar percentage={0} avatar="M10" />
        <MenuAvatar percentage={25} avatar="M10" />
        <MenuAvatar percentage={50} avatar="M10" />
        <MenuAvatar percentage={75} avatar="M10" />
        <MenuAvatar percentage={100} avatar="M10" />
      </div>
      <div className="column">
        <MenuAvatar selected percentage={0} avatar="M10" />
        <MenuAvatar selected percentage={25} avatar="M10" />
        <MenuAvatar selected percentage={50} avatar="M10" />
        <MenuAvatar selected percentage={75} avatar="M10" />
        <MenuAvatar selected percentage={100} avatar="M10" />
      </div>
    </div>
  ))
  .add('Avatar with label', () => (
    <div className="menu-avatar-container">
      <div className="column">
        <MenuAvatar percentage={0} avatar="M10" label="رایگان" />
        <MenuAvatar percentage={25} avatar="M10" label="رایگان" />
        <MenuAvatar percentage={50} avatar="M10" label="رایگان" />
        <MenuAvatar percentage={75} avatar="M10" label="رایگان" />
        <MenuAvatar percentage={100} avatar="M10" label="رایگان" />
      </div>
      <div className="column">
        <MenuAvatar selected percentage={0} avatar="M10" label="رایگان" />
        <MenuAvatar selected percentage={25} avatar="M10" label="رایگان" />
        <MenuAvatar selected percentage={50} avatar="M10" label="رایگان" />
        <MenuAvatar selected percentage={75} avatar="M10" label="رایگان" />
        <MenuAvatar selected percentage={100} avatar="M10" label="رایگان" />
      </div>
    </div>
  ))
  .add('Avatar with large text', () => (
    <div className="menu-avatar-container">
      <div className="column">
        <MenuAvatar largeText percentage={0} avatar="۳" />
        <MenuAvatar largeText percentage={25} avatar="۳" />
        <MenuAvatar largeText percentage={50} avatar="۳" />
        <MenuAvatar largeText percentage={75} avatar="۳" />
        <MenuAvatar largeText percentage={100} avatar="۳" />
      </div>
    </div>
  ))
  .add('Status', () => (
    <div className="menu-status-container">
      <MenuStatus title="عنوان" />
    </div>
  ))
  .add('Item', () => (
    <div className="menu-item-container">
      <MenuItem
        avatar={<MenuAvatar avatar="M10" />}
        title="M10"
        description="کدر صفوی"
      />
      <MenuItem
        avatar={<MenuAvatar avatar="M10" />}
        title="M10"
        description="کدر صفوی"
        time="۱۵:۳۰"
      />
      <MenuItem title="M10" description="کدر صفوی" time="۱۵:۳۰" />
    </div>
  ));
