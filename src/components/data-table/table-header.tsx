import * as React from 'react';

export interface ThProps extends React.HTMLProps<HTMLTableHeaderCellElement> {
  children?: React.ReactNode;
}

const Th: React.SFC<ThProps> = (props: ThProps) => {
  const { children, ...restOfProps } = props;

  return <th {...restOfProps}>{children}</th>;
};

export default Th;
