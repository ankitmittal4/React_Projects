import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";
function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(remove(id));
  };
  return (
    <div>
      <h2>Your Card Items are:</h2>
      <div className="cartWrapper">
        {cartItems.map((item) => (
          <div key={item.id} className="cartCard">
            <img src={item.image} alt="" />
            <h3>item.title</h3>
            <h3>item.price</h3>
            <button className="btn" onClick={handleRemove(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
