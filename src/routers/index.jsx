import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Beranda from "../pages/Beranda";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/beranda" element={<Beranda />} />
    </Routes>
  );
};

export default Router;
