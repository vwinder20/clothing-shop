import CategoryItem from "../CategoryItem";
const Directory = ({ data }) => {
  return (
    <div
      className="flex flex-wrap justify-between w-[90%] 
        flex-col sm:flex-row font-cormorant"
    >
      {data.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
