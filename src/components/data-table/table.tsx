import * as React from 'react';
import { Moment } from 'moment';

import DateLine from './date-line';

interface DataTableProps {
  date?: Moment;
  children?: React.ReactNode;
}

class DataTable extends React.Component<DataTableProps, {}> {
  render() {
    return (
      <div>
        {this.props.date && <DateLine date={this.props.date} />}
        <div className="data-table">
          <table>{this.props.children}</table>
        </div>
      </div>
    );
  }
}

export default DataTable;
