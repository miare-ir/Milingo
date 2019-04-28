import * as React from 'react';
import * as momnet from 'moment-jalaali';
import { Moment } from 'moment';

import DateLine from './date-line';

interface DataTableProps {
  // remove extra ?
  date?: Moment;
  headerItems?: string[];
  bodyItems?: any[][];
  hasLink?: boolean;
}

class DataTable extends React.Component<DataTableProps, {}> {
  // Use props
  tableHeader: string[] = ['فیش', 'زمان ثبت اولیه', 'مبلغ (ریال)', 'وضعیت'];
  hasLink: boolean = true;

  renderTableHeader = () => {
    return (
      <tr>
        {this.tableHeader.map(item => (
          <th key={item}>{item}</th>
        ))}
        {this.hasLink && <th />}
      </tr>
    );
  };

  renderTableBody = () => {
    return (
      <tbody>
        <tr>
          <td>یک</td>
          <td>یک</td>
          <td>یک</td>
          <td>یک</td>
          {this.hasLink && <td>جزییات بیشتر</td>}
        </tr>
        <tr>
          <td>یک</td>
          <td>یک</td>
          <td>یک</td>
          <td>یک</td>
          {this.hasLink && <td>جزییات بیشتر</td>}
        </tr>
      </tbody>
    );
  };
  render() {
    return (
      <div>
        {/* this.props.date */}
        <DateLine date={momnet()} />
        <div className="data-table">
          <table>
            {this.renderTableHeader()}
            {this.renderTableBody()}
          </table>
        </div>
      </div>
    );
  }
}

export default DataTable;
