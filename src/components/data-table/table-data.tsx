import * as React from 'react';

export interface TdProps extends React.HTMLProps<HTMLTableDataCellElement> {
  children?: React.ReactNode;
}

const Td: React.SFC<TdProps> = (props: TdProps) => {
  const { children, ...restOfProps } = props;

  return <td {...restOfProps}>{children}</td>;
};

export default Td;
