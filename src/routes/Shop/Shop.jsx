import { useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
import ProductCard from "../../components/ProductCard";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <section className="grid grid-cols-1 w-full gap-6 md:grid-cols-2 lg:grid-cols-3 ">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
};

export default Shop;
