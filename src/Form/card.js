import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({ category, path }) {
  console.log("input string", path);
  let output = path.replace(/\s+/g, "").replace(/[^a-zA-Z0-9\s]/g, "");
  console.log("output", output);

  return (
    <div className="card">
      <h2>{category}</h2>
      <Link to={output}>Explore {category}</Link>
    </div>
  );
}

export default CategoryCard;
