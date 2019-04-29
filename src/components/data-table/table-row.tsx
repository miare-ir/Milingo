import * as React from 'react';

export interface TrProps extends React.HTMLProps<HTMLTableRowElement> {
  children?: React.ReactNode;
}

const Tr: React.SFC<TrProps> = (props: TrProps) => {
  const { children, ...restOfProps } = props;

  return <tr {...restOfProps}>{children}</tr>;
};

export default Tr;
