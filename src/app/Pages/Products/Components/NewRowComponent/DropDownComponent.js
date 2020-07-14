import React from "react";
import { Button, Dropdown, Menu } from "antd";
import { CarryOutOutlined, DownOutlined } from '@ant-design/icons';

export default function CategoryDropDownComponent(props) {
  const menu = (
    <Menu onClick={(event) => {
      if (props.onSelect) {
        props.onSelect(props.menuOptions.find(option => option.id === Number.parseInt(event.key)));
      }
    }
    }>
      {
        props.showOptions && props.menuOptions.map(option => (
          <Menu.Item
            key={option.id}
            icon={<CarryOutOutlined />}
            menuItem={option}>
            {option.name}
          </Menu.Item>)
        )
      }
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Button>
        {props.selectedItem ? props.selectedItem : props.title} <DownOutlined />
      </Button>
    </Dropdown>
  )
}