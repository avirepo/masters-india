import * as React from "react";
import { Input } from "antd";

export default function InputField(props) {
  const onChange = e => {
    const { value } = e.target;
    if (value && !(value === '' || value === '-')) {
      console.log(value)
      props.onValueChange(value);
    }
  };

  return (
    <Input
      placeholder={props.placeholder}
      onChange={onChange}
    />
  )
}