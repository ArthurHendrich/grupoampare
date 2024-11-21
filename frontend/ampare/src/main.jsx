import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import ListUsers from "./pages/ListUsers";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <nav>
      <Link to="/">Cadastro</Link>
      <Link to="/list">Lista de Cadastros</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ListUsers />} />
    </Routes>
  </BrowserRouter>
);
