import React from "react";
import ProductPage from "./products";
import { Products } from "../../products";
import "./shop.css";

const ShopCart = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h6>Come and Grab...💫🛒</h6>
      </div>
      <div className="products">
        {Products.map((pro) => (
          <ProductPage data={pro} />
        ))}
      </div>
    </div>
  );
};

export default ShopCart;
