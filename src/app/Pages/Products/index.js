import React from 'react';
import { connect } from 'react-redux';

import { Button, Table } from 'antd';
import TableCell from './Components/TableCell';
import TableRow from './Components/TableRow';
import AddNewRowComponent from './Components/AddNewRowComponent';

import { COLUMNS_CONFIG } from './common';
import { mapDispatchToProps, mapStateToProps } from './controller';

import 'antd/dist/antd.css';
import './index.css';


class EditableTable extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const components = {
      body: {
        row: TableRow,
        cell: TableCell,
      },
    };
    return (
      <div>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={this.props.products}
          columns={COLUMNS_CONFIG}
        />

        <AddNewRowComponent />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditableTable);