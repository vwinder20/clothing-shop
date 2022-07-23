import CategoryItem from "../CategoryItem";
const Directory = ({ data }) => {
  return (
    <div
      className="categories-container flex flex-wrap justify-between w-[90%] 
        flex-col sm:flex-row"
    >
      {data.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
