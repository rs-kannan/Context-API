import React, { useContext } from "react";
import { ShopContext } from "../../Context/shop-context";

const CartItems = (props) => {
  const { id, productName, price, productsImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItems } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productsImage} alt="products" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItems(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
