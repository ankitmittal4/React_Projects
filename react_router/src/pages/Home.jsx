import React from "react";
import Products from "../components/Products";
function Home() {
  return (
    <div>
      <h2>Welcome to Home Page</h2>
      <section>
        <h3>Products are:</h3>
        <Products></Products>
      </section>
    </div>
  );
}

export default Home;
