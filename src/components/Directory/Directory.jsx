import DirectoryItem from "../DirectoryItem";
const Directory = ({ data }) => {
  return (
    <div
      className="flex flex-wrap justify-between w-full 
        flex-col sm:flex-row gap-2"
    >
      {data.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;
