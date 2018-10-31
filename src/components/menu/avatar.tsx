import * as React from 'react';
import * as classNames from 'classnames';
import CircularProgressbar from 'react-circular-progressbar';

export interface MenuAvatarProps extends React.HTMLProps<HTMLDivElement> {
  avatar?: string | JSX.Element;
  percentage?: number;
  selected?: boolean;
  label?: string;
  largeText?: boolean;
}

const MenuAvatar: React.SFC<MenuAvatarProps> = ({
  avatar,
  percentage,
  selected,
  label,
  largeText,
  ...props
}: MenuAvatarProps) => (
  <div
    className={classNames('menu-avatar', {
      'not-started': percentage === 0,
      selected: selected,
      large: largeText,
    })}
    {...props}>
    <CircularProgressbar
      percentage={percentage || 0}
      textForPercentage={() => ''}
      strokeWidth={5}
    />
    <div className="menu-avatar-inner">
      <div className="menu-avatar-hover" />
      {avatar && <div className="menu-avatar-image">{avatar}</div>}
      {label && <div className="menu-avatar-label">{label}</div>}
    </div>
  </div>
);

export default MenuAvatar;
