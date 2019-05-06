import * as React from 'react';

export interface TrProps extends React.HTMLProps<HTMLTableRowElement> {
  children?: React.ReactNode;
}

const Tr: React.SFC<TrProps> = (props: TrProps) => {
  const { children, ...restOfProps } = props;

  return (
    <tbody>
      <tr {...restOfProps}>{children}</tr>
    </tbody>
  );
};

export default Tr;
