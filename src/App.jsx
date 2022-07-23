import "./App.css";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Hats",
    },
    {
      id: 2,
      title: "Jackets",
    },
    {
      id: 3,
      title: "Sneakers",
    },
    {
      id: 4,
      title: "Womens",
    },
    {
      id: 5,
      title: "Mens",
    },
  ];
  return (
    <div className="categories-container flex flex-wrap justify-between w-[90%]">
      {categories.map((category) => (
        <div
          className="category-container flex min-w-30 h-60 
          flex-auto justify-center border border-solid
        border-black mt-0 mr-2 mb-3 items-center overflow-hidden"
        >
          <div className="background-image w-full h-full bg-cover bg-center" />
          <div
            className="category-body-container h-5.625rem px-0 py-1.5625rem 
          flex flex-col items-center justify-center border border-solid
           border-black bg-white opacity-70 absolute "
          >
            <h2 className="font-bold mt-0 mr-0.375rem mb-0">
              {category.title}
            </h2>
            <p className="font-light text-base ">Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
