// import React from 'react'

// function Last () {
//   const [first, setFirst] = useState([])

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products/categories")
//      .then(response => response.json())
//      .then(data => setFirst(data.slice(-10)))
//   }

//   return (
//     <>
//     if (women's clothing) {
//       women's clothing};
//     else if(men's clothing){
//       men's clothing };
//     }
//     else if (jewelery){
//       jewelery;
//     }
//     else (electronics)
//     </>
//   )
// }

// export default Last;

// import React, { useState, useEffect } from "react";
// import Jewellery from "./Jewellery";
// import WomenClothing from "./WomenClothing";
// import MenClothing from "./MenClothing";
// import Electronics from "./Electronics";

// function Last() {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products/categories")
//       .then((response) => response.json())
//       .then((data) => setCategories(data));
//   }, []);

//   return (
//     <>
//       {categories.includes("jewellery") && <Jewellery category="jewellery" />}
//       {categories.includes("women's clothing") && (
//         <WomenClothing category="women's clothing" />
//       )}
//       {categories.includes("men's clothing") && (
//         <MenClothing category="men's clothing" />
//       )}
//       {categories.includes("electronics") && (
//         <Electronics category="electronics" />
//       )}
//     </>
//   );
// }

// export default Last;

import React, { useState, useEffect } from "react";


function Last(State) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }, []);

  const handleCategoryClick = (category) => {
    console.log("fhdgjsdgfdj")
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>Select a Category:</h2>
      <className="category-buttons">
        {categories.map((category) => (
          <button key={category} onClick={() => handleCategoryClick(category)}>
            {category} dhfgdsahjf
          </button>
        ))}
      
      <CommonUtility value={category} />
      
    </div>
  );
}

export default Last;
