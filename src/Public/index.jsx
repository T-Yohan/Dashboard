import React from "react";
import Login from "./Login";
import { Route,Routes } from "react-router-dom";
import Register from "./Register";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
  );
};

export default index;
