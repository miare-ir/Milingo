import * as React from 'react';

import TagLine from './tag-line';

interface DataTableProps {
  tagline?: string | React.ReactNode;
  children?: React.ReactNode;
}

class DataTable extends React.Component<DataTableProps, {}> {
  render() {
    return (
      <div>
        {this.props.tagline && <TagLine>{this.props.tagline}</TagLine>}
        <div className="data-table">
          <table>{this.props.children}</table>
        </div>
      </div>
    );
  }
}

export default DataTable;
