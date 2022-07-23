import { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:4000/categories")
      .then((response) => response.json())
      .then((respData) => setData(respData));
  }, []);

  return (
    <div
      className="categories-container flex flex-wrap justify-between w-[90%] 
    flex-col sm:flex-row"
    >
      {data.map(({ title, id, imageUrl }) => (
        <div
          className="category-container flex min-w-30 h-60 
          flex-auto justify-center border border-solid
        border-black mt-0 mr-2 mb-3 items-center overflow-hidden group hover:cursor-pointer"
          id={id}
        >
          <div
            className="background-image w-full h-full bg-cover bg-center group-hover:scale-110 transition-all duration-1000 ease-in-out "
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div
            className="category-body-container h-5.625rem px-4 py-[25px]
          flex flex-col items-center justify-center border border-solid
           border-black bg-white opacity-70 absolute group-hover:opacity-90 duration-300 "
          >
            <h2 className="font-bold ">{title}</h2>
            <p className="font-light text-base ">Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
