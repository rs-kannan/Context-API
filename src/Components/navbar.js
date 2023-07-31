import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../Context/shop-context";

const NavbarPage = () => {
  const { count } = useContext(ShopContext);
  return (
    <div className="navbar">
      <h3 className="brand">ShoppingCart</h3>
      <div className="links">
        <Link to="/">Bucket</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
          <span>{count}</span>
        </Link>
      </div>
    </div>
  );
};

export default NavbarPage;
