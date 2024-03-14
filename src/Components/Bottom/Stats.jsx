import { Card, Col, Row } from "antd";
import React from "react";

const Stats = () => {
  return (
    <Card>
      <Row gutter={[8,8]}>
        <Col span={5}>
          <Card className="blue-card">
            <p>New Button</p>
            <p>Rs.1000.00</p>
          </Card>
        </Col>
        <Col span={5}>
          <Card className="blue-card">
            <p>Discount</p>
            <p>Rs.0.00</p>
          </Card>
        </Col>
        <Col span={5}>
          <Card className="blue-card">
            <p>Tax</p>
            <p>Rs.90.00</p>
          </Card>
        </Col>
        <Col span={9}>
          <Card className="white-card">
            <p>Item Count: </p>
            <p>400</p>
          </Card>
        </Col>
      </Row>
      <Row gutter={[8,8]} style={{marginTop: "5px"}}>
        <Col span={5}>
          <Card className="blue-card">
            <p>New Button</p>
            <p>Rs.1000.00</p>
          </Card>
        </Col>
        <Col span={5}>
          <Card className="blue-card">
            <p>Shipping</p>
            <p>Rs.1000.00</p>
          </Card>
        </Col>
        <Col span={5}>
          <Card className="blue-card">
            <p>Packaging</p>
            <p>Rs.1000.00</p>
          </Card>
        </Col>
        <Col span={9}>
          <Card className="blue-card">
            <p>Total: </p>
            <p>Rs. 1999,999.00</p>
          </Card>
        </Col>
      </Row>
    </Card>
  );
};

export default Stats;
