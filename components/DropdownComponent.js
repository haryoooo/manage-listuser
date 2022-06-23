import React from "react";
import { Select } from "antd";
const { Option } = Select;

export default function DropdownComponent({ handleChange }) {
  return (
    <div>
      <Select
        defaultValue="No Filter"
        style={{
          width: 120,
          marginTop: 10,
        }}
        onChange={(e) => handleChange(e)}
      >
        <Option value="AU">AU</Option>
        <Option value="BR">BR</Option>
        <Option value="CA">CA</Option>
        <Option value="CH">CH</Option>
        <Option value="DE">DE</Option>
        <Option value="DK">DK</Option>
        <Option value="ES">ES</Option>
        <Option value="FI">FI</Option>
        <Option value="IE">IE</Option>
        <Option value="IR">IR</Option>
        <Option value="NO">NO</Option>
        <Option value="NL">NL</Option>
        <Option value="AU">AU</Option>
        <Option value="NZ">NZ</Option>
        <Option value="TR">TR</Option>
        <Option value="US">US</Option>
        <Option value="">No Filter</Option>
      </Select>
    </div>
  );
}
