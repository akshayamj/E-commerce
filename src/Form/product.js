// import React from "react";
// import axios from "axios";
// import { useState, useEffect } from "react";

// function Products() {
//   const [count, setCount] = useState([{}]);

//   useEffect(() => {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => setCount(response.data));
//     //.then((json) => setCount(json));
//   }, []);

//   const Card = ({ id, title, description, category, image }) => (
//     <div className="card">
//       <div className="card-id">{id}</div>
//       <div className="card-title">{title}</div>
//       <div className="card-description">{description}</div>
//       <div className="card-category">{category}</div>
//       <div className="card-rating">
//       <div className="card-rating">rating: {rate} / 5 ({ratingCount} reviews)</div>
//       {image && <img src={image} alt={title} className="card-image" />}
//     </div>
//   );

//   return (
//     <div className="app">
//       {count.map((item) => (
//         <Card
//           key={item.id}
//           title={item.title}
//           description={item.description}
//           category={item.category}
//           image={item.image}
//           rate={item.rating?.rate}
//           ratingCount={item.rating?.count}
//         />
//       ))}

//     </div>
//   );
// }
// export default Products;

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function Products() {
  const [count, setCount] = useState([{}]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setCount(response.data));
  }, []);

  const Card = ({
    id,
    title,
    description,
    category,
    image,
    rate,
    ratingCount,
  }) => (
    <div className="card">
      <div className="card-id">ID: {id}</div>
      <div className="card-title">Title: {title}</div>
      <div className="card-description">Description: {description}</div>
      <div className="card-category">Category: {category}</div>
      <div className="card-rating">
        Rating: {rate} / 5 ({ratingCount} reviews)
      </div>
      {image && <img src={image} alt={title} className="card-image" />}
    </div>
  );

  return (
    <div className="app">
      {count.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          category={item.category}
          image={item.image}
          rate={item.rating?.rate}
          ratingCount={item.rating?.count}
        />
      ))}
    </div>
  );
}

export default Products;
