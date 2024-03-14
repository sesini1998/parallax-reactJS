import { Card, Carousel } from "antd";
import React from "react";
import "./Products.Style.css";

const ProductCard = ({ product }) => {
  return (
    <Card>
      <Carousel dots={false} autoplay autoplaySpeed={5000}>
        {product?.images?.map((image, index) => (
          <img
            className="product-image"
            key={index}
            alt={product?.title}
            src={image}
          />
        ))}
      </Carousel>
      <div className="product-content">
        <h1>{product?.title}</h1>
        <h3>{product?.productCode}</h3>
        <p>
          Rs. {product?.price} | {product?.quantity} pac
        </p>
      </div>
    </Card>
  );
};

export default ProductCard;
