import React from "react";
import './TableCell.css'
const TableCell = ({ children, ...restProps }) => {
  let childNode = (
    <div
      className="table-cell-value-wrap"
      style={{
        paddingRight: 24,
      }}
    >
      {children}
    </div>
  )
  return <td {...restProps}>{childNode}</td>;
};

export default TableCell;