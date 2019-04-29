import * as React from 'react';

import TagLine from './tag-line';

interface DataTableProps extends React.HTMLProps<HTMLTableElement> {
  tagline?: string | React.ReactNode;
  children?: React.ReactNode;
}

class DataTable extends React.Component<DataTableProps, {}> {
  render() {
    const { tagline, children, ...restOfProps } = this.props;

    return (
      <div>
        {tagline && <TagLine>{tagline}</TagLine>}
        <div className="data-table">
          <table {...restOfProps}>{children}</table>
        </div>
      </div>
    );
  }
}

export default DataTable;
