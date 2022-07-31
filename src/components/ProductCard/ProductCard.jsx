import React from "react";
import Button from "../Button";
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <div className="relative flex flex-col h-50 w-full items-center hover:opacity-80">
      <img className="object-cover w-full h-[95%]" src={imageUrl} alt="#" />
      <div className="absolute z-10 w-40 top-[72%] sm:top-[82%] md:top-[72%] ">
        <Button buttonType="inverted">add to card</Button>
      </div>
      <div className="flex justify-between text-2xl mt-2 w-full">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
