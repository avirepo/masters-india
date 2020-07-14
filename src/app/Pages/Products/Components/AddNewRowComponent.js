import * as React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { addProductRow } from "../actions";
import NewRowComponent from "./NewRowComponent/index";


class AddNewRowComponent extends React.Component {
  render() {
    if (this.props.newRow !== null) {
      return <NewRowComponent />;
    }
    return (
      <Button
        onClick={this.props.addProductRow}
        type='primary'
        style={{
          marginBottom: 16,
          marginLeft: 16,
        }}
      >
        Add a row
      </Button>
    )
  }
}

export const mapStateToProps = (state) => ({
  newRow: state.products.newRow
})
export const mapDispatchToProps = {
  addProductRow
}

export default connect(mapStateToProps, mapDispatchToProps)(AddNewRowComponent)