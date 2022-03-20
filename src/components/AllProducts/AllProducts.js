import React, { useEffect, useState } from "react";
import SingleProduct from "../SingleProduct/SingleProduct";
import "./AllProducts.css";

const AllProducts = ({setCart}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <SingleProduct key={product.id} product={product} addToCart={setCart}></SingleProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
