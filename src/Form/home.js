// import React from "react";
// import CategoryCard from "./card";

// import { useState, useEffect } from "react";
// import Jewellery from "./Form/jewellery.js";
// import WomenClothing from "./women's clothing.js";
// import Electronics from " ./electronics.js";
// import MenClothing from " ./men's clothing.js";

// function Home() {
//   const [count, setCount] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products/categories")
//       .then((response) => response.json())
//       .then((json) => setCount(json));
//   }, []);

//   return (
//     <div>
//       <h1>Shopping Page</h1>
//       {count.map((category) => (
//         <div className="card-container" key={category}>
//           <CategoryCard category={category} path={category} />
//         </div>
//       ))}

//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route path="/jewelery" element={<Jewellery />} />
//           <Route path="/electronics" element={<Electronics />} />
//           <Route path="/mensclothing" element={<MenClothing />} />
//           <Route path="/womensclothing" element={<WomenClothing />} />
//         </Route>
//       </Routes>
//     </div>
//   );
// }

// export default Home;

// src/Form/Home.js
// import React, { useState, useEffect } from "react";
// import CategoryCard from "./card";

// function Home() {
//   const [categories, setCategories] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products/categories")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         return response.json();
//       })
//       .then((data) => setCategories(data))
//       .catch((err) => setError(err))
//       .finally(() => setLoading(false));
//   }, []);

//   if (loading) return <div>Loading categories...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Shopping Page</h1>
//       <div className="card-container">
//         {categories.map((category) => (
//           <CategoryCard key={category} category={category} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import CategoryCard from "./card";

function Home() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((json) => setCount(json));
  }, []);

  return (
    <div>
      <h1>Shopping Page</h1>
      {count.map((category) => (
        <div className="card-container" key={category}>
          <CategoryCard category={category} path={category} />
        </div>
      ))}
    </div>
  );
}

export default Home;
