import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import Login from "./components/Authentication/Login";

function App() {
  return (
    <>
      {/* ------------ Use all routes here ----------- */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
