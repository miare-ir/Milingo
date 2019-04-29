import * as React from 'react';

export interface TdProps {
  children?: React.ReactNode;
}

const Td: React.SFC<TdProps> = (props: TdProps) => {
  return <td>{props.children}</td>;
};

export default Td;
