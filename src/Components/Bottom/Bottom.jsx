import { Col, Row } from "antd";
import React from "react";
import Stats from "./Stats";
import ActionButtons from "./ActionButtons";
import "./Bottom.Style.css";

const Bottom = () => {
  return (
    <Row gutter={8} className="bottom-container">
      <Col span={15}>
        <Stats />
      </Col>
      <Col span={9}>
        <ActionButtons />
      </Col>
    </Row>
  );
};

export default Bottom;
