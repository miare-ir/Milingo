import * as React from 'react';

import MenuHeader from './header';
import MenuLink from './link';
import MenuAvatar from './avatar';
import MenuStatus from './status';
import MenuItem from './item';
import Button from '../button';

import './styles.story.scss';

export default {
  title: 'Menu',

  decorators: [
    story => (
      <div className="story-container menu-story" style={{ width: '400px' }}>
        {story()}
      </div>
    ),
  ],
};

export const HeaderWithTitle = () => <MenuHeader title="عنوان" />;

HeaderWithTitle.story = {
  name: 'Header with title',
};

export const HeaderWithTitleAndButton = () => (
  <MenuHeader title="عنوان" action={<Button primary>عنوان دکمه</Button>} />
);

HeaderWithTitleAndButton.story = {
  name: 'Header with title and button',
};

export const HeaderWithTitleAndImage = () => (
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
);

HeaderWithTitleAndImage.story = {
  name: 'Header with title and image',
};

export const LinkWithoutNotifications = () => <MenuLink title="عنوان" />;

LinkWithoutNotifications.story = {
  name: 'Link Without notifications',
};

export const LinkWithNotifications = () => (
  <MenuLink title="عنوان" notificationCount={7} />
);

LinkWithNotifications.story = {
  name: 'Link with notifications',
};

export const AvatarWithNoImage = () => (
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
);

AvatarWithNoImage.story = {
  name: 'Avatar with no image',
};

export const AvatarWithTextAsAvatar = () => (
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
);

AvatarWithTextAsAvatar.story = {
  name: 'Avatar with text as avatar',
};

export const AvatarWithLabel = () => (
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
);

AvatarWithLabel.story = {
  name: 'Avatar with label',
};

export const AvatarWithLargeText = () => (
  <div className="menu-avatar-container">
    <div className="column">
      <MenuAvatar largeText percentage={0} avatar="۳" />
      <MenuAvatar largeText percentage={25} avatar="۳" />
      <MenuAvatar largeText percentage={50} avatar="۳" />
      <MenuAvatar largeText percentage={75} avatar="۳" />
      <MenuAvatar largeText percentage={100} avatar="۳" />
    </div>
  </div>
);

AvatarWithLargeText.story = {
  name: 'Avatar with large text',
};

export const Status = () => (
  <div className="menu-status-container">
    <MenuStatus title="عنوان" />
  </div>
);

export const Item = () => (
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
);
