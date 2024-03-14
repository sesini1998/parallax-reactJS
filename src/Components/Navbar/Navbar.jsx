import { SunOutlined } from "@ant-design/icons";
import { Avatar, Select, Space } from "antd";
import React from "react";
import "./Navbar.Style.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <div className="nav-logo">
          <SunOutlined />
          <Select defaultValue="Please Select">
            <Select.Option value="sample1">sample1</Select.Option>
          </Select>
          <p>11/1/2023 | Wednesday</p>
        </div>
        <div className="nav-title">
          <h1>Storemate</h1>
        </div>
        <div className="nav-icons">
          <Space size="small">
            {Array.from({ length: 6 }, (_, index) => (
              <Avatar
                key={index}
                src="https://images.pexels.com/photos/15226445/pexels-photo-15226445/free-photo-of-a-sunset-over-a-city-with-clouds-in-the-sky.jpeg"
              />
            ))}
            <span>Attanayaka</span>
            <Avatar src="https://images.pexels.com/photos/15226445/pexels-photo-15226445/free-photo-of-a-sunset-over-a-city-with-clouds-in-the-sky.jpeg" />
          </Space>
        </div>
      </div>
    </>
  );
};

export default Navbar;
