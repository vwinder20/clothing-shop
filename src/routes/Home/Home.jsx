import { useState, useEffect } from "react";
import Directory from "../../components/Directory";
// Importing components

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:4000/categories")
      .then((response) => response.json())
      .then((respData) => setData(respData));
  }, []);

  return <Directory data={data} />;
};

export default Home;
