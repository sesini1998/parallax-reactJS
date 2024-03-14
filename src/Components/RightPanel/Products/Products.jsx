import { Col, Row, Select } from "antd";
import React, { useEffect, useRef, useState } from "react";
import "./Products.Style.css";
import ProductCard from "./ProductCard";
import { ProductsList } from "../../../Utils/Products";

const Products = () => {
  const [visibleProducts, setVisibleProducts] = useState(
    ProductsList.slice(0, 8)
  );
  const numberOfVisibleProducts = useRef(8);

  const handleOnWheel = (event) => {
    if (event.deltaY < 0 && numberOfVisibleProducts.current > 8) {
      numberOfVisibleProducts.current -= 4;
    } else if (event.deltaY > 0 && numberOfVisibleProducts.current < ProductsList.length) {
      numberOfVisibleProducts.current += 4;
    }
     setVisibleProducts(ProductsList.slice(0, numberOfVisibleProducts.current));
  };

  return (
    <>
      <Row className="select-row" gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={8}>
          <Select className="select-product" defaultValue="Please Select">
            <Select.Option value="sample1">sample1</Select.Option>
          </Select>
        </Col>
        <Col span={8}>
          <Select className="select-product" defaultValue="Please Select">
            <Select.Option value="sample1">sample1</Select.Option>
          </Select>
        </Col>
        <Col span={8}>
          <Select className="select-product" defaultValue="Please Select">
            <Select.Option value="sample1">sample1</Select.Option>
          </Select>
        </Col>
      </Row>

        <Row
        onWheel={handleOnWheel}
          className="product-list"
          gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 }, 16]}
        >
          {visibleProducts.map((product) => (
            <Col span={6} key={product.productId}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
    </>
  );
};

export default Products;
