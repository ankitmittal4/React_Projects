import React from "react";
import { useSelector } from "react-redux";
function Navbar() {
  const itemsCnt = useSelector((state) => state.cart);
  return (
    <div className="header">
      <span>RTK</span>
      <div>
        <Link to="/" className="NavLink">
          Home
        </Link>
        <Link to="/cart" className="NavLink">
          Cart
        </Link>
        <span className="cartCount">Items Count: {itemsCnt.length}</span>
      </div>
    </div>
  );
}

export default Navbar;
