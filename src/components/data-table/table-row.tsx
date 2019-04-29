import * as React from 'react';

export interface TrProps {
  children?: React.ReactNode;
}

const Tr: React.SFC<TrProps> = (props: TrProps) => {
  return <tr>{props.children}</tr>;
};

export default Tr;
