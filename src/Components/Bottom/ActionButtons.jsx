import { DownloadOutlined } from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import React from "react";
import "./Bottom.Style.css";

const ActionButtons = () => {
  return (
    <Card className="action-button-card">
      <Row gutter={[8,8]}>
        <Col span={6}>
          <Button
            icon={<DownloadOutlined />}
            size="large"
            className="green-button"
          >
            Cash
          </Button>
        </Col>
        <Col span={6}>
          <Button
            icon={<DownloadOutlined />}
            size="large"
            className="yellow-button"
          >
            Pay
          </Button>
        </Col>
        <Col span={6}>
          <Button
            icon={<DownloadOutlined />}
            size="large"
            className="yellow-button"
          >
            Card
          </Button>
        </Col>
        <Col span={6}>
          <Button
            icon={<DownloadOutlined />}
            size="large"
            className="yellow-button"
          >
            Credit
          </Button>
        </Col>
        
        {Array.from({ length: 4 }, (_, index) => (
          <Col span={6} key={index}>
            <Button type="primary" size="large" className="blue-button">
              Button
            </Button>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default ActionButtons;
