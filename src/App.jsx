// Hooks and utils
import { Routes, Route, Outlet } from "react-router-dom";
// Importing styles
import "./App.css";
// Importing components
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";

const Shop = () => {
  return (
    <section>
      <h1>Shop page</h1>
    </section>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
