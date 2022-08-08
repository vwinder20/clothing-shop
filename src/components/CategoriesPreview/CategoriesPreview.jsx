import { useContext } from "react";
import CategoryPreview from "../CategoryPreview";
import { CategoriesContext } from "../../contexts/CategoriesContext";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <section className="flex flex-col gap-10 w-full">
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={categoriesMap[title]}
          />
        );
      })}
    </section>
  );
};

export default CategoriesPreview;
