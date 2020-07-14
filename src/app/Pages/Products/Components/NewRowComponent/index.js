import * as React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import { mapDispatchToProps, mapStateToProps } from "./controller";
import CategoryDropDownComponent from './DropDownComponent'
import InputField from "./InputField";

class NewRowComponent extends React.Component {
  componentDidMount() {
    if (!this.props.categories.length) {
      this.props.fetchCategory();
    }
  }

  selectCategory = (category) => {
    let categoryId = category.id;
    if (!this.props.allSubCategories[categoryId]) {
      this.props.fetchSubCategory(categoryId)
    }
    this.props.selectCategory(category)
  }

  render() {
    return (
      <tr data-row-key="1" className="ant-table-row ant-table-row-level-0 editable-row">
        <td className="ant-table-cell">
          <div className="table-cell-value-wrap" style={{ "paddingRight": "48px" }}>
            <InputField
              placeholder="Product name"
              onValueChange={this.props.addProductName}
            />
          </div>
        </td>
        <td className="ant-table-cell">
          <div className="table-cell-value-wrap" style={{ "paddingRight": "48px" }}>
            <CategoryDropDownComponent
              showOptions={true}
              menuOptions={this.props.categories}
              title={'Select Category'}
              selectedItem={this.props.selectedCategory && this.props.selectedCategory.name}
              onSelect={this.selectCategory}
            />
          </div>
        </td>
        <td className="ant-table-cell">
          <div className="table-cell-value-wrap" style={{ "paddingRight": "48px" }}>
            <CategoryDropDownComponent
              showOptions={Boolean(this.props.selectedCategory)}
              menuOptions={this.props.subCategories}
              title={'Select SubCategory'}
              selectedItem={this.props.selectedSubCategory && this.props.selectedSubCategory.name}
              onSelect={this.props.selectSubCategory}
            />
          </div>
        </td>
        <td>
          <Button
            onClick={() => {this.props.addProduct(this.props.addPayload)}}
            disabled={this.props.disableSaveAction}
            type='primary'
            style={{
              marginBottom: 16,
            }}
          >
            Save
          </Button>
          <Button
            onClick={this.props.clearNewProductRow}
            type='primary'
            style={{
              marginBottom: 16,
              marginLeft: 16,
            }}
          >
            Cancel
          </Button>
        </td>
      </tr>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NewRowComponent)