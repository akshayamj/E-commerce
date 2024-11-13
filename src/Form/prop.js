// import Jewellery from "./jewellery";

// function State(category) {
//   const overall = category.jewelery;
//   if (Jewellery) {
//     return <Jewellery />;
//   } else if (Electronics) {
//     return <Electronics />;
//   } else if (MenClothing) {
//     return <MenClothing />;
//   }
//   return <WomenClothing />;
// }

// export default State;

import React from "react";
import Jewellery from "./jewellery.js";
import Electronics from " ./electronics.js";
import MenClothing from "./mensclothing.js";
import WomenClothing from "./womensclothing.";

function CommonUtility({ props }) {
  console.log("dsfhjadg", props.value);
  if (category === "jewelery") {
    return <Jewellery />;
  } else if (category === "electronics") {
    return <Electronics />;
  } else if (category === "men's clothing") {
    return <MenClothing />;
  } else if (category === "women's clothing") {
    return <WomenClothing />;
  }

  return <p>category.</p>;
}

export default CommonUtility;
