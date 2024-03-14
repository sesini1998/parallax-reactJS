import { AutoComplete, Card, Col, Input, Row, Select } from "antd";
import React from "react";
import "./LeftPanel.Style.css";
import { PlusCircleOutlined, QrcodeOutlined, UserOutlined } from "@ant-design/icons";
const { Option } = AutoComplete;
const SelectCard = () => {
  return (
    <Card>
      <Row gutter={16} className="select-with-icon">
        <Col span={12}>
          <Input
            addonBefore={<UserOutlined />}
            placeholder="Please Select"
            addonAfter={<PlusCircleOutlined />}
          />
        </Col>
        <Col span={12}>
        <Input
            addonBefore={<QrcodeOutlined />}
            placeholder="Please Select"
            addonAfter={<PlusCircleOutlined />}
          />
        </Col>
      </Row>
      <Row gutter={16} className="select-without-icon">
        <Col span={8}>
          <Select defaultValue="Please Select">
            <Select.Option value="sample1">sample1</Select.Option>
          </Select>
        </Col>
        <Col span={8}>
          <Select defaultValue="Please Select">
            <Select.Option value="sample1">sample1</Select.Option>
          </Select>
        </Col>
        <Col span={8}>
          <Select defaultValue="Please Select">
            <Select.Option value="sample1">sample1</Select.Option>
          </Select>
        </Col>
      </Row>
    </Card>
  );
};

export default SelectCard;
