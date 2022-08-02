import { useContext } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../components/ProductCard";
const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <section className="flex flex-col gap-10">
      {Object.keys(categoriesMap).map((title) => (
        <div key={title} className="w-full">
          <h2 className="text-3xl mb-6">{title.toUpperCase()}</h2>
          <div className="grid grid-cols-1 w-full gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {categoriesMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Shop;
