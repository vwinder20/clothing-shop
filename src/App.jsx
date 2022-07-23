// Hooks and utils
import { useEffect, useState } from "react";
CategoryItem;
// Importing styles
import "./App.css";
import CategoryItem from "./components/CategoryItem";
import Directory from "./components/Directory";
// Importing components

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:4000/categories")
      .then((response) => response.json())
      .then((respData) => setData(respData));
  }, []);

  return <Directory data={data} />;
};

export default App;
