// Hooks and utils
import { Routes, Route, Outlet } from "react-router-dom";
// Importing styles
import "./App.css";
// Importing components
import Home from "./routes/Home";
import Navigation from "./routes/Navigation";
import Shop from "./routes/Shop";
import Authentication from "./routes/Authentication";
import Checkout from "./routes/Checkout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
