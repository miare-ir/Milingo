import * as React from 'react';
import * as classNames from 'classnames';
import { CircularProgressbar } from 'react-circular-progressbar';

export interface MenuAvatarProps extends React.HTMLProps<HTMLDivElement> {
  avatar?: string | JSX.Element;
  percentage?: number;
  selected?: boolean;
  label?: string;
  largeText?: boolean;
  type?: 'warning';
}

const MenuAvatar: React.FC<MenuAvatarProps> = ({
  avatar,
  percentage,
  selected,
  label,
  largeText,
  type,
  ...props
}: MenuAvatarProps) => (
  <div
    className={classNames('menu-avatar', {
      'not-started': percentage === 0,
      selected: selected,
      large: largeText,
      warning: type === 'warning',
    })}
    {...props}>
    <CircularProgressbar value={percentage || 0} strokeWidth={5} />
    <div className="inner">
      <div className="hover" />
      {avatar && <div className="image">{avatar}</div>}
      {label && <div className="label">{label}</div>}
    </div>
  </div>
);

export default MenuAvatar;
