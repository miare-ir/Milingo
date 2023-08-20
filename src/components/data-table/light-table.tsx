import * as React from 'react';

export interface LightTableProps extends React.HTMLProps<HTMLTableElement> {
  children?: React.ReactNode;
}

const LightTable : React.FC<LightTableProps> = (props: LightTableProps) => {
  const { children, ...restOfProps } = props;

  return (
    <div className="light-table">
      <table {...restOfProps}>{children}</table>
    </div>
  );
}

export default LightTable;
