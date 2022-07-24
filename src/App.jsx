// Hooks and utils
import { Routes, Route, Outlet } from "react-router-dom";
// Importing styles
import "./App.css";
// Importing components
import Home from "./routes/Home";
const Navigation = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div>
        <h1>I am the navigation bar</h1>
      </div>
      <Outlet />
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
