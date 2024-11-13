//   useEffect(() => {
//     axios
//       .get(`https://fakestoreapi.com/products/category/${category}`)
//       .then((response) => setProducts(response.data));
//   }, [category]);

import React, { useState, useEffect } from "react";
import useFetch from "./usefetch";

function Jewellery() {
  const [products, setProducts] = useState([]);
  const [data] = useFetch(
    "https://fakestoreapi.com/products/category/jewelery"
  );

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data]);

  return (
    <div>
      <h2>Jewellery Products</h2>
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

export default Jewellery;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import useFetch from "./usefetch";

// function Jewellery() {
//   const [products, setProducts] = useState([]);
//   const [data] = useFetch(
//     "https://fakestoreapi.com/products/category/jewelery"
//   );

//   return (
//     <div>
//       <h2>Jewellery Products</h2>
//       {products.length > 0 ? (
//         products.map((item) => (
//           <div key={item.id} className="product-card">
//             <h3>{item.title}</h3>
//             <img src={item.image} alt={item.title} width="100" />
//             <p>{item.description}</p>
//           </div>
//         ))
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default Jewellery;

// useEffect(() => {
//   fetch("https://fakestoreapi.com/products/category/jewelery")
//     .then((response) => response.json());
//     .then((json) => setProducts(json));
// }, []);

// useEffect(() => {
//   fetch("https://fakestoreapi.com/products/category/jewelery")
//     .then((response) => response.json())
//     .then((json) => setProducts(json));
// }, []);

// useEffect(() => {
//   fetch("http://localhost:3000/new")
//     .then((response) => response.json())
//     .then((json) => setProducts(json));
// }, []);
