import React, { useState, useEffect } from "react";
import axios from "axios";

function WomenClothing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((response) => setProducts(response.data));
  }, []);

  return (
    <div>
      <h2>Women's Clothing Products</h2>
      {products.length > 0 ? (
        products.map((item) => (
          <div key={item.id} className="product-card">
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} width="100" />
            <p>{item.description}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default WomenClothing;
