import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUS } from "../store/productSlice";}

function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  // const [products, setProducts] = usestate([]);
  useEffect(() => {
    dispatch(fetchProducts());
    // const fetchProducts = async () => {
    //   const response = await fetch("");
    //   const data = await response.JSON();
    //   console.log(data);
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch(add(product));
  };

  if(status === STATUS.LOADING){
    return <h2>Loading...</h2>
  }
  if(status === STATUS.ERROR){
    return <h2>Oops, Something went wrong!!!</h2>
  }
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card">
          <img className="" src={product.image} alt="" />
          <h2>{product.title}</h2>
          <h2>{product.price}</h2>
          <button onClick={handleAddToCart(product)} className="btn">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
