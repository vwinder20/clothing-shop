import React from "react";
import ProductCard from "../ProductCard";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div>
      <h2>
        <Link to={title} className="text-2xl font-bold cursor-pointer">
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className="grid grid-cols-3 gap-5 mt-5">
        {products
          .filter((_, idx) => idx < 3)
          .map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
      </div>
    </div>
  );
};

export default CategoryPreview;
