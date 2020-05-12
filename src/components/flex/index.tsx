import * as React from 'react';
import * as classNames from 'classnames';

import './styles.scss';

export interface ColumnProps extends React.HTMLProps<HTMLDivElement> {
  innerRef?: string | ((node) => void);
  'mb-row'?: boolean;
  order?: number;
  'mb-order'?: number;
  grow?: number;
  'mb-grow'?: number;
  fullHeight?: boolean;
  'mb-fullWidth'?: boolean;
  align?: 'center';
  justify?: 'center' | 'space-between' | 'flex-end' | 'flex-start';
}

export const Column: React.SFC<ColumnProps> = (props: ColumnProps) => {
  const classes = classNames(props.className, 'flex-column', {
    'flex-row-mobile': props['mb-row'],
    [`flex-order-${props.order}`]: props.order !== undefined,
    [`flex-order-mobile-${props['mb-order']}`]: props['mb-order'] !== undefined,
    [`flex-grow-${props.grow}`]: props.grow !== undefined,
    [`flex-grow-mobile-${props['mb-grow']}`]: props['mb-grow'] !== undefined,
    'full-height': props.fullHeight,
    'full-width-mobile': props['mb-fullWidth'],
    [`align-${props.align}`]: props.align !== undefined,
    [`justify-${props.justify}`]: props.justify !== undefined,
  });

  return (
    <div
      className={classes}
      onClick={props.onClick}
      style={props.style}
      ref={props.innerRef}>
      {props.children}
    </div>
  );
};

Column.defaultProps = {
  className: '',
};

export interface RowProps extends React.HTMLProps<HTMLDivElement> {
  innerRef?: string | ((node) => void);
  'mb-column'?: boolean;
  order?: number;
  'mb-order'?: number;
  grow?: number;
  'mb-grow'?: number;
  fullWidth?: boolean;
  'mb-fullWidth'?: boolean;
  align?: 'center';
  justify?: 'center' | 'space-between' | 'flex-end' | 'flex-start';
}

export const Row: React.SFC<RowProps> = (props: RowProps) => {
  const classes = classNames(props.className, 'flex-row', {
    'flex-column-mobile': props['mb-column'],
    [`flex-order-${props.order}`]: props.order !== undefined,
    [`flex-order-mobile-${props['mb-order']}`]: props['mb-order'] !== undefined,
    [`flex-grow-${props.grow}`]: props.grow !== undefined,
    [`flex-grow-mobile-${props['mb-grow']}`]: props['mb-grow'] !== undefined,
    'full-width': props.fullWidth,
    'full-width-mobile': props['mb-fullWidth'],
    [`align-${props.align}`]: props.align !== undefined,
    [`justify-${props.justify}`]: props.justify !== undefined,
  });

  return (
    <div
      className={classes}
      onClick={props.onClick}
      style={props.style}
      ref={props.innerRef}>
      {props.children}
    </div>
  );
};

Row.defaultProps = {
  className: '',
};
