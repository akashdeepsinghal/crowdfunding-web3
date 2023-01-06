import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";

const Navbar = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
          Hom{" "}
        </Route>
      </Routes>
    </div>
  );
};

export default Navbar;
