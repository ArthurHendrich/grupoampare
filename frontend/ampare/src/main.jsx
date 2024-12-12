import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import WeeklyPatrol from "./pages/WeeklyPatrol";
import ListUsers from "./pages/ListUsers";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/list" element={<ListUsers />} />
      <Route path="/weekly-patrol" element={<WeeklyPatrol />} />
    </Routes>
  </BrowserRouter>
);
