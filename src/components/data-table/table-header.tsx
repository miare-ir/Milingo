import * as React from 'react';

export interface ThProps {
  children?: React.ReactNode;
}

const Th: React.SFC<ThProps> = (props: ThProps) => {
  return <th>{props.children}</th>;
};

export default Th;
