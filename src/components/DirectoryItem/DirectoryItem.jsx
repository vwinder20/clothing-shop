import { Link } from "react-router-dom";
const Directory = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <Link
      to={`shop/${title.toLowerCase()}`}
      className="flex min-w-[30%] h-60 
      flex-auto justify-center border border-solid
    border-black items-center overflow-hidden group hover:cursor-pointer"
    >
      <div
        className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-all duration-1000 ease-in-out "
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div
        className="h-5.625rem px-4 py-[25px]
        flex flex-col items-center justify-center border border-solid
        border-black bg-white opacity-70 absolute group-hover:opacity-90 duration-300 "
      >
        <h2 className="font-bold ">{title}</h2>
        <p className="font-light text-base ">Shop Now</p>
      </div>
    </Link>
  );
};

export default Directory;
